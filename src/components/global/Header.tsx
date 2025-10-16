'use client'

import { useContext } from 'react'
import { AppContext } from './PageTemplate'
import { LinkObject } from '@components/modules/LinkObject'
import { IoCartSharp } from 'react-icons/io5'

export const Header = () => {
  const { nav, darkMode } = useContext(AppContext)
  return (
    <header className={darkMode ? 'dark' : undefined}>
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

      <a className="snipcart-checkout" href="#">
        <IoCartSharp fontWeight={700} />
      </a>
    </header>
  )
}
