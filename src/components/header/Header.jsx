import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/me.jpg'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hi, I am</h5>
        <h1>Kim Ki-Dong</h1>
        <h5 className="text-light">Fullstack Developer </h5>
        <CTA />
        <HeaderSocials />

        <div className="me">
          <img src={ME} ALT="me"/>
        </div>

        <a href="#contact" className='scroll__down'>Scroll Down</a>

      </div> 
    </header>
  )
}

export default Header