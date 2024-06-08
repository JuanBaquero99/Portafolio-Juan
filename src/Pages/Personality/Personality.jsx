import React from 'react'; //Importar React
import Fondo2 from '../../assets/images/fondo1.jpg'; //Importar imagen de fondo
import './styles.css'; //Importar estilos de la sección

//Se hace un componente reutilizable para la sección de Personalidad

const Section = ({ title, children }) => (
  <div>
    <h2 className='section-title'>
      {title}
    </h2>
    <p className='section-text'>
      {children}
      </p>
  </div>
); //Se crea un componente para el título y el texto

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
  {/* Sección Growth Innovator */}
  <Section title='Growth Innovator o algo así...'>
    Para encontrar una palabra que me describiera, tuve que inventarla 
    (aunque, para ser sincero, me pareció verla en otros lados de internet). 
    Durante mucho tiempo, batallé para encontrar algo que definiera mi 
    personalidad profesional como antropólogo tech, debido a mi vocación 
    por el mundo tecnológico. Ingenuamente creía que no había relación 
    entre la tecnología y la antropología, pero, ¿acaso olvidé el pulgar oponible?
  </Section>

  {/* Sección Innovación, Innovación e Innovación */}
  <Section title="Innovación, Innovación e Innovación">
    La tecnología es la punta de lanza de la expansión humana, la innovación 
    ha sido una necesidad para resolver problemas concretos. La IA, las startups, 
    etc., son formas contemporáneas de estar a la vanguardia en la resolución de 
    problemas, comprendiendo las necesidades contextuales. Por eso me considero 
    un ‘Growth Innovator’, alguien que entiende las tecnologías en relación con 
    la resolución de problemas concretos y con el crecimiento socio-economico. 
    Así de simple, en algo a lo que he querido darle la vuelta a su definición, 
    y es la People Experience (PX), sí, la experiencia humana (y no solo entendida como usuario)
  </Section>

  {/* Sección FullStack Dev */}
  <Section title="FullStack Dev">
    En 2021, comencé en el programa “Misión TIC” del Gobierno Nacional de Colombia, 
    donde descubrí mi pasión por Python. Esto me llevó a profundizar en tecnologías 
    como complejidad algorítmica, Machine Learning, pensamiento probabilístico y estadística. 
    También avancé en tecnologías de JavaScript, adquiriendo una visión integral como FullStack, 
    manejando librerías y frameworks como React, TailwindCSS, Next, FastAPI, MySQL, Node.js, 
    API Rest y terminales de Linux. Mantengo una presencia activa en GitHub con proyectos 
    como un TodoList inspirado en Fallout, un NPM para analizar URLs, diversos portafolios, 
    eCommerce y más. Además, estoy trabajando en un proyecto personal de Observatorio de IA 
    para comunidades como exocerebro social.
  </Section>

  {/* Sección Algo de experiencia en... */}
  <Section title="Experiencia en...">
    3 años en la Unidad Administrativa Especial de Catastro Distrital (UAECD), donde 
    comprendí la necesidad de la innovación tecnológica para resolver problemas concretos. 
    Presentar información y soluciones a comunidades rurales y urbanas dependía de tecnologías 
    eficientes, manejando grandes volumenes de datos y análisis de cambios geográficos. 
    Actualmente, me interesa formar parte de startups e iniciativas innovadoras.
  </Section>
        </div>
        </div>
      </div>
    </section>
  );
}

export default Personality;