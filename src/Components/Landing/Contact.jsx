import React from 'react';
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

function Contacto() {
  return (
    <section id="contacto" className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-indigo-100 to-purple-100 dark:bg-gray-800">
      <div className="container grid max-w-5xl items-center justify-center gap-4 px-4 md:px-6 lg:grid-cols-2 lg:gap-10">
        <div className="space-y-4">
          <div className="inline-block rounded-lg bg-indigo-500 px-3 py-1 text-sm text-white">Contacto</div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-indigo-900 dark:text-white">
            Conéctate conmigo
          </h2>
          <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
            Si deseas contactarme, puedes encontrarme en mis perfiles en LinkedIn y GitHub. Estoy encantado de conectarme contigo.
          </p>
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