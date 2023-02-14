import React from 'react'
import windows_img from '../images/windows.png'
import os_img from '../images/os.png'
import linux_img from '../images/linux.png'

export function Intro() {
  return (
    <section id='intro_sect'>
        <h1>Wha is OpenQueu?</h1>
        <p>Openqueu is an app to server developers, 
          include open port servises of mysql server and the possibility to use dis in different sistemswith github, 
          apache open port servises and filezilla servises.</p>
          <div id='compativility_sect'>
              <div className='item_comp'>
                  <img src={windows_img} alt='windows'/>
              </div>
              <div className='item_comp'>
                  <img src={linux_img} alt="linux" />
              </div>
              <div className='item_comp'>
                  <img src={os_img} alt="os" />
              </div>
          </div>
    </section>
  )
}
