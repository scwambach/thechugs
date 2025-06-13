'use client'
import { VideoItemProps } from '@utils/types/modules/VideoItemProps'
import ReactPlayer from 'react-player'
import { Heading } from './Heading'
import { BsPlayCircleFill } from 'react-icons/bs'
import { useEffect, useState } from 'react'

export const VideoItem = ({ title, video, image }: VideoItemProps) => {
  const [hasWindow, setHasWindow] = useState(false)
  const [isPlaying, setIsPlaying] = useState(false)

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setHasWindow(true)
    }
  }, [])

  return (
    <div className="videoItem">
      <Heading level="3">{title}</Heading>
      <div
        style={{
          overflow: 'hidden',
          height: 0,
          paddingBottom: `56.5%`,
        }}
      >
        {hasWindow && (
          <ReactPlayer
            url={video}
            controls
            playing={isPlaying}
            playIcon={<BsPlayCircleFill size={80} color="#dea211" />}
            light={typeof image.src === 'string' ? image.src : undefined}
            onClickPreview={() => {
              setIsPlaying(true)
            }}
          />
        )}
      </div>
    </div>
  )
}
