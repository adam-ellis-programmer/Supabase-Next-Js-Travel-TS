'use server'

import { createClient } from '../../server'

export async function getToursAdmin() {
  const supabase = await createClient()

  try {
    // Get the current user
    const {
      data: { user },
      error: authError,
    } = await supabase.auth.getUser()

    if (authError || !user) {
      return {
        success: false,
        error: 'Not authenticated',
        data: null,
      }
    }

    // Check if user is admin
    const { data: profile, error: profileError } = await supabase
      .from('profiles')
      .select('user_role, role_level')
      .eq('id', user.id)
      .single()

    if (profileError || !profile) {
      return {
        success: false,
        error: 'Profile not found',
        data: null,
      }
    }

    // Verify admin role
    if (profile.user_role !== 'admin') {
      return {
        success: false,
        error: 'Unauthorized - Admin access required',
        data: null,
      }
    }

    // Fetch all tours with their primary images
    const { data: tours, error: toursError } = await supabase
      .from('tours')
      .select(
        `
        id,
        tour_name,
        slug,
        country,
        duration,
        price,
        group_size,
        destinations,
        rating,
        publish,
        best_seller,
        show_case,
        tour_images!tour_images_tour_id_fkey(
          image_url,
          image_alt,
          is_primary
        )
      `
      )
      .order('created_at', { ascending: false })

    if (toursError) {
      return {
        success: false,
        error: toursError.message,
        data: null,
      }
    }

    // Transform the data to match your component's Tour interface
    const transformedTours = tours?.map((tour) => {
      // Get primary image or first image
      const primaryImage =
        tour.tour_images?.find((img: any) => img.is_primary) ||
        tour.tour_images?.[0]

      return {
        id: tour.id,
        name: tour.tour_name,
        country: tour.country,
        duration: tour.duration,
        price: parseFloat(tour.price),
        rating: parseFloat(tour.rating),
        destinations: tour.destinations,
        maxPeople: tour.group_size,
        image: primaryImage?.image_url || '/placeholder-tour.jpg',
        publish: tour.publish,
        bestSeller: tour.best_seller,
        showCase: tour.show_case,
      }
    })

    return {
      success: true,
      error: null,
      data: transformedTours,
    }
  } catch (error) {
    console.error('Error in getToursAdmin:', error)
    return {
      success: false,
      error: 'An unexpected error occurred',
      data: null,
    }
  }
}

export async function deleteTourAdmin(tourId: number) {
  const supabase = await createClient()

  try {
    // Get the current user
    const {
      data: { user },
      error: authError,
    } = await supabase.auth.getUser()

    if (authError || !user) {
      return { success: false, error: 'Not authenticated' }
    }

    // Check if user is admin
    const { data: profile, error: profileError } = await supabase
      .from('profiles')
      .select('user_role')
      .eq('id', user.id)
      .single()

    if (profileError || profile?.user_role !== 'admin') {
      return { success: false, error: 'Unauthorized' }
    }

    // Delete the tour (tour_images should cascade delete if FK is set up properly)
    const { error: deleteError } = await supabase
      .from('tours')
      .delete()
      .eq('id', tourId)

    if (deleteError) {
      return { success: false, error: deleteError.message }
    }

    return { success: true, error: null }
  } catch (error) {
    console.error('Error in deleteTourAdmin:', error)
    return { success: false, error: 'An unexpected error occurred' }
  }
}

// ... existing getToursAdmin function ...

export async function getTourByIdAdmin(tourId: number) {
  const supabase = await createClient()

  try {
    // Get the current user
    const {
      data: { user },
      error: authError,
    } = await supabase.auth.getUser()

    if (authError || !user) {
      return {
        success: false,
        error: 'Not authenticated',
        data: null,
      }
    }

    // Check if user is admin
    const { data: profile, error: profileError } = await supabase
      .from('profiles')
      .select('user_role')
      .eq('id', user.id)
      .single()

    if (profileError || profile?.user_role !== 'admin') {
      return {
        success: false,
        error: 'Unauthorized - Admin access required',
        data: null,
      }
    }

    // Fetch the specific tour with all its data
    const { data: tour, error: tourError } = await supabase
      .from('tours')
      .select(
        `
        *,
        tour_images(
         *
        ),
        itineraries(
          *
        )
      `
      )
      .eq('id', tourId)
      .single()

    if (tourError) {
      return {
        success: false,
        error: tourError.message,
        data: null,
      }
    }

    if (!tour) {
      return {
        success: false,
        error: 'Tour not found',
        data: null,
      }
    }

    return {
      success: true,
      error: null,
      data: tour,
    }
  } catch (error) {
    console.error('Error in getTourByIdAdmin:', error)
    return {
      success: false,
      error: 'An unexpected error occurred',
      data: null,
    }
  }
}

export async function updateTourAdmin(tourId: number, tourData: any) {
  const supabase = await createClient()

  try {
    // Get the current user
    const {
      data: { user },
      error: authError,
    } = await supabase.auth.getUser()

    if (authError || !user) {
      return { success: false, error: 'Not authenticated' }
    }

    // Check if user is admin
    const { data: profile, error: profileError } = await supabase
      .from('profiles')
      .select('user_role')
      .eq('id', user.id)
      .single()

    if (profileError || profile?.user_role !== 'admin') {
      return { success: false, error: 'Unauthorized' }
    }

    // Update the tour
    const { data, error: updateError } = await supabase
      .from('tours')
      .update(tourData)
      .eq('id', tourId)
      .select()
      .single()

    if (updateError) {
      return { success: false, error: updateError.message }
    }

    return { success: true, error: null, data }
  } catch (error) {
    console.error('Error in updateTourAdmin:', error)
    return { success: false, error: 'An unexpected error occurred' }
  }
}

// ... existing deleteTourAdmin function ...
