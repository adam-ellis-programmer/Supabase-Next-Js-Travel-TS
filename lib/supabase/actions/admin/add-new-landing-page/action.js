'use server'

import { createClient } from '../../../server'

export const createLandingPageAction = async (data) => {
  const supabase = await createClient()

  const basicInfo = data.basicInfo
  const quickFactsData = data.quickFactsData
  const topDestinations = data.topDestinations // array of objects
  const experiences = data.experiences // array of objects
  const attractions = data.attractions // array
  const travelTips = data.travelTips // array of objects
  const heroData = data.heroData // has just the file

  // Parent Table - flat data
  const preppedLandingPageData = {
    country_name: basicInfo.country_name,
    slug: basicInfo.slug,
    tagline: basicInfo.tag_line,
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

  // prettier-ignore
  if (inserted_landing_page_data) console.log('Data Success: ', inserted_landing_page_data)
  // prettier-ignore
  if (inserted_error) console.log('Error Inserting Prepped Landing Page Data',inserted_error)

  // ========================
  // HANDLE HERO IMAGE UPLOAD
  // ========================
  const path = `landing/hero/${inserted_landing_page_data[0].id}/${heroData.name}`
  const { data: heroImageData, error: heroImageError } = await supabase.storage
    .from('tour-images')
    .upload(path, heroData, {
      cacheControl: '3600',
      upsert: false,
    })

  if (heroImageError) console.log('Error inserting hero image', heroImageError)

  // =================
  // get hero url data
  // =================
  const { data: heroPublicUrlData } = supabase.storage
    .from('tour-images')
    .getPublicUrl(heroImageData.path)

  if (!heroPublicUrlData) console.log('Error getting hero url data')

  // updata main table with hero url data
  const { error: heroUrlUpdateError } = await supabase
    .from('landing_pages')
    .update({ url: heroPublicUrlData.publicUrl })
    .eq('id', inserted_landing_page_data[0].id)

  // prettier-ignore
  if(heroUrlUpdateError) console.log('Error Updating main table with hero url data!');

  // =====================================
  // HANDLE TOP DESTINATIONS WITH IMAGES
  // =====================================
  // -- (start of loop)
  for await (const [index, item] of topDestinations.entries()) {
    const imageFile = item.image
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

    if (imgError) console.log('Error inserting image around line 54', imgError)

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
      landing_page_id: inserted_landing_page_data[0].id,
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
    // prettier-ignore
    if (destinationsError) console.log('Error Inserting destination object: ',destinationsError);
  } // -- end of loop

  console.log('\n Destination data insert complete \n ')

  // ================================
  // HANDLE INSERT OF EXPERIENCE DATA
  // ================================
  // -- (start of loop)
  for await (const [index, item] of experiences.entries()) {
    const preppedExperiencesData = {
      landing_page_id: inserted_landing_page_data[0].id,
      icon: item.icon,
      title: item.title,
      description: item.description,
      display_order: index + 1,
    }
    // ===========≠=======
    // insert prepped data
    // ===========≠=======
    const { data: expData, error: exError } = await supabase
      .from('landing_page_experiences')
      .insert(preppedExperiencesData)
      .select()
    // prettier-ignore
    if(exError) console.log('Error inserting into tip page data', exError);
    // prettier-ignore
    if(expData) console.log('Success inserting into  tip page data', expData);
  } // -- end of loop

  // ========================
  // insert travel tips data
  // ========================
  // -- (start of loop) landing_page_travel_tips
  for (const [index, item] of travelTips.entries()) {
    const preppedTipsData = {
      landing_page_id: inserted_landing_page_data[0].id,
      icon: item.icon,
      tip: item.tip,
      title: item.title,
      display_order: index + 1,
    }

    const { data: tipData, error: tipError } = await supabase
      .from('landing_page_travel_tips')
      .insert(preppedTipsData)
      .select()
    // prettier-ignore
    if(tipError) console.log('Error inserting into landing page experiences', tipError);
    // prettier-ignore
    if(tipData) console.log('Success inserting e data', tipData);
  } // -- end of loop

  console.log('tip data inserted complete')
  console.log('\n All Data inserted successfully \n')

  return {
    success: true,
  }
}
