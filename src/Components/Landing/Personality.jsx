import React from 'react';
import Fondo2 from '../assets/images/fondo1.jpg'; // Asegúrate de que la ruta sea correcta

function Personality() {
  return (
    <section
      style={{
        position: 'relative',
        backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.7), rgba(255, 255, 255, 0.7)), url(${Fondo2})`, // Utiliza la imagen como fondo
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed',
      }}
    >
      <div id="personality" className="flex justify-center py-12 relative">
        <div className="max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div>
              <h2 className="text-4xl md:text-6xl font-extrabold text-[#4831D4] mb-6">
                Growth Innovator
              </h2>
              <p className="max-w-[600px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-700 text-justify"> {/* Cambio de color a negro */}
                Para encontrar una palabra que me describiera, tuve que inventarla (aunque, para ser sincero, me pareció verla en otros lados de internet). Durante mucho tiempo, batallé para encontrar algo que definiera mi personalidad profesional como antropólogo tech, debido a mi vocación por el mundo tecnológico. Ingenuamente creía que no había relación entre la tecnología y la antropología, pero, ¿acaso olvidé el pulgar oponible?

                Sin ello, no estaría programando en este momento. La tecnología es la punta de lanza de la expansión humana, la innovación ha sido una necesidad para resolver problemas concretos. La IA, las startups, etc., son formas contemporáneas de estar a la vanguardia en la resolución de problemas, comprendiendo las necesidades contextuales. Por eso me considero un ‘Growth Innovator’, alguien que entiende las tecnologías en relación con la resolución de problemas concretos y con el crecimiento socio-economico. Así de simple, en algo a lo que he querido darle la vuelta a su definición, y es la People Experience (PX), sí, la experiencia humana (y no solo entendida como usuario).
              </p>
            </div>
            <div className="flex flex-col items-center md:items-start"> {/* Ajuste aquí */}
              <h2 className="text-4xl md:text-6xl font-extrabold text-[#4831D4] mb-6">
                FullStack Dev
              </h2>
              <p className="max-w-[600px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-700 text-justify"> {/* Cambio de color a negro */}
                En 2021, comencé en el programa “Misión TIC” del Gobierno Nacional de Colombia, donde descubrí mi pasión por Python. Esto me llevó a profundizar en tecnologías como complejidad algorítmica, Machine Learning, pensamiento probabilístico y estadística. También avancé en tecnologías de JavaScript, adquiriendo una visión integral como FullStack, manejando librerías y frameworks como React, TailwindCSS, Next, FastAPI, MySQL, Node.js, API Rest y terminales de Linux. Mantengo una presencia activa en GitHub con proyectos como un TodoList inspirado en Fallout, un NPM para analizar URLs, diversos portafolios, eCommerce y más.

                Tuve una experiencia de 3 años en la Unidad Administrativa Especial de Catastro Distrital (UAECD), donde comprendí la necesidad de la innovación tecnológica para resolver problemas concretos. Presentar información y soluciones a comunidades rurales y urbanas dependía de tecnologías eficientes. Actualmente, me interesa formar parte de startups e iniciativas innovadoras. Además, estoy trabajando en un proyecto personal de Observatorio de IA para comunidades como exocerebro social.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mt-16">
            <div className="order-1 md:order-2">
              <div className="grid grid-cols-3 gap-4">
                <div className="text-gray-300 h-6 w-6" />
                <div className="text-gray-300 h-6 w-6" />
                <div className="text-gray-300 h-6 w-6" />
              </div>
              <div className="grid grid-cols-2 gap-4 mt-4">
                <div className="text-gray-300 h-6 w-6" />
                <div className="text-gray-300 h-6 w-6" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Personality;