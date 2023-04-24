import { Container } from '@components/modules/Container'
import { useWindowWidth } from '@hooks/useWindowWidth'
import { breakpoints } from '@utils/settings'
import { VideoProps } from '@utils/types'
import moment from 'moment'
import { useEffect, useState } from 'react'
import ReactPlayer from 'react-player'

const Videos = ({ videos }: { videos: VideoProps[] }) => {
  const [hasWindow, setHasWindow] = useState<boolean>(false)
  useEffect(() => {
    if (typeof window !== 'undefined') {
      setHasWindow(true)
    }
  }, [hasWindow])
  const returnDate = (date: string) => {
    return moment(date).format('MMMM DD, YYYY')
  }

  const windowWidth = useWindowWidth()

  return (
    <section id="videos" className="videos">
      <Container maxWidth={breakpoints.xxl}>
        {videos.map((vid) => (
          <div key={vid._id} className="video-box">
            {hasWindow && (
              <ReactPlayer
                playing
                width="100%"
                height={
                  windowWidth < breakpoints.sm
                    ? '200px'
                    : windowWidth < breakpoints.smd
                    ? '300px'
                    : windowWidth < breakpoints.md
                    ? '400px'
                    : windowWidth > breakpoints.md
                    ? undefined
                    : undefined
                }
                url={vid.video}
                light={vid.image.url}
              />
            )}
            <h4>{vid.title}</h4>
            <p>{returnDate(vid.releaseDate)}</p>
          </div>
        ))}
      </Container>
    </section>
  )
}

export { Videos }
