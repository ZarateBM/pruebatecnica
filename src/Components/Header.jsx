import React from 'react'
import '../stylesheels/Header.css'
import Image from '../Images/cover.png'


export const Header = () => {
  return (
    <header>
        <div className='Header-Title'>
            <h1 className='primary-heading'>THE FUTURE OF MUSIC LICENSING</h1>
        </div>
        <div>
            <img src={Image} alt="Tu dispositivo no puede cargar esta imagen" />
        </div>
    </header>
  )
}
