import { Container } from '@components/modules/Container'
import { ProductCard } from '@components/modules/ProductCard'
import { PageBlockProps } from '@utils/types'
import { ProductCardProps } from '@utils/types/modules/ProductCardProps'

interface ProductsProps extends PageBlockProps {
  products: ProductCardProps[]
}

export const Products = ({ products }: ProductsProps) => {
  return (
    <div className="products">
      <Container size="wide">
        <div className="list">
          {products.map((product) => (
            <ProductCard {...product} key={product._id} />
          ))}
        </div>
      </Container>
    </div>
  )
}
