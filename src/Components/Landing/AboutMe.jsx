import Perfil from '../assets/images/Mejor.jpeg';

function AboutMeSection() {
  return (
    <section
      id="about"
      className="w-full py-12 md:py-24 lg:py-32 bg-blue-100 dark:bg-gray-200 text-gray-800"
      style={{
        backgroundImage: 'url(/assets/images/background-texture.png)',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed'
      }}
    >
      <div className="container grid items-center justify-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-10">
        <div className="space-y-4">
          <div className="inline-block rounded-lg bg-gradient-to-r from-yellow-300 to-yellow-500 px-3 py-1 text-sm text-gray-800 dark:text-gray-900 font-semibold">
            FullStack Dev and Growth Innovator
          </div>
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl font-serif">
            Juan Pablo Baquero Davila
          </h1>
          <p className="max-w-[600px] text-gray-600 md:text-lg lg:text-base xl:text-lg dark:text-gray-700 font-light text-justify">
            Soy la sensación del bloque (de código) como FullStack Dev, con un amor apasionado por Python, JavaScript y el Hacking (ético 🤨). Mi objetivo es ser el mejor programador 'in the hello world' mientras impulso iniciativas tecnológicas innovadoras. Valoro una perspectiva generalista del desarrollo.
          </p>
          <p className="max-w-[600px] text-gray-600 md:text-lg lg:text-base xl:text-lg dark:text-gray-700 font-light text-justify">
            Mi meta no se limita a escribir líneas de código eficientes; aspiro a liderar equipos, influir positivamente en las personas y perfeccionarme continuamente en metodologías para diseñar, desarrollar y ofrecer tecnologías de vanguardia que solucionen problemas concretos.
          </p>
        </div>
        <div className="flex justify-center">
          <img
            src={Perfil}
            width="400"
            height="400"
            alt="Foto de perfil"
            className="rounded-full w-[200px] h-[200px] sm:w-[300px] sm:h-[300px] object-cover border-4 border-gray-500"
          />
        </div>
      </div>
    </section>
  );
}

export default AboutMeSection;