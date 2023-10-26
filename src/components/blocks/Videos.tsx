import { Container } from '@components/modules/Container'
import { PageBlockProps } from '@utils/types'
import { VideoItemProps } from '@utils/types/modules/VideoItemProps'
import { VideoItem } from '@components/modules/VideoItem'

interface VideosProps extends PageBlockProps {
  items: VideoItemProps[]
}

export const Videos = ({ items }: VideosProps) => {
  return (
    <div className="videos">
      <Container>
        <div className="inner">
          {items.map((item) => (
            <VideoItem key={item._id} {...item} />
          ))}
        </div>
      </Container>
    </div>
  )
}
