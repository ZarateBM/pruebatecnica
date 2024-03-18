import React from 'react'
import '../stylesheels/NavBar.css'
import Logo from '../Images/logo.svg'
import { RiAccountCircleLine } from "react-icons/ri";

export const NavBar = () => {
  return (
    <nav>
        <div className='navbar-brand'>
        <a href='#page-top'>
          <img className='image-brand'src={Logo} alt='Logo de la empresa' />
        </a>
        </div>
        <div className='navbar-items'>   
                <a href="mailto:hello@catalog.ac">hello@catalog.ac</a>
                <a href="">
                <RiAccountCircleLine style={{ height: '2rem', width:'2rem' }}/>
                </a>
        </div>
    </nav>
  )
}
