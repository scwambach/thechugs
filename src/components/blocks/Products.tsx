import { Container } from '@components/modules/Container'
import { MediaCard } from '@components/modules/MediaCard'
import { toUsCurrency } from '@utils/toUsCurrency'
import { PageBlockProps } from '@utils/types'
import { ProductCardProps } from '@utils/types/modules/ProductCard'

interface ProductsProps extends PageBlockProps {
  products: ProductCardProps[]
}

export const Products = ({ products }: ProductsProps) => {
  return (
    <div className="products">
      <Container size="wide">
        <div className="list">
          {products.map((product) => (
            <MediaCard
              key={product._id}
              _id={product._id}
              image={product.images[0]}
              description={product.description}
              info={`${toUsCurrency(product.price)}`}
              title={product.title}
              link={product.slug}
            />
          ))}
        </div>
      </Container>
    </div>
  )
}
