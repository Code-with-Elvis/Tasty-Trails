import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const ScrollToTop = () => {
  const { pathname } = useLocation()

  useEffect(() => {
    const htmlElement = document.documentElement
    htmlElement.style.scrollBehavior = 'auto'
    window.scrollTo(0, 0)
  }, [pathname])

  return null
}

export default ScrollToTop
