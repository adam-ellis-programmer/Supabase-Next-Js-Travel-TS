export const getSlug = (text: string): string => {
  console.log('getSlug', text)

  return text
    .toLowerCase() // Convert to lowercase
    .trim() // Remove whitespace from both ends
    .replace(/\s+/g, '-') // Replace spaces with hyphens
    .replace(/[^\w\-]+/g, '') // Remove all non-word chars except hyphens
    .replace(/\-\-+/g, '-') // Replace multiple hyphens with single hyphen
    .replace(/^-+/, '') // Trim hyphens from start
    .replace(/-+$/, '') // Trim hyphens from end
}
