import React, { useEffect, useState } from 'react';
import '../stylesheels/Hero.css';
import Image from '../Images/cover.png';

export const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section id='hero' className={isVisible ? 'fade-in' : ''}>
        <h1 className='primary-heading'>THE FUTURE OF MUSIC <br/>LICENSING</h1>
        <img src={Image} alt="Tu dispositivo no puede cargar esta imagen" />
    </section>
  );
};