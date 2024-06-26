import React, { useState } from 'react';
import BackgroundImage from '../../Components/assets/img/Animation.gif';

const HeaderPersonality = ({ children }) => (
  <h1 className="text-[#45C1A5] font-league-spartan tracking-tighter sm:text-4xl md:text-5xl border border-black rounded-lg p-5 bg-white bg-opacity-50 shadow-lg">
    {children}
  </h1>
);
  
const ParagraphPersonality = ({ children }) => (
  <div className="max-w-[600px] text-black md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed text-justify font-libre-baskerville border border-black rounded-lg p-5 bg-white bg-opacity-50 shadow-lg animate-fadeIn">
    {children}
  </div>
);

function Personality() {
  const [showText, setShowText] = useState([false, false, false, false]);
  const handleClick = (index) => {
    const newShowText = [...showText];
    newShowText[index] = !newShowText[index];
    setShowText(newShowText);
  };
  return (
    <section className='mt-5 text-black' style={{
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      minHeight: '100vh',
      backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0.8)), url(${BackgroundImage})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat'
    }}>
      <section className="px-4 md:grid md:grid-cols-2 gap-4">
        <div className="mt-16 bg-transparent rounded-lg shadow-lg p-4 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110" onClick={() => handleClick(0)}>
          <HeaderPersonality className="text-2xl text-center text-gray-800 font-semibold">
            Growth Innovator o algo así...
          </HeaderPersonality>
          {showText[0] && (
            <ParagraphPersonality className="text-base text-justify text-gray-700 mt-4">
              Para encontrar una palabra que me describiera, tuve que inventarla
              (aunque, para ser sincero, me pareció verla en otros lados de internet).
              Durante mucho tiempo, batallé para encontrar algo que definiera mi
              personalidad profesional como antropólogo tech, debido a mi vocación
              por el mundo tecnológico. Ingenuamente creía que no había relación
              entre la tecnología y la antropología, pero, ¿acaso olvidé el pulgar oponible?
            </ParagraphPersonality>
          )}
        </div>
        <div className="mt-16 bg-transparent rounded-lg shadow-lg p-4 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110" onClick={() => handleClick(1)}>
          <HeaderPersonality className="text-2xl text-center text-gray-800 font-semibold font-tiny5">
            Innovación, Innovación e Innovación
          </HeaderPersonality>
          {showText[1] && (
            <ParagraphPersonality className="text-base text-justify text-gray-700 mt-4">
              La tecnología es la punta de lanza de la expansión humana, la innovación
              ha sido una necesidad para resolver problemas concretos. La IA, las startups,
              etc., son formas contemporáneas de estar a la vanguardia en la resolución de
              problemas, comprendiendo las necesidades contextuales. Por eso me considero un ‘Growth Innovator’, alguien que entiende las tecnologías en relación con
              la resolución de problemas concretos y con el crecimiento socio-economico.
              Así de simple, en algo a lo que he querido darle la vuelta a su definición,
              y es la People Experience (PX), sí, la experiencia humana (y no solo entendida como usuario)
            </ParagraphPersonality>
          )}
        </div>
        <div className="mt-16 bg-transparent rounded-lg shadow-lg p-4 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110" onClick={() => handleClick(2)}>
          <HeaderPersonality className="text-2xl text-center text-gray-800 font-semibold">
            FullStack Dev...
          </HeaderPersonality>
          {showText[2] && (
            <ParagraphPersonality className="text-base text-justify text-gray-700 mt-4">
              En 2021, comencé en el programa “Misión TIC” del Gobierno Nacional de Colombia,
              donde descubrí mi pasión por Python. Esto me llevó a profundizar en tecnologías
              como complejidad algorítmica, Machine Learning, pensamiento probabilístico y estadística.
              También avancé en tecnologías de JavaScript, adquiriendo una visión integral como FullStack,
              manejando librerías y frameworks como React, TailwindCSS, Next, FastAPI, MySQL, Node.js,
              API Rest y terminales de Linux. Mantengo una presencia activa en GitHub con proyectos
              como un TodoList inspirado en Fallout, un NPM para analizar URLs, diversos portafolios,
              eCommerce y más. Además, estoy trabajando en un proyecto personal de Observatorio de IA
              para comunidades como exocerebro social.
            </ParagraphPersonality>
          )}
        </div>
        <div className="mt-16 bg-transparent rounded-lg shadow-lg p-4 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110" onClick={() => handleClick(3)}>
          <HeaderPersonality className="text-2xl text-center text-gray-800 font-semibold">
            Experiencia en...
          </HeaderPersonality>
          {showText[3] && (
            <ParagraphPersonality className="text-base text-justify text-gray-700 mt-4">
              3 años en la Unidad Administrativa Especial de Catastro Distrital (UAECD), donde
              comprendí la necesidad de la innovación tecnológica para resolver problemas concretos.
              Presentar información y soluciones a comunidades rurales y urbanas dependía de tecnologías
              eficientes, manejando grandes volumenes de datos y análisis de cambios geográficos.
              Actualmente, me interesa formar parte de startups e iniciativas innovadoras.
            </ParagraphPersonality>
          )}
        </div>
      </section>
    </section>
  );
}

export default Personality;