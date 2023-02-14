import React from 'react'
import casa from '../images/casa.png'

export function Header_alt() {
  return (
    <header id='header_alt'>
       <div id='btn_cont'>
            <button>
                <img src={casa} alt="casa" />
            </button>
            <button>
                <img src="" alt="" />
            </button>
            <button>
                <img src="" alt="" />
            </button>
       </div>
    </header>
  )
}
