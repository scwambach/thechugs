'use client'
import { useEffect, useState } from 'react'
import { GoArrowUp } from 'react-icons/go'
import { Button } from './Button'

export const BackToTop = () => {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setShow(true)
      } else {
        setShow(false)
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <Button
      buttonStyle="white"
      className={`backToTop ${show ? 'show' : 'hide'}`}
      onClick={() => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth',
        })
      }}
    >
      <GoArrowUp size={32} />
    </Button>
  )
}
