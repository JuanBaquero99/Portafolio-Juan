import React from 'react';

const Footer = ({ bgColor }) => {
    return (
        <footer className={`fixed bottom-0 w-full text-center py-3 ${bgColor} shadow-md z-10 text-white font-tiny5`}>
            Todos los derechos reservados
        </footer>
    );
};

export default Footer;