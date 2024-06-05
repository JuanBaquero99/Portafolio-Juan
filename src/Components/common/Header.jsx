import React, { useState } from 'react';
import { CiMenuBurger } from "react-icons/ci";

const DropdownMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="px-4 lg:px-6 h-14 flex items-center justify-between bg-gradient-to-r from-indigo-500 to-purple-500 text-white">
      <div className="flex items-center justify-center">
        <CiMenuBurger className="h-6 w-6 cursor-pointer lg:hidden" onClick={toggleMenu} />
        <span className="sr-only">Portafolio</span>
      </div>
      <nav className={`${isOpen ? "block" : "hidden"} lg:flex gap-4 sm:gap-6`}>
        <a href="#about" className="text-sm font-medium hover:underline underline-offset-4" onClick={toggleMenu}>Sobre mí</a>
        <a href="#personality" className="text-sm font-medium hover:underline underline-offset-4" onClick={toggleMenu}>Personalidad Profesional</a>
        <a href="#resume" className="text-sm font-medium hover:underline underline-offset-4" onClick={toggleMenu}>Bíografía</a>
        <a href="#projects" className="text-sm font-medium hover:underline underline-offset-4" onClick={toggleMenu}>Proyectos</a>
        <a href="#observatorio" className="text-sm font-medium hover:underline underline-offset-4" onClick={toggleMenu}>Observatorio</a>
        <a href="#contacto" className="text-sm font-medium hover:underline underline-offset-4" onClick={toggleMenu}>Contacto</a>

        
        {/* Agrega más enlaces para cada sección */}
      </nav>
    </header>
  );
};

export default DropdownMenu;