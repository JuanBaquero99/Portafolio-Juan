import React from 'react';
import Perfil from '../assets/images/Mejor.jpeg';
import Fondo from '../assets/images/fondo1.jpg';
import GithubLogo from '../assets/images/github_PNG40.png';
import LinkedInLogo from '../assets/images/R.png';

const SocialLink = ({ href, src, alt }) => (
  <a href={href} target="_blank" rel="noopener noreferrer">
    <img src={src} alt={alt} className="w-6 h-6" />
  </a>
);

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
      <div className="container grid items-center justify-center gap-7 px-4 md:px-6 lg:grid-cols-2 lg:gap-20">
        <div className="space-y-4">
          <div className="inline-block rounded-lg bg-gradient-to-r from-indigo-500 to-purple-300 px-3 py-1 text-sm text-gray-800 text-white font-semibold">
            Juan Pablo Baquero
          </div>
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-[#4831D4]">
            FullStack Dev and Growth Innovator
          </h1>
          <p className="max-w-[600px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-600 text-justify">
            Soy la sensación del bloque (de código) como FullStack Dev, con un amor apasionado por Python, JavaScript y el Hacking (ético). Mi objetivo no se limita a ser el best programator 'in the hello world', sino impulsar iniciativas tecnológicas innovadoras. Valoro una perspectiva generalista del desarrollo y el liderazgo de proyectos tecnológicos.
          </p>
          <p className="max-w-[600px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-600 text-justify">
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
            <SocialLink href="https://github.com/JuanBaquero99" src={GithubLogo} alt="GitHub Logo" />
            <SocialLink href="https://www.linkedin.com/in/juan-pablo-baquero-dávila" src={LinkedInLogo} alt="LinkedIn Logo" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutMeSection;