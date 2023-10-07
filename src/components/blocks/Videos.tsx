import { Container } from '@components/modules/Container'
import { Heading } from '@components/modules/Heading'
import { PageBlockProps } from '@utils/types'
import { VideoItemProps } from '@utils/types/modules/VideoItemProps'
import { urlFor } from '@utils/urlFor'
import ReactPlayer from 'react-player'
import { BsPlayCircleFill } from 'react-icons/bs'

interface VideosProps extends PageBlockProps {
  items: VideoItemProps[]
}

export const Videos = ({ items }: VideosProps) => {
  return (
    <div className="videos">
      <Container>
        <div className="inner">
          {items.map((item) => (
            <div className="video" key={item._id}>
              <Heading level="3">{item.title}</Heading>
              <ReactPlayer
                url={item.video}
                controls
                playIcon={<BsPlayCircleFill size={80} color="#dea211" />}
                light={urlFor(item.image).width(600).url()}
              />
            </div>
          ))}
        </div>
      </Container>
    </div>
  )
}
