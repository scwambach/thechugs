'use client'
import { useState } from 'react'

export const OverlayTool = ({ image }: { image: any }) => {
  const [x, setX] = useState(50)
  const [y, setY] = useState(50)
  const [opacity, setOpacity] = useState(75)
  return (
    <div
      className="overlay-tool"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        zIndex: 1000,
      }}
    >
      <div
        className="controls"
        style={{
          position: 'fixed',
          zIndex: 1001,
        }}
      >
        <div className="slider">
          <input
            type="range"
            min="0"
            max="100"
            onChange={(e: any) => setX(e.target.value)}
          />
        </div>
        <div className="slider">
          <input
            type="range"
            min="0"
            max="100"
            onChange={(e: any) => setY(e.target.value)}
          />
        </div>
        <div className="slider">
          <input
            type="range"
            min="0"
            max="100"
            onChange={(e: any) => setOpacity(e.target.value)}
          />
        </div>
      </div>

      <img
        {...image}
        className="overlay-image"
        alt=""
        style={{
          left: `${x}%`,
          top: `${y}%`,
          pointerEvents: 'none',
          transform: 'translate(-50%, -50%)',
          position: 'fixed',
          height: 'auto',
          opacity: opacity / 100,
          width: image.width / 2,
        }}
      />
    </div>
  )
}
