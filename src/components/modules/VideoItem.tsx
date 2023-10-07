import { VideoItemProps } from '@utils/types/modules/VideoItemProps'
import ReactPlayer from 'react-player'
import { Heading } from './Heading'
import { BsPlayCircleFill } from 'react-icons/bs'
import { urlFor } from '@utils/urlFor'

export const VideoItem = ({ title, video, image }: VideoItemProps) => {
  return (
    <div className="videoItem">
      <Heading level="3">{title}</Heading>
      <ReactPlayer
        url={video}
        controls
        playIcon={<BsPlayCircleFill size={80} color="#dea211" />}
        light={urlFor(image).width(600).url()}
      />
    </div>
  )
}
