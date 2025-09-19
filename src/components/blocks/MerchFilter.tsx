import { ProductCard } from '../modules/ProductCard'
import { Heading } from '@components/modules/Heading'
import { slugify } from '@utils/slugify'
import { Fragment } from 'react'
import { AllProductProps } from './Products'

export const MerchFilter = ({ items }: { items: AllProductProps }) => {
  const merchArray = [
    { title: 'Music', products: items.music },
    { title: 'Clothing', products: items.clothing },
    { title: 'Stickers', products: items.stickers },
    { title: 'Accessories', products: items.accessories },
  ]

  return (
    <div className="merchFilter">
      {merchArray?.map((category) => (
        <div key={category?.title} className="category">
          {category.title && (
            <Heading headingId={slugify(category.title)} level="3">
              {category.title}
            </Heading>
          )}
          <div className="list">
            {category?.products?.map((product) => (
              <Fragment key={product._id}>
                {product && <ProductCard {...product} />}
              </Fragment>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}
