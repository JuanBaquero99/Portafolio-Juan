import React from 'react';
import profileImage from '../../Components/assets/img/Mejor.jpeg';
import { ArrowText, ProjectCard } from '../../Components/PojectCards/index';
import Fallout from '../../Components/assets/img/descarga.jpg'
import Mono from '../../Components/assets/img/bacavv.jpeg'
import Internet from '../../Components/assets/img/Welcome to Internet.jpg'
import Palabra from '../../Components/assets/img/palala.jpg'
import LinkedinImage from '../../Components/assets/img/R.png';

function LinkedinLogo({ url }) {
  return (
    <a href={url} target="_blank" rel="noopener noreferrer">
      <img src={LinkedinImage} alt="Linkedin logo" className="w-8 h-auto" /> 
    </a>
  );
}

function ProfilePictureWithLogo({ src, alt, url }) {
  return (
    <div className="flex flex-col items-center">
      <img
        src={src}
        alt={alt}
        className="rounded-full w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-56 lg:h-56 xl:w-64 xl:h-64 object-cover border-4 border-olive shadow-md"
      />
      <LinkedinLogo url={url} />
    </div>
  );
}

// Componente reutilizable para el texto con degradado
function GradientText({ children }) {
  return (
    <div className="inline-block rounded-lg bg-gradient-to-r from-olive to-pastel-blue px-3 py-1 text-sm text-gray-800 text-white font-chivo font-arima text-[12px]">
      {children}
    </div>
  );
}

// Componente reutilizable para el encabezado
function CustomHeader({ children }) {
  return (
    <h1 className="text-3xl font-playfair tracking-tighter sm:text-4xl md:text-5xl text-olive font-chivo">
      {children}
    </h1>
  );
}

// Componente reutilizable para el párrafo
function CustomParagraph({ children }) {
  return (
    <p className="max-w-[600px] text-black md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed text-justify font-overpass">
      {children}
    </p>
  );
}



function AboutMe() {
  return (
    <section className='mt-20 text-black' style={{background: 'linear-gradient(to right, #FFFFFF, #E0E0E0)'}}>
      <div className="container grid items-center justify-center gap-7 px-4 md:px-6 lg:grid-cols-2 lg:gap-20">
        <div className="space-y-4">
          <GradientText>
            Juan Pablo Baquero
          </GradientText>
          <CustomHeader>
            FullStack Dev and Growth Innovator
          </CustomHeader>
          <CustomParagraph>
            Soy la sensación del bloque (de código) como FullStack Dev, con un amor apasionado por Python, JavaScript y el Hacking (ético). Mi objetivo no se limita a ser el best programator 'in the hello world', sino impulsar iniciativas tecnológicas innovadoras. Valoro una perspectiva generalista del desarrollo y el liderazgo de proyectos tecnológicos.
          </CustomParagraph>
        </div>
        <ProfilePictureWithLogo
          src={profileImage}
          alt="Juan Pablo Baquero"
          url='www.linkedin.com/in/juan-pablo-baquero-dávila'
        />
        <CustomHeader>
          Proyectos recientes
        </CustomHeader>
        <ArrowText url="https://github.com/JuanBaquero99">Click aquí al repositorio completo de Github</ArrowText>
        <ProjectCard
          image={Fallout}
          title="PipBoy Fallout"
          description="Aplicación de To-Do List con temática de PipBoy inspirada en el videojuego Fallout. Desarrollada con React y TailwindCSS."
          url="https://juanbaquero99.github.io/App-Lista-Actividades/"
          technologies={["React", "TailwindCSS", "VSCode", "JavaScript", "CCS"]}
        />
        <ProjectCard
          image={Mono}
          title="Bacav"
          description="Ecommerce en desarrollo para marca de ropa interior masculina, desarrollado con React y TailwindCSS."
          technologies={["React", "TailwindCSS", "VSCode", "JavaScript", "CCS"]}
        />
        <ProjectCard
          image={Internet}
          title="Analizador URL"
          description="Un paquete para Node.js que analiza URLs y extrae información de ellas, como el protocolo, el dominio, la ruta y los parámetros."
          technologies={[ "VsCode", "JavaScript", "Npm", "VSCode"]}
        />
        <ProjectCard
          image={Palabra}
          title="Mensaje Random"
          description="El paquete 'random-str-msg-unbaq', diseñado para generar mensajes de cadena aleatorios de manera eficiente. Este paquete, desarrollado como un aporte a la comunidad, ha sido publicado en el registro de paquetes de Node.js (NPM)."
          url="https://github.com/JuanBaquero99"
          technologies={["VSCode", "JavaScript", "Npm"]}
        />
      </div>
    </section>
  );
}

export default AboutMe;