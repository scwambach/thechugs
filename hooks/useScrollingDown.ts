import { useEffect, useState } from 'react'

export const useScrollingDown = () => {
  const [scrollingDown, setScrollingDown] = useState(false)

  useEffect(() => {
    window.onscroll = () => {
      if (window.oldScroll < window.scrollY && window.scrollY > 100) {
        setScrollingDown(true)
      } else if (window.scrollY < 100) {
        setScrollingDown(false)
      }

      window.oldScroll = window.scrollY
    }
  }, [])

  return scrollingDown
}
