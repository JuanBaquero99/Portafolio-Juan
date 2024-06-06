import React from 'react';

function Footer() {
  return (
    <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
      <p className="text-xs text-gray-500 dark:text-gray-400">
        &copy; 2024 Juan Pablo Baquero Davila. Todos los derechos reservados.
      </p>
    </footer>
  );
}

export default Footer;