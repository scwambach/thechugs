import { Container } from '@components/modules/Container'
import { PageBlockProps } from '@utils/types'
import { PostCardProps } from '@utils/types/modules/PostCardProps'

interface PostsProps extends PageBlockProps {
  posts: PostCardProps[]
}

export const Posts = (props: PostsProps) => {
  return (
    <div className="posts">
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
