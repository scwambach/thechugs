import { useEffect, useState } from 'react'

export const useHasWindow = () => {
  const [hasWindow, setHasWindow] = useState(false)
  useEffect(() => {
    setHasWindow(true)
  }, [])
  return hasWindow
}
