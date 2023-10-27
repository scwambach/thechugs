'use client'
import { ProductCardProps } from '@utils/types/modules/ProductCardProps'
import { ProductCard } from '../modules/ProductCard'
import { organizeItemsByCategory } from '@utils/organizeItemsByCategory'
import { Heading } from '@components/modules/Heading'
import { slugify } from '@utils/slugify'

interface MerchFilterProps {
  items: ProductCardProps[]
}

export const MerchFilter = ({ items }: MerchFilterProps) => {
  return (
    <div className="merchFilter">
      {organizeItemsByCategory(items).map((category) => (
        <div key={category.title} className="category">
          <Heading headingId={slugify(category.title)} level="3">
            {category.title}
          </Heading>
          <div className="list">
            {category.products.map((product) => (
              <ProductCard {...product} key={product._id} />
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}
