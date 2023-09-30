import { Container } from '@components/modules/Container'
import { MediaCard } from '@components/modules/MediaCard'
import { postToMediaCard } from '@utils/postToMediaCard'
import { PageBlockProps } from '@utils/types'
import { PostCardProps } from '@utils/types/modules/PostCardProps'

interface PostsProps extends PageBlockProps {
  posts: PostCardProps[]
}

export const Posts = ({ posts }: PostsProps) => {
  return (
    <div className="posts">
      <Container size="wide">
        <div className="list">
          {posts?.map((post) => {
            return <MediaCard key={post._id} {...postToMediaCard(post)} />
          })}
        </div>
      </Container>
    </div>
  )
}
