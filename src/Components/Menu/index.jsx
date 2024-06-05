import React, { useState } from 'react';
import { HiMenuAlt4 } from "react-icons/hi";
import { CgClose } from "react-icons/cg";
import styles from './Menu.module.css';

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Función para generar un retraso basado en el índice del elemento
  const delay = (index) => `${index * 100}ms`;

  return (
    <div className="fixed top-4 right-4 z-50">
      <div
        className={`${
          isOpen ? 'scale-100 opacity-100' : 'scale-0 opacity-0'
        } ${styles.menuContent} bg-indigo-100 border border-gray-300 p-4 shadow-md rounded-lg transition-all duration-300`}
      >
        {/* Los enlaces ahora tienen animaciones individuales */}
        <a href="#about" className={`${styles.menuItem} text-[#4738CA] text-4xl font-normal tracking-tighter sm:text-5xl md:text-6xl`} style={{ transitionDelay: delay(0) }}>
          Sobre mí
        </a>
        <a href="#personality" className={`${styles.menuItem} text-[#4738CA] text-4xl font-normal tracking-tighter sm:text-5xl md:text-6xl`} style={{ transitionDelay: delay(1) }}>
          Personalidad Profesional
        </a>
        <a href="#resume" className={`${styles.menuItem} text-[#4738CA] text-4xl font-normal tracking-tighter sm:text-5xl md:text-6xl`} style={{ transitionDelay: delay(2) }}>
          Biografía
        </a>
        <a href="#projects" className={`${styles.menuItem} text-[#4738CA] text-4xl font-normal tracking-tighter sm:text-5xl md:text-6xl`} style={{ transitionDelay: delay(3) }}>
          Proyectos
        </a>
        <a href="#observatorio" className={`${styles.menuItem} text-[#4738CA] text-4xl font-normal tracking-tighter sm:text-5xl md:text-6xl`} style={{ transitionDelay: delay(4) }}>
          Observatorio
        </a>
        <a href="#contacto" className={`${styles.menuItem} text-[#4738CA] text-4xl font-normal tracking-tighter sm:text-5xl md:text-6xl`} style={{ transitionDelay: delay(5) }}>
          Contacto
        </a>
      </div>
      {isOpen ? (
        <CgClose
          onClick={toggleMenu}
          className={`text-[#312E81] hover:text-indigo-200 focus:outline-none text-4xl cursor-pointer ${styles.menuIcon}`}
          aria-label="Cerrar menú"
        />
      ) : (
        <HiMenuAlt4
          onClick={toggleMenu}
          className={`text-[#312E81] hover:text-indigo-200 focus:outline-none text-4xl cursor-pointer ${styles.menuIcon}`}
          aria-label="Abrir menú"
        />
      )}
    </div>
  );
};

export default Menu;