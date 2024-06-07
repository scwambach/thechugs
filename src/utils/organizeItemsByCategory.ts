import { ProductCardProps } from './types/modules/ProductCardProps'

interface CategoryObject {
  title: string
  products: ProductCardProps[]
}

export const organizeItemsByCategory = (items: ProductCardProps[]) => {
  const organizedItems: CategoryObject[] = []

  items.forEach((item) => {
    const category = item.category.title
    let categoryObject: CategoryObject | undefined = organizedItems.find(
      (cat) => cat.title === category
    )

    if (!categoryObject) {
      categoryObject = { title: category, products: [] }
      organizedItems.push(categoryObject)
    }

    categoryObject.products.push({
      _id: item._id,
      description: item.description,
      images: item.images,
      title: item.title,
      thumbnail: item.thumbnail,
      category: item.category,
      price: item.price,
      outOfStockMsg: item.outOfStockMsg,
      tags: item.tags,
      externalId: item.externalId,
      variants: item.variants,
      slug: item.slug,
    })
  })

  organizedItems.sort((a, b) => {
    if (a.title === 'Clothing') return -1
    if (a.title === 'Music') return -1
    if (b.title === 'Clothing') return 1
    if (b.title === 'Music') return 1
    return a.title.localeCompare(b.title)
  })

  const clothingIndex = organizedItems.findIndex(
    (item) => item.title === 'Clothing'
  )

  const musicIndex = organizedItems.findIndex((item) => item.title === 'Music')

  if (clothingIndex !== -1) {
    const clothing = organizedItems.splice(clothingIndex, 1)
    organizedItems.unshift(clothing[0])
  }

  if (musicIndex !== -1) {
    const music = organizedItems.splice(musicIndex, 1)
    organizedItems.unshift(music[0])
  }

  return organizedItems
}
