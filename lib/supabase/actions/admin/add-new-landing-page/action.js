'use server'

import { createClient } from '../../../server'

export const createLandingPageAction = async (data) => {
  const supabase = await createClient()

  // instantiate data
  const basicInfo = data.basicInfo
  const quickFactsData = data.quickFactsData
  const topDestinations = data.topDestinations
  const experiences = data.experiences
  const attractions = data.attractions
  const travelTips = data.travelTips
  const heroData = data.heroData

  // Validate required data
  if (!heroData || !heroData.name) {
    return {
      success: false,
      error: 'Hero image is required',
    }
  }

  // Parent Table - flat data
  const preppedLandingPageData = {
    country_name: basicInfo.country_name,
    slug: basicInfo.slug,
    tagline: basicInfo.tagline,
    hero_image_url: '',
    description: basicInfo.description,
    best_time: quickFactsData.best_time,
    currency: quickFactsData.currency,
    language: quickFactsData.language,
    timezone: quickFactsData.timezone,
    visa: quickFactsData.visa,
    attractions: attractions,
    is_active: true,
  }

  // ==================
  // INSERT MAIN RECORD
  // ==================
  const { data: inserted_landing_page_data, error: inserted_error } =
    await supabase.from('landing_pages').insert(preppedLandingPageData).select()

  if (inserted_error) {
    console.log('Error Inserting Prepped Landing Page Data', inserted_error)
    return {
      success: false,
      error: inserted_error.message,
    }
  }

  if (!inserted_landing_page_data || inserted_landing_page_data.length === 0) {
    return {
      success: false,
      error: 'Failed to create landing page',
    }
  }

  console.log('Data Success: ', inserted_landing_page_data)

  const landingPageId = inserted_landing_page_data[0].id

  // ========================
  // HANDLE HERO IMAGE UPLOAD
  // ========================
  const path = `landing/hero/${landingPageId}/${heroData.name}`
  const { data: heroImageData, error: heroImageError } = await supabase.storage
    .from('tour-images')
    .upload(path, heroData, {
      cacheControl: '3600',
      upsert: false,
    })

  if (heroImageError) {
    console.log('Error inserting hero image', heroImageError)
    return {
      success: false,
      error: 'Failed to upload hero image: ' + heroImageError.message,
    }
  }

  // =================
  // get hero url data
  // =================
  const { data: heroPublicUrlData } = supabase.storage
    .from('tour-images')
    .getPublicUrl(heroImageData.path)

  if (!heroPublicUrlData) {
    console.log('Error getting hero url data')
    return {
      success: false,
      error: 'Failed to get hero image URL',
    }
  }

  //  Update main table with hero url data using correct field name
  const { error: heroUrlUpdateError } = await supabase
    .from('landing_pages')
    .update({ hero_image_url: heroPublicUrlData.publicUrl })
    .eq('id', landingPageId)

  if (heroUrlUpdateError) {
    console.log('Error Updating main table with hero url data!')
    return {
      success: false,
      error: 'Failed to update hero image URL: ' + heroUrlUpdateError.message,
    }
  }

  // =====================================
  // HANDLE TOP DESTINATIONS WITH IMAGES
  // =====================================
  for (const [index, item] of topDestinations.entries()) {
    const imageFile = item.image

    // Check if image exists
    if (!imageFile || !imageFile.name) {
      console.log(`Skipping destination ${item.name} - no image provided`)
      continue
    }

    // =================================
    // Upload image and get back the url
    // =================================
    const customPath = `landing/${basicInfo.country_name}/${imageFile.name}`
    const { data: imgData, error: imgError } = await supabase.storage
      .from('tour-images')
      .upload(customPath, imageFile, {
        cacheControl: '3600',
        upsert: false,
      })

    if (imgError) {
      console.log('Error inserting image:', imgError)
      continue // Skip this destination but continue with others
    }

    // =============
    // get image url
    // =============
    const { data: imgUrlData } = supabase.storage
      .from('tour-images')
      .getPublicUrl(imgData.path)

    // ============
    // prepped data
    // ============
    const preppedDestinationsData = {
      landing_page_id: landingPageId,
      name: item.name,
      image_url: imgUrlData.publicUrl,
      description: item.description,
      display_order: index + 1,
    }

    // ===================
    // insert prepped data
    // ===================
    const { data: insertedDestData, error: destinationsError } = await supabase
      .from('landing_page_destinations')
      .insert(preppedDestinationsData)
      .select()

    if (insertedDestData) console.log('Success: ', insertedDestData)
    if (destinationsError) {
      console.log('Error Inserting destination object: ', destinationsError)
    }
  }

  console.log('\n Destination data insert complete \n')

  // ================================
  // HANDLE INSERT OF EXPERIENCE DATA
  // ================================
  for (const [index, item] of experiences.entries()) {
    const preppedExperiencesData = {
      landing_page_id: landingPageId,
      icon: item.icon,
      title: item.title,
      description: item.description,
      display_order: index + 1,
    }

    const { data: expData, error: exError } = await supabase
      .from('landing_page_experiences')
      .insert(preppedExperiencesData)
      .select()

    if (exError) console.log('Error inserting experience data', exError)
    if (expData) console.log('Success inserting experience data', expData)
  }

  // ========================
  // insert travel tips data
  // ========================
  for (const [index, item] of travelTips.entries()) {
    const preppedTipsData = {
      landing_page_id: landingPageId,
      icon: item.icon,
      tip: item.tip,
      title: item.title,
      display_order: index + 1,
    }

    const { data: tipData, error: tipError } = await supabase
      .from('landing_page_travel_tips')
      .insert(preppedTipsData)
      .select()

    if (tipError) console.log('Error inserting travel tips', tipError)
    if (tipData) console.log('Success inserting travel tips data', tipData)
  }

  console.log('tip data inserted complete')
  console.log('\n All Data inserted successfully \n')

  return {
    success: true,
    data: {
      id: landingPageId,
      slug: basicInfo.slug,
    },
  }
}
