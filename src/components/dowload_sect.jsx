import React from 'react'
import '../styles/section.css'
import logo from '../images/app.png'

export  function Download() {
  return (
    <section id='download_sect'>
        <h1>Download Now !</h1>
        <img src={logo} alt='app'/>
        <a href="https://github.com/Jorgezx42513/OpenQueu.git">
          <button id='btn_download'>Download</button>
        </a>
    </section>
  )
}
