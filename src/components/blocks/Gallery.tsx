import { Container } from '@components/modules/Container'
import { ImageProps, PageBlockProps } from '@utils/types'

interface GalleryProps extends PageBlockProps {
  images: ImageProps[]
}

export const Gallery = (props: GalleryProps) => {
  return (
    <div className="gallery">
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
