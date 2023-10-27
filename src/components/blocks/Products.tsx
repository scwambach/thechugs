import { Container } from '@components/modules/Container'
import { MerchFilter } from '@components/blocks/MerchFilter'
import { ProductCard } from '@components/modules/ProductCard'
import { PageBlockProps } from '@utils/types'
import { ProductCardProps } from '@utils/types/modules/ProductCardProps'

interface ProductsProps extends PageBlockProps {
  products: ProductCardProps[]
  filter?: boolean
}

export const Products = ({ products, filter }: ProductsProps) => {
  return (
    <div className="products">
      <Container size="wide">
        {filter ? (
          <MerchFilter items={products} />
        ) : (
          <div className="list">
            {products.map((product) => (
              <ProductCard {...product} key={product._id} />
            ))}
          </div>
        )}
      </Container>
    </div>
  )
}
