const { tour_images } = require('./tour_images.ts') // ✅ import the exported array
// console.log(tour_images)

async function checkImage(url) {
  try {
    const res = await fetch(url, { method: 'HEAD' })
    if (!res.ok) return false
    const ct = res.headers.get('content-type') || ''
    return ct.startsWith('image/')
  } catch (err) {
    return false
  }
}

async function main() {
  for (const img of tour_images) {
    const ok = await checkImage(img.image_url)
    if (!ok) {
      console.error(
        `❌ Broken image for ${img.tour_ref_id}, display_order ${img.display_order}: ${img.image_url}`
      )
    } else {
      console.log(`✅ Works: ${img.tour_ref_id} [${img.display_order}]`)
    }
  }
}

main().catch(console.error)
