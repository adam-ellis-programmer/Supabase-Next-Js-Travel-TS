import { createClient } from '@/lib/supabase/server'
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
    this.initSupabase()
  }

  private async initSupabase() {
    this.supabase = await createClient()
  }

  /**
   * Seed a single table with data
   */
  //   async seedTable<T>(table: string, data: T[]): Promise<SeedResult> {
  async seedTable(table: string, data: any[]): Promise<SeedResult> {
    try {
      const supabase = await createClient()

      console.log(`🌱 Seeding ${table}...`)

      const { error, count } = await supabase.from(table).insert(data).select()

      if (error) {
        console.error(`❌ Error seeding ${table}:`, error)
        return {
          table,
          success: false,
          error: error.message,
        }
      }

      console.log(`✅ Successfully seeded ${table} with ${data.length} records`)
      return {
        table,
        success: true,
        count: data.length,
      }
    } catch (error) {
      console.error(`❌ Exception seeding ${table}:`, error)
      return {
        table,
        success: false,
        error: error instanceof Error ? error.message : 'Unknown error',
      }
    }
  }

  /**
   * Clear all data from a table
   */
  async clearTable(table: string): Promise<SeedResult> {
    try {
      const supabase = await createClient()

      console.log(`🧹 Clearing ${table}...`)

      const { error } = await supabase.from(table).delete().neq('id', 0) // Delete all records

      if (error) {
        console.error(`❌ Error clearing ${table}:`, error)
        return {
          table,
          success: false,
          error: error.message,
        }
      }

      console.log(`✅ Successfully cleared ${table}`)
      return {
        table,
        success: true,
      }
    } catch (error) {
      console.error(`❌ Exception clearing ${table}:`, error)
      return {
        table,
        success: false,
        error: error instanceof Error ? error.message : 'Unknown error',
      }
    }
  }

  /**
   * Seed all tables in the correct order (respecting foreign key constraints)
   */
  async seedAll(clearFirst: boolean = false): Promise<SeedResult[]> {
    const results: SeedResult[] = []

    console.log('🚀 Starting database seeding...')
    console.log('================================\n')

    // Order matters! Must respect foreign key constraints
    const seedOrder = [
      { table: 'tours', data: tours },
      { table: 'itineraries', data: itineraries },
      { table: 'tour_images', data: tour_images },
      { table: 'booking_slots', data: booking_slots },
      { table: 'booking_slot_dates', data: booking_slot_dates },
    ] as const

    // Clear tables first if requested (in reverse order)
    if (clearFirst) {
      console.log('🧹 Clearing existing data...\n')
      const clearOrder = [...seedOrder].reverse()

      for (const { table } of clearOrder) {
        const result = await this.clearTable(table)
        results.push(result)
      }

      console.log('\n')
    }

    // Seed tables
    for (const { table, data } of seedOrder) {
      const result = await this.seedTable(table, data)
      results.push(result)
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

  /**
   * Seed only specific tables
   */
  async seedTables(
    tables: string[],
    clearFirst: boolean = false
  ): Promise<SeedResult[]> {
    const results: SeedResult[] = []

    const tableDataMap: Record<string, any[]> = {
      tours,
      itineraries,
      tour_images,
      booking_slots,
      booking_slot_dates,
    }

    if (clearFirst) {
      for (const table of [...tables].reverse()) {
        const result = await this.clearTable(table)
        results.push(result)
      }
    }

    for (const table of tables) {
      const data = tableDataMap[table]
      if (!data) {
        console.warn(`⚠️  No data found for table: ${table}`)
        continue
      }
      const result = await this.seedTable(table, data)
      results.push(result)
    }

    return results
  }
}

// Helper function to run seeder
export async function runSeeder(clearFirst: boolean = false) {
  const seeder = new DatabaseSeeder()
  return await seeder.seedAll(clearFirst)
}
