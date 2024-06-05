import React, { useState, useEffect } from 'react';
import logoImage from '../assets/images/sinfondo.png';

const Logo = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <img
      src={logoImage}
      alt="Logo"
      className={`transition-all duration-300 ${scrolled ? 'h-10' : 'h-16'} ${scrolled ? 'top-4 left-4' : 'top-12 left-12'} fixed z-50`}
    />
  );
};

export default Logo;