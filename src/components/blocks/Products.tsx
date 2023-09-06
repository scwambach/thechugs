import { Container } from '@components/modules/Container'
import { PageBlockProps } from '@utils/types'
import { PostCardProps } from '@utils/types/modules/PostCardProps'

interface ProductsProps extends PageBlockProps {
  products: PostCardProps[]
}

export const Products = (props: ProductsProps) => {
  return (
    <div className="products">
      <Container size="wide">
        <code>
          <pre
            style={{
              fontFamily: 'monospace',
              display: 'block',
              padding: '50px',
              color: '#88ffbf',
              backgroundColor: 'black',
              textAlign: 'left',
              whiteSpace: 'pre-wrap',
            }}
          >
            {JSON.stringify(props, null, '    ')}
          </pre>
        </code>
      </Container>
    </div>
  )
}
