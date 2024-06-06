import React from 'react';
import Perfil from '../assets/images/Mejor.jpeg';
import Fondo from '../assets/images/fondo1.jpg';
import GithubLogo from '../assets/images/github_PNG40.png';
import LinkedInLogo from '../assets/images/R.png';

function AboutMeSection() {
  return (
    <section
      id="about"
      className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-purple-900 to-purple-300 dark:bg-gray-200 text-gray-800"
      style={{
        backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.7), rgba(255, 255, 255, 0.7)), url(${Fondo})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed'
      }}
    >
      <div className="container grid items-center justify-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-10">
        <div className="space-y-4">
          <div className="inline-block rounded-lg bg-gradient-to-r from-indigo-500 to-purple-300 px-3 py-1 text-sm text-gray-800 dark:text-gray-900 font-semibold">
            Juan Pablo Baquero
          </div>
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl font-serif text-[#4831D4]" style={{ fontFamily: 'Futura, sans-serif' }}>
            FullStack Dev and Growth Innovator
          </h1>
          <p className="max-w-[600px] text-gray-800 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400 text-justify" style={{ fontFamily: 'Futura, sans-serif', color: '#444545' }}>
            Soy la sensación del bloque (de código) como FullStack Dev, con un amor apasionado por Python, JavaScript y el Hacking (ético). Mi objetivo no se limita a ser el best programator 'in the hello world', sino impulsar iniciativas tecnológicas innovadoras. Valoro una perspectiva generalista del desarrollo y el liderazgo de proyectos tecnológicos.
          </p>
          <p className="max-w-[600px] text-gray-800 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400 text-justify" style={{ fontFamily: 'Futura, sans-serif', color: '#444545' }}>
            Por lo tanto aspiro a liderar equipos, influir positivamente en las personas y perfeccionarme continuamente en metodologías para diseñar, desarrollar y ofrecer tecnologías de vanguardia que solucionen problemas concretos. Pero mientras tanto eso ocurre, soy un nerd de la tecnología.
          </p>
        </div>
        <div className="flex justify-center items-center flex-col mt-4 sm:mt-0">
          <img
            src={Perfil}
            width="400"
            height="400"
            alt="Foto de perfil"
            className="rounded-full w-[200px] h-[200px] sm:w-[300px] sm:h-[300px] object-cover border-4 border-ash-rose mb-4"
          />
          <div className="flex items-center justify-center space-x-4">
            <a href="https://github.com/tucuenta" target="_blank" rel="noopener noreferrer">
              <img src={GithubLogo} alt="GitHub Logo" className="w-6 h-6" />
            </a>
            <a href="https://linkedin.com/in/tucuenta" target="_blank" rel="noopener noreferrer">
              <img src={LinkedInLogo} alt="LinkedIn Logo" className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutMeSection;