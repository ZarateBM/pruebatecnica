import React from 'react'
import '../stylesheels/Footer.css'

export const Footer = ({ items }) => {
  return (
    <footer className='footer'>
        <ul className='marquee-content'>
          {items.map((item, index) => (
            <li className='marquee-item' key={index}>{item}</li>
          ))}

          {items.map((item, index) => (
            <li className='marquee-item' key={index}>{item}</li>
          ))}
          {items.map((item, index) => (
            <li className='marquee-item' key={index}>{item}</li>
          ))}

          {items.map((item, index) => (
            <li className='marquee-item' key={index}>{item}</li>
          ))}
        </ul>
    </footer>
  )
}
