import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className='flex items-center justify-end fixed top-0 w-full p-5 bg-gray-200 shadow-md z-10 text-black'>
            <button onClick={() => setIsOpen(!isOpen)} className='text-lg font-semibold'>
            <GiHamburgerMenu />
            </button>
            {isOpen && (
                <ul className='flex flex-col items-start space-y-4 bg-[#16161A] shadow-md rounded-md absolute right-0 top-full mt-2 py-2 px-4 text-white'>
                    <li>
                        <NavLink to='/' activeClassName='text-blue-500' className='transition-colors duration-200 hover:text-red-500'>
                            Acerca de mi
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/Personality' activeClassName='text-blue-500' className='transition-colors duration-200 hover:text-red-500'>
                            Personalidad Profesional
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/Proyectos' activeClassName='text-blue-500' className='transition-colors duration-200 hover:text-red-500'>
                            Proyectos Laborales
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/Observatorio' activeClassName='text-blue-500' className='transition-colors duration-200 hover:text-red-500'>
                            Observatorio De Comunidades 
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/Contacto' activeClassName='text-blue-500' className='transition-colors duration-200 hover:text-red-500'>
                            Contacto
                        </NavLink>
                    </li>
                </ul>
            )}
        </nav>
    );
};

export default Navbar;