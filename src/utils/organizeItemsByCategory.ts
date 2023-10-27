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
      tags: item.tags,
      externalId: item.externalId,
      variants: item.variants,
      slug: item.slug,
    })
  })

  return organizedItems
}
