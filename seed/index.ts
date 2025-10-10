import 'dotenv/config'
import { createServiceClient } from '@/lib/supabase/service'
import { booking_slot_dates } from './data/booking_slot_dates'
import { booking_slots } from './data/booking_slots'
import { itineraries } from './data/itineraries'
import { tour_images } from './data/tour_images'
import { tours } from './data/tours'

interface SeedResult {
  table: string
  success: boolean
  count?: number
  error?: string
}

export class DatabaseSeeder {
  private supabase: any

  constructor() {
    this.supabase = createServiceClient()
  }

  async clearTable(table: string): Promise<SeedResult> {
    try {
      console.log(`🧹 Clearing ${table}...`)
      const { error } = await this.supabase.from(table).delete().neq('id', 0)

      if (error) {
        console.error(`❌ Error clearing ${table}:`, error)
        return { table, success: false, error: error.message }
      }

      console.log(`✅ Successfully cleared ${table}`)
      return { table, success: true }
    } catch (error) {
      console.error(`❌ Exception clearing ${table}:`, error)
      return {
        table,
        success: false,
        error: error instanceof Error ? error.message : 'Unknown error',
      }
    }
  }

  async seedAll(clearFirst: boolean = false): Promise<SeedResult[]> {
    const results: SeedResult[] = []

    console.log('🚀 Starting database seeding...')
    console.log('================================\n')

    // Clear tables if requested
    if (clearFirst) {
      console.log('🧹 Clearing existing data...\n')

      const clearOrder = [
        'booking_slot_dates',
        'booking_slots',
        'tour_images',
        'itineraries',
        'tours',
      ]

      for (const table of clearOrder) {
        const result = await this.clearTable(table)
        results.push(result)
      }
      console.log('\n')
    }

    // ✅ Step 1: Insert tours and create ref_id → real_id mapping
    console.log(`🌱 Seeding tours...`)

    console.log('==============')
    console.log('TOURS-ORIG', tours)
    console.log('==============')
    // Remove ref_id before inserting
    const toursForDB = tours.map(({ ref_id, ...tour }) => tour)

    console.log('==============')
    console.log('TOURS-FRO-DB', toursForDB)
    console.log('==============')

    const { data: insertedTours, error: toursError } = await this.supabase
      .from('tours')
      .insert(toursForDB)
      .select('id')

    if (toursError) {
      console.error(`❌ Error seeding tours:`, toursError)
      results.push({
        table: 'tours',
        success: false,
        error: toursError.message,
      })
      return results
    }

    console.log(`✅ Successfully seeded tours with ${tours.length} records`)
    results.push({ table: 'tours', success: true, count: tours.length })

    // Create mapping: ref_id → real database ID
    const tourIdMap = new Map<string, number>()

    console.log('1: ==============')
    console.log(tourIdMap)
    console.log('1: ==============')

    tours.forEach((tour, index) => {
      tourIdMap.set(tour.ref_id, insertedTours[index].id)
    })

    console.log('2: ==============')
    console.log(tourIdMap)
    console.log('2: ==============')

    console.log('📍 Tour ID Mapping:')
    tourIdMap.forEach((realId, refId) => {
      console.log(`   ${refId} → ${realId}`)
    })
    console.log()

    // ✅ Step 2: Insert itineraries
    console.log(`🌱 Seeding itineraries...`)
    const itinerariesForDB = itineraries.map(
      ({ tour_ref_id, ...itinerary }) => ({
        ...itinerary,
        tour_id: tourIdMap.get(tour_ref_id)!,
      })
    )

    const { error: itinerariesError } = await this.supabase
      .from('itineraries')
      .insert(itinerariesForDB)

    if (itinerariesError) {
      console.error(`❌ Error seeding itineraries:`, itinerariesError)
      results.push({
        table: 'itineraries',
        success: false,
        error: itinerariesError.message,
      })
    } else {
      console.log(
        `✅ Successfully seeded itineraries with ${itineraries.length} records`
      )
      results.push({
        table: 'itineraries',
        success: true,
        count: itineraries.length,
      })
    }

    // ✅ Step 3: Insert tour images
    console.log(`🌱 Seeding tour_images...`)
    const tourImagesForDB = tour_images.map(({ tour_ref_id, ...image }) => ({
      ...image,
      tour_id: tourIdMap.get(tour_ref_id)!,
    }))

    const { error: imagesError } = await this.supabase
      .from('tour_images')
      .insert(tourImagesForDB)

    if (imagesError) {
      console.error(`❌ Error seeding tour_images:`, imagesError)
      results.push({
        table: 'tour_images',
        success: false,
        error: imagesError.message,
      })
    } else {
      console.log(
        `✅ Successfully seeded tour_images with ${tour_images.length} records`
      )
      results.push({
        table: 'tour_images',
        success: true,
        count: tour_images.length,
      })
    }

    // ✅ Step 4: Insert booking slots
    console.log(`🌱 Seeding booking_slots...`)
    const bookingSlotsForDB = booking_slots.map(
      ({ tour_ref_id, slot_ref_id, ...slot }) => ({
        ...slot,
        tour_id: tourIdMap.get(tour_ref_id)!,
      })
    )

    const { data: insertedSlots, error: slotsError } = await this.supabase
      .from('booking_slots')
      .insert(bookingSlotsForDB)
      .select('id')

    if (slotsError) {
      console.error(`❌ Error seeding booking_slots:`, slotsError)
      results.push({
        table: 'booking_slots',
        success: false,
        error: slotsError.message,
      })
      return results
    }

    console.log(
      `✅ Successfully seeded booking_slots with ${booking_slots.length} records`
    )
    results.push({
      table: 'booking_slots',
      success: true,
      count: booking_slots.length,
    })

    // Create mapping: slot_ref_id → real database ID
    const slotIdMap = new Map<string, number>()
    booking_slots.forEach((slot, index) => {
      slotIdMap.set(slot.slot_ref_id, insertedSlots[index].id)
    })

    console.log('📍 Booking Slot ID Mapping:')
    slotIdMap.forEach((realId, refId) => {
      console.log(`   ${refId} → ${realId}`)
    })
    console.log()

    // ✅ Step 5: Insert booking slot dates
    console.log(`🌱 Seeding booking_slot_dates...`)
    const bookingSlotDatesForDB = booking_slot_dates.map(
      ({ slot_ref_id, ...date }) => ({
        ...date,
        booking_slot_id: slotIdMap.get(slot_ref_id)!,
      })
    )

    const { error: datesError } = await this.supabase
      .from('booking_slot_dates')
      .insert(bookingSlotDatesForDB)

    if (datesError) {
      console.error(`❌ Error seeding booking_slot_dates:`, datesError)
      results.push({
        table: 'booking_slot_dates',
        success: false,
        error: datesError.message,
      })
    } else {
      console.log(
        `✅ Successfully seeded booking_slot_dates with ${booking_slot_dates.length} records`
      )
      results.push({
        table: 'booking_slot_dates',
        success: true,
        count: booking_slot_dates.length,
      })
    }

    // Summary
    console.log('\n================================')
    console.log('📊 Seeding Summary:')
    console.log('================================')

    const successful = results.filter((r) => r.success).length
    const failed = results.filter((r) => !r.success).length

    results.forEach((result) => {
      const status = result.success ? '✅' : '❌'
      const count = result.count ? ` (${result.count} records)` : ''
      const error = result.error ? ` - ${result.error}` : ''
      console.log(`${status} ${result.table}${count}${error}`)
    })

    console.log(`\nTotal: ${successful} successful, ${failed} failed`)
    console.log('================================\n')

    return results
  }

  async seedTables(tables: string[], clearFirst: boolean = false) {
    return this.seedAll(clearFirst)
  }
}

export async function runSeeder(clearFirst: boolean = false) {
  const seeder = new DatabaseSeeder()
  return await seeder.seedAll(clearFirst)
}
