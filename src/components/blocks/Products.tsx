import { Container } from '@components/modules/Container'
import { MerchFilter } from '@components/blocks/MerchFilter'
import { ProductCard } from '@components/modules/ProductCard'
import { PageBlockProps } from '@utils/types'
import { ProductCardProps } from '@utils/types/modules/ProductCardProps'
import { Button } from '@components/modules/Button'

interface ProductsProps extends PageBlockProps {
  products: ProductCardProps[]
  allProducts?: boolean
  noButton?: boolean
  filter?: boolean
}

export const Products = ({
  products,
  allProducts,
  noButton,
}: ProductsProps) => {
  return (
    <div className="products">
      <Container size="wide">
        {allProducts ? (
          <MerchFilter items={products} />
        ) : (
          <>
            <div className="list">
              {products.map((product) => (
                <ProductCard {...product} key={product._id} minimal />
              ))}
            </div>
            {!noButton && (
              <div className="links">
                <Button tagType="a" url="/merch" buttonStyle="secondary">
                  Check out ALL the merch here!
                </Button>
              </div>
            )}
          </>
        )}
      </Container>
    </div>
  )
}
