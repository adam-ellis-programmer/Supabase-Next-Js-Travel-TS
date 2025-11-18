'use server'

import { createClient } from '../../server'

// can assign a slotId to each new date in that slot in the dom
// can assign a slotId to each new date in that slot in the dom
// console.dir(slotsToDelete, { depth: null })

export async function updateBookingDates(
  updateActivate,
  bookingSlotsData,
  tourId
) {
  const supabase = await createClient()

  //  Compare: DOM data vs Database IDs
  //  GROUP A: NEW SLOTS (to INSERT)
  //  GROUP B: EXISTING SLOTS (to UPDATE)
  //  GROUP C: DELETED SLOTS (to DELETE)

  // ==========================================================================================================
  // -- CATEGORIZE AND SPLIT DATA -- GLOBAL
  // ==========================================================================================================

  try {
    // Step 1: Fetch existing booking slots for this tour
    const { data: existingSlots, error: fetchError } = await supabase
      .from('booking_slots')
      .select('id, booking_slot_dates(*)')
      .eq('tour_id', tourId)

    if (fetchError) throw fetchError

    // gather up all slot ids from DATABASE
    const existingSlotIds = new Set(existingSlots.map((slot) => slot.id) || [])

    // prettier-ignore
    // filter on data from the dom matched against existing slots in the DATABASE
    const existingSlotData =  bookingSlotsData.filter((item) => existingSlotIds.has(item.id))

    // prettier-ignore
    // filter dom data match any ids NOT from existing ids from the database
    const newSlots =  bookingSlotsData.filter((item) => !existingSlotIds.has(item.id))

    // prettier-ignore
    // get all slot ids from the DOM only return items with an id (not new items)
    const existingSlotIdsFromDom =  new Set(bookingSlotsData.map((slot) => slot.id).filter(Boolean))

    // prettier-ignore
    // match databse data where id is NOT in slotIds
    const slotsToDelete = existingSlots.filter((item) => !existingSlotIdsFromDom.has(item.id))

    // prettier-ignore
    const existingUpdatedSlots = bookingSlotsData.filter((slot) => slot.id && existingSlotIds.has(slot.id))

    const insertedSlots = [] // store data back from db so we can use later

    // ==========================================================================================================
    // -- DETECT AND INSERT NEW SLOTS
    // ==========================================================================================================

    async function insertNewSlots() {
      if (newSlots.length) {
        for (const slot of newSlots) {
          const { booking_slot_dates, ...slotData } = slot

          const { data: insertedSlot, error: insertSlotError } = await supabase
            .from('booking_slots')
            .insert({
              tour_id: tourId,
              month: slotData.month,
              year: slotData.year,
              bookable_places: slotData.bookable_places || 0,
              show: slotData.show ?? true,
              display_order: slotData.display_order || 0,
            })
            .select()
            .single()

          if (insertSlotError) throw insertSlotError

          // prettier-ignore
          insertedSlots.push({...insertedSlot , dates: booking_slot_dates || []})
        }
      } else {
        console.log('no new slots at the moment!')
      }
    }

    await insertNewSlots()

    // ==========================================================================================================
    // -- DETECT AND INSERT NEW DATES AND SLOTS
    // ==========================================================================================================

    async function insertNewDates() {
      if (insertedSlots) {
        console.log('new dates running')
      }

      for (const slot of insertedSlots) {
        const { dates, ...newSlot } = slot
        console.log(newSlot)

        // console.log('slot--\n\n\n\n', slot)
        // console.log('new slot--\n\n\n\n', newSlot)
        // console.log('dates --\n\n\n\n', dates)

        for (const date of dates) {
          const dataToInsert = {
            ...date,
            booking_slot_id: newSlot.id,
          }

          console.log('dataToInsert')
          console.log(dataToInsert)

          const { data, error } = await supabase
            .from('booking_slot_dates')
            .insert(dataToInsert)
            .select()

          if (data) {
            console.log('success: inserted record', data[0].id)
          }
        }
      }
    }

    await insertNewDates()

    // ==========================================================================================================
    // -- DETECT AND DELTES SLOTS WITH CHILDREN
    // ==========================================================================================================

    async function deleteSlot() {
      if (slotsToDelete.length) {
        console.log(slotsToDelete)
        const slotIds = new Set()
        const dateIds = new Set()

        for (const slot of slotsToDelete) {
          const { booking_slot_dates } = slot
          slotIds.add(slot.id)
          for (const date of booking_slot_dates) {
            dateIds.add(date.id)
          }
        }

        try {
          const slotRes = await supabase
            .from('booking_slots')
            .delete()
            .in('id', [...slotIds])

          const dateRes = await supabase
            .from('booking_slot_dates')
            .delete()
            .in('id', [...dateIds])

          console.log('\n slotIds', slotIds)
          console.log('\n dateIds', dateIds)
          console.log('\n success')
        } catch (error) {
          console.log(error)
        }
      } else {
        console.log('no slot to delete at the moment!')
      }
    }

    await deleteSlot()

    // ==========================================================================================================
    // -- DETECT AND BLAST ALL DATES WITH UPDATE
    // ==========================================================================================================

    // set boolean if edit mode activated ifEditActivated
    async function updateDatesBlast() {
      console.log('\n updateActivate:', updateActivate)

      if (updateActivate) {
        for (const slot of bookingSlotsData) {
          const { booking_slot_dates, ...newSlot } = slot

          for (const date of booking_slot_dates) {
            // console.log('date', date)

            const { error } = await supabase
              .from('booking_slot_dates')
              .update({ ...date })
              .eq('id', date.id)
            console.log('item date updated')
          }
        }
      }
    }

    updateDatesBlast()

    // ==========================================================================================================
    // -- DETECT AND BLAST SLOTS ONLY
    // ==========================================================================================================

    async function updateSlotBlast() {
      console.log('bookingSlotsData from updateSlotBlast====')

      const cleanedSlots = bookingSlotsData.map((slot) => {
        const { booking_slot_dates, updated_at, ...newSlot } = slot
        return newSlot
      })

      for (const slot of cleanedSlots) {
        const { error } = await supabase
          .from('booking_slots')
          .update(slot)
          .eq('id', slot.id)

        console.log('\nslot updated successfullly !\n')
      }
    }

    await updateSlotBlast()

    // ==========================================================================================================
    // -- DETECT AND DELETE INDIVIDUAL DATES FROM SLOTS
    // ==========================================================================================================

    async function detectAndDeleteDates() {
      const existingDates = new Set()
      const domDates = new Set()
      console.log('\n running from detectDeleted dates')

      // get ids from existing database dates data
      for (const slot of existingSlots) {
        const { booking_slot_dates, ...newSlot } = slot
        for (const date of booking_slot_dates) {
          // console.log(date.id)
          existingDates.add(date.id)
        }
      }

      // get ids from updated dom data
      console.log('\n\n\n get data froom dom')
      for (const slot of bookingSlotsData) {
        const { booking_slot_dates, ...newSlot } = slot
        for (const date of booking_slot_dates) {
          domDates.add(date.id)
        }
      }

      const itemsToDelete = [...existingDates].filter((id) => !domDates.has(id))

      if (itemsToDelete.length) {
        const response = await supabase
          .from('booking_slot_dates')
          .delete()
          .in('id', itemsToDelete)
        console.log(response)
        console.log('Success items deleted ')
      }
    }

    detectAndDeleteDates()

    return {
      success: true,
      message: 'Success!',
      existingSlots,
      existingSlotIds,
      bookingSlotsData,
      existingSlotData,
      newSlots,
      slotsToDelete,
      existingUpdatedSlots,
      insertedSlots,
    }
  } catch (error) {
    console.log(error)
  }
}
