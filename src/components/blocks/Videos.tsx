import { Container } from '@components/modules/Container'
import { Heading } from '@components/modules/Heading'
import { PageBlockProps } from '@utils/types'
import { VideoItemProps } from '@utils/types/modules/VideoItemProps'
import { urlFor } from '@utils/urlFor'
import ReactPlayer from 'react-player'
import { BsPlayCircleFill } from 'react-icons/bs'
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
