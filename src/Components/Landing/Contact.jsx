import React from 'react';
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import SmallImage from '../assets/images/@sanassatan.jpg';
import Fondo3 from '../assets/images/fondo1.jpg';

function Contacto() {
  return (
    <section
      id="contacto"
      className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-indigo-100 to-purple-100 dark:bg-gray-800"
      style={{
        position: 'relative',
        backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.7), rgba(255, 255, 255, 0.7)), url(${Fondo3})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed',
      }}
    >
      <div className="container grid max-w-5xl items-center justify-center gap-4 px-4 md:px-6 lg:grid-cols-2 lg:gap-10 relative">
        <div className="space-y-4 flex flex-col items-center">
          <div className="inline-block rounded-lg bg-gradient-to-r from-indigo-500 to-purple-300 bg-indigo-500 px-3 py-1 text-sm text-black">Contacto</div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-indigo-900 text-[#4831D4]">
            Conéctate conmigo
          </h2>
          <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
            Si deseas contactarme, puedes encontrarme en mis perfiles en LinkedIn y GitHub.
          </p>
          <img
            src={SmallImage}
            alt="Imagen pequeña"
            className="w-64 h-32 rounded-full mx-auto"
          />
        </div>
        <Card className="bg-white dark:bg-gray-950 p-6 rounded-lg shadow-lg">
          <div className="grid gap-4">
            <Button
              href="https://www.linkedin.com/in/tu-perfil-linkedin"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-blue-800 hover:bg-blue-900 text-white flex items-center justify-center gap-2"
              startIcon={<FaLinkedin />}
            >
              <span>LinkedIn</span>
            </Button>
            <Button
              href="https://github.com/tu-usuario-github"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-gray-800 hover:bg-gray-900 text-white flex items-center justify-center gap-2"
              startIcon={<FaGithub />}
            >
              <span>GitHub</span>
            </Button>
          </div>
        </Card>
      </div>
    </section>
  );
}

export default Contacto;