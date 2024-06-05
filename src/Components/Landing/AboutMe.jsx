

function AboutMeSection() {
  return (
    <section
      id="about"
      className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-indigo-100 to-purple-100 dark:bg-gray-800"
    >
      <div className="container grid items-center justify-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-10">
        <div className="space-y-4">
          <div className="inline-block rounded-lg bg-gradient-to-r from-indigo-500 to-purple-500 px-3 py-1 text-sm text-white">
            Desarrollador Web
          </div>
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl text-indigo-900 dark:text-white">
            Olaolu Olawuyi
          </h1>
          <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
            Hola, soy un desarrollador web apasionado por crear experiencias digitales innovadoras y de alta
            calidad. Me especializo en el desarrollo frontend utilizando tecnologías como React, Next.js y Tailwind
            CSS.
          </p>
        </div>
        <div className="flex justify-center">
          <img
            src="/placeholder.svg"
            width="400"
            height="400"
            alt="Foto de perfil"
            className="rounded-full w-[200px] h-[200px] sm:w-[300px] sm:h-[300px] object-cover border-4 border-indigo-500"
          />
        </div>
      </div>
    </section>
  );
}

export default AboutMeSection;