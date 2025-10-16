'use client'

import { useContext, useState, useEffect } from 'react'
import { AppContext } from './PageTemplate'
import { LinkObject } from '@components/modules/LinkObject'
import { IoCartSharp } from 'react-icons/io5'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'

export const Header = () => {
  const { nav, darkMode } = useContext(AppContext)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsMobileMenuOpen(false)
      }
    }

    if (isMobileMenuOpen) {
      document.addEventListener('keydown', handleEscape)

      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }

    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.body.style.overflow = 'unset'
    }
  }, [isMobileMenuOpen])

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
  }

  return (
    <header className={darkMode ? 'dark' : undefined}>
      <nav className="desktop-nav">
        <ul>
          {nav.map((item) => (
            <li key={item._key}>
              <LinkObject href={item.url}>{item.title}</LinkObject>
            </li>
          ))}
          <li>
            <LinkObject href="/garage-sale">Garage</LinkObject>
          </li>
        </ul>
      </nav>

      <button
        className="mobile-menu-toggle"
        onClick={toggleMobileMenu}
        aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
      >
        {isMobileMenuOpen ? (
          <AiOutlineClose size={24} />
        ) : (
          <AiOutlineMenu size={24} />
        )}
      </button>

      <div className={`mobile-menu ${isMobileMenuOpen ? 'open' : ''}`}>
        <nav className="mobile-nav">
          <ul>
            {nav.map((item) => (
              <li key={item._key}>
                <div onClick={closeMobileMenu}>
                  <LinkObject href={item.url}>{item.title}</LinkObject>
                </div>
              </li>
            ))}
            <li>
              <div onClick={closeMobileMenu}>
                <LinkObject href="/garage-sale">Garage</LinkObject>
              </div>
            </li>
          </ul>
        </nav>
      </div>

      <a className="snipcart-checkout" href="#">
        <IoCartSharp fontWeight={700} />
      </a>
    </header>
  )
}
