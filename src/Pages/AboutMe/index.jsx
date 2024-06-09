import React from 'react';
import profileImage from '../../Components/assets/img/Mejor.jpeg';
import { ArrowText, ProjectCard } from '../../Components/PojectCards/index';
import Fallout from '../../Components/assets/img/fallout.jpg'
import Mono from '../../Components/assets/img/bacavv.jpeg'
import Internet from '../../Components/assets/img/Welcome to Internet.jpg'
import Palabra from '../../Components/assets/img/palala.jpg'
import LinkedinImage from '../../Components/assets/img/R.png';
import BackgroundImage from '../../Components/assets/img/Animation.gif';
import { IoLogoJavascript } from "react-icons/io";
import { FaPython } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { DiMysql } from "react-icons/di";
import { SiPostgresql } from "react-icons/si";
import { FaLinux } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io";
import { FaNodeJs } from "react-icons/fa";
import { SiFastapi } from "react-icons/si";

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
    <div className="inline-block rounded-lg bg-gradient-to-r from-blue-200 to-blue-400 px-3 py-1 text-sm text-gray-500 font-libre-baskerville text-[12px]">
      {children}
    </div>
  );
}

// Componente reutilizable para el encabezado
function CustomHeader({ children }) {
  return (
    <h1 className="text-[#45C1A5] font-league-spartan tracking-tighter sm:text-4xl md:text-5xl border border-black rounded-lg p-5 bg-white bg-opacity-50 shadow-lg">
      {children}
    </h1>
  );
}

// Componente reutilizable para el párrafo
function CustomParagraph({ children }) {
  return (
    <p className="max-w-[600px] text-black md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed text-justify font-libre-baskerville border border-black rounded-lg p-5 bg-white bg-opacity-50 shadow-lg">
      {children}
    </p>
  );
}

function AboutMe() {
  return (
    <section className='mt-5 text-black' style={{
      position: 'relative',
      backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0.8)), url(${BackgroundImage})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat'
    }}>
    <div className="container grid items-center justify-center gap-7 px-4 md:px-6 lg:grid-cols-2 lg:gap-20">
      <div className="space-y-4">
      <div>
        <GradientText>
          Juan Pablo Baquero
        </GradientText>
        </div>
        <CustomHeader>
          FullStack Dev and Growth Innovator
        </CustomHeader>
        <CustomParagraph>
          Soy la sensación del bloque (de código) como FullStack Dev, apasionado por Python, JavaScript y el Hacking (ético). Mi objetivo no se limita a ser el best programator 'in the hello world', sino impulsar iniciativas tecnológicas innovadoras. Valoro una perspectiva generalista del desarrollo y el liderazgo de proyectos tecnológicos.
        </CustomParagraph>
        <div className="flex space-x-4">
      <FaPython Icon={FaPython} label="Python" />
      <IoLogoJavascript Icon={IoLogoJavascript} label="JavaScript" />
      <FaReact Icon={FaReact} label="React" />
      <RiTailwindCssFill Icon={RiTailwindCssFill} label="TailwindCSS" />
      <DiMysql Icon={DiMysql} label="MySQL" />
      <SiPostgresql Icon={SiPostgresql} label="PostgreSQL" />
      <FaLinux Icon={FaLinux} label="Linux" />
      <IoLogoGithub Icon={IoLogoGithub} label="GitHub" />
      <FaNodeJs Icon={FaNodeJs} label="Node.js" />
      <SiFastapi Icon={SiFastapi} label="FastAPI" />

    </div>
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

export { CustomHeader, CustomParagraph, GradientText };
export default AboutMe;