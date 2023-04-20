import { Container } from '@components/modules/Container'
import { breakpoints } from '@utils/settings'
import { VideoProps } from '@utils/types'
import { useEffect, useState } from 'react'
import ReactPlayer from 'react-player'

const Videos = ({ videos }: { videos: VideoProps[] }) => {
  const [hasWindow, setHasWindow] = useState<boolean>(false)
  useEffect(() => {
    if (typeof window !== 'undefined') {
      setHasWindow(true)
    }
  }, [hasWindow])
  return (
    <section id="videos" className="videos">
      <Container maxWidth={breakpoints.xxl}>
        {videos.map((vid) => (
          <div className="video-box" key={vid._id}>
            {hasWindow && (
              <ReactPlayer
                playing
                width="100%"
                url={vid.video}
                light={vid.image.url}
              />
            )}
          </div>
        ))}
      </Container>
    </section>
  )
}

export { Videos }
