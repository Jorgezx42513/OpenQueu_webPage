import React from 'react'
import '../styles/headerStyle.css'
import '../styles/section.css'

export function Header() {
  return (
    <header>
      <h1>OpwnQueu</h1>
       <ul>
        <li>
          <a href='#intro_sect'>
              Home
          </a>
        </li>
        <li>
          <a href='#download_sect'>
              Download
          </a>
        </li>
        <li>
          <a href='#dts_sect'>
              Servises
          </a>
        </li>
        <li>
          <a href='#contact_sect'>
              Contact
          </a>
        </li>
       </ul>
    </header>
  )
}
