'use client'

import { useContext } from 'react'
import { AppContext } from './PageTemplate'
import { LinkObject } from '@components/modules/LinkObject'

export const Header = () => {
  const { nav } = useContext(AppContext)
  return (
    <header>
      <ul>
        {nav.map((item) => (
          <li key={item._key}>
            <LinkObject href={item.url}>{item.title}</LinkObject>
          </li>
        ))}
      </ul>
    </header>
  )
}
