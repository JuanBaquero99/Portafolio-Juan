function Resume() {
    return (
      <section
        id="resume"
        className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-indigo-100 to-purple-100 dark:bg-gray-800"
      >
        <div className="container grid items-center justify-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-10">
          <div className="flex justify-center lg:justify-start">
            <img
              src="/placeholder.svg"
              width="600"
              height="600"
              alt="Foto de perfil"
              className="rounded-full w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] object-cover border-4 border-indigo-500"
            />
          </div>
          <div className="space-y-4">
            <div className="inline-block rounded-lg bg-gradient-to-r from-indigo-500 to-purple-500 px-3 py-1 text-sm text-white">
              Desarrollador Full Stack
            </div>
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl text-indigo-900 dark:text-white">
              Tu Nombre
            </h1>
            <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Hola, soy un desarrollador Full Stack con experiencia en la creación de aplicaciones web escalables y
              eficientes. Me apasiona trabajar en equipos colaborativos para llevar las ideas desde la concepción hasta
              la implementación.
            </p>
            <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Tengo experiencia en el desarrollo tanto en el frontend como en el backend, utilizando tecnologías como
              React, Node.js, Express y MongoDB. Mi objetivo es seguir aprendiendo y creciendo en el campo de la
              tecnología para crear soluciones innovadoras y impactantes.
            </p>
            <div className="bg-indigo-500 bg-opacity-20 p-4 rounded-lg">
              <p className="text-lg font-semibold text-indigo-700">¡Mira mis habilidades!</p>
            </div>
          </div>
        </div>
      </section>
    );
  }
  
  export default Resume;