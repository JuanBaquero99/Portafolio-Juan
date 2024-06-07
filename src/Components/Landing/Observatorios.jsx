import React from 'react';
import ObservatorioImage from '../assets/images/80.jpg';
import FondoObser from '../assets/images/Cool wallpaper.jpg';

function Observatorios() {
  return (
    <section id="observatorio" className="relative w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
      <div className="absolute inset-0 z-0">
        <img
          src={FondoObser}
          alt="Fondo de la sección de Observatorios"
          className="absolute inset-0 w-full h-full object-cover opacity-50"
        />
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>
      
      <div className="container relative max-w-5xl px-4 md:px-6 z-10">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
          <div>
            <img
              src={ObservatorioImage}
              width="550"
              height="310"
              alt="Proyecto de investigación"
              className="w-full h-[300px] sm:h-[400px] object-cover rounded-lg"
            />
          </div>
          <div className="space-y-6">
            <div>
              <div className="inline-block rounded-lg bg-gradient-to-r from-indigo-500 to-purple-500 px-3 py-1 text-sm text-white">
                Proyecto de investigación
              </div>
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-indigo-900">
                <strong>Observatorios Urbanos de IA para Ecosistemas de Comunidades (OUEC)</strong>
              </h1>
            </div>
            <div className="text-gray-500 space-y-4 text-justify">
              <p>
                Los <strong>Observatorios Urbanos de IA para Ecosistemas de Comunidades (OUEC)</strong> son plataformas de investigación y desarrollo que utilizan tecnologías de Inteligencia Artificial (IA) para analizar, monitorear y mejorar los ecosistemas de las comunidades urbanas. A través del uso de IA, los OUEC pueden recopilar y analizar grandes cantidades de datos para ayudar a los gobiernos locales y las comunidades a tomar decisiones. Estos observatorios pueden proporcionar información crítica sobre una variedad de temas, desde el cuidado, talento local hasta el medio ambiente y la salud pública.
              </p>
              <p>
                Inspirados en las <a href="https://manzanasdelcuidado.gov.co/" target="_blank" rel="noopener noreferrer" className="text-indigo-700 hover:underline">Manzanas de Cuidado</a> y en los <a href="https://sfstandard.com/2023/01/13/what-is-cerebral-valley-san-franciscos-nerdiest-new-neighborhood/" target="_blank" rel="noopener noreferrer" className="text-indigo-700 hover:underline">Cerebral Valleys</a>.
              </p>
            </div>
            <div className="flex justify-end">
              <a href="https://www.notion.so/Observatorios-Urbanos-de-IA-para-Ecosistemas-de-Comunidades-OUEC-865a0b3761964c8eb88f56f494e3be96" target="_blank" rel="noopener noreferrer" className="inline-flex h-8 items-center justify-center rounded-md bg-white text-indigo-700 hover:bg-indigo-700 hover:text-white px-4 py-2 text-sm font-medium shadow transition-colors focus:outline-none focus:ring-1 focus:ring-indigo-700">
                Más información
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Observatorios;