'use client'

import { useContext, useState, useEffect, useRef } from 'react'
import { AppContext } from './PageTemplate'
import { LinkObject } from '@components/modules/LinkObject'
import { IoCartSharp } from 'react-icons/io5'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'
import { FaBeer } from 'react-icons/fa'
import { BeerFundItem, beerFundItemUrl } from '@utils/beerFund'
import { toUsCurrency } from '@utils/toUsCurrency'

export const Header = () => {
  const { nav, darkMode, beerFund } = useContext(AppContext)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isBeerFundOpen, setIsBeerFundOpen] = useState(false)
  const beerFundRef = useRef<HTMLDivElement>(null)

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

  useEffect(() => {
    if (!isBeerFundOpen) return

    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsBeerFundOpen(false)
      }
    }

    // mousedown (not click) so the popover is gone before Snipcart or a link
    // elsewhere on the page reacts to the same interaction
    const handleClickOutside = (e: MouseEvent) => {
      if (!beerFundRef.current?.contains(e.target as Node)) {
        setIsBeerFundOpen(false)
      }
    }

    document.addEventListener('keydown', handleEscape)
    document.addEventListener('mousedown', handleClickOutside)

    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isBeerFundOpen])

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
  }

  const toggleBeerFund = () => {
    setIsBeerFundOpen(!isBeerFundOpen)
  }

  const renderBeerFundOption = (item: BeerFundItem) => (
    <button
      key={item.id}
      type="button"
      className="snipcart-add-item beer-fund__option"
      onClick={() => setIsBeerFundOpen(false)}
      data-item-id={item.id}
      data-item-price={item.price}
      data-item-url={beerFundItemUrl(item.id)}
      data-item-name={item.name}
      data-item-description={item.description}
      {...(item.image && { 'data-item-image': item.image })}
      data-item-shippable="false"
      data-item-taxable="false"
      data-item-custom1-type="hidden"
      data-item-custom1-name="PrintfulProduct"
      data-item-custom1-value="false"
    >
      <span className="beer-fund__option-name">{item.name}</span>
      <span className="beer-fund__option-price">
        {toUsCurrency(item.price)}
      </span>
    </button>
  )

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

      {beerFund.enabled && (
        <div className="beer-fund" ref={beerFundRef}>
          <button
            type="button"
            className="beer-fund__trigger"
            onClick={toggleBeerFund}
            aria-label={beerFund.heading}
            aria-expanded={isBeerFundOpen}
            aria-haspopup="true"
          >
            <FaBeer />
            <span className="beer-fund__trigger-label">Beer</span>
          </button>

          {isBeerFundOpen && (
            <div className="beer-fund__popover">
              <p className="beer-fund__heading">{beerFund.heading}</p>
              <div className="beer-fund__options">
                {beerFund.items.map((item) => renderBeerFundOption(item))}
              </div>
            </div>
          )}
        </div>
      )}

      <a className="snipcart-checkout" href="#">
        <IoCartSharp fontWeight={700} />
      </a>
    </header>
  )
}
