import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

function Proyectos() {
  return (
    <section id="projects" className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-indigo-100 to-purple-100 dark:bg-gray-800">
      <div className="container grid max-w-5xl items-center justify-center gap-4 px-4 md:px-6 lg:grid-cols-2 lg:gap-10">
        <div className="space-y-4">
          <div className="inline-block rounded-lg bg-gradient-to-r from-indigo-500 to-purple-500 px-3 py-1 text-sm text-white">
            Proyectos destacados
          </div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-[#4831D4]">
            Mis trabajos más recientes
          </h2>
          <p className="max-w-[600px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-600">
            Aquí puedes ver algunos de mis proyectos más recientes. Para explorar todo mi repositorio de Github 
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Card className="overflow-hidden rounded-lg shadow-lg">
            <img
              src="/placeholder.svg"
              width="550"
              height="310"
              alt="Proyecto 1"
              className="w-full h-[200px] object-cover"
            />
            <CardContent className="p-4">
              <h3 className="text-xl font-bold">Proyecto 1</h3>
              <p className="text-gray-500 dark:text-gray-400">
                Descripción del proyecto 1. Aquí puedes agregar más detalles sobre el trabajo realizado.
              </p>
            </CardContent>
          </Card>
          <Card className="overflow-hidden rounded-lg shadow-lg">
            <img
              src="/placeholder.svg"
              width="550"
              height="310"
              alt="Proyecto 2"
              className="w-full h-[200px] object-cover"
            />
            <CardContent className="p-4">
              <h3 className="text-xl font-bold">Proyecto 2</h3>
              <p className="text-gray-500 dark:text-gray-400">
                Descripción del proyecto 2. Aquí puedes agregar más detalles sobre el trabajo realizado.
              </p>
            </CardContent>
          </Card>
          <Card className="overflow-hidden rounded-lg shadow-lg">
            <img
              src="/placeholder.svg"
              width="550"
              height="310"
              alt="Proyecto 3"
              className="w-full h-[200px] object-cover"
            />
            <CardContent className="p-4">
              <h3 className="text-xl font-bold">Proyecto 3</h3>
              <p className="text-gray-500 dark:text-gray-400">
                Descripción del proyecto 3. Aquí puedes agregar más detalles sobre el trabajo realizado.
              </p>
            </CardContent>
          </Card>
          <Card className="overflow-hidden rounded-lg shadow-lg">
            <img
              src="/placeholder.svg"
              width="550"
              height="310"
              alt="Proyecto 4"
              className="w-full h-[200px] object-cover"
            />
            <CardContent className="p-4">
              <h3 className="text-xl font-bold">Proyecto 4</h3>
              <p className="text-gray-500 dark:text-gray-400">
                Descripción del proyecto 4. Aquí puedes agregar más detalles sobre el trabajo realizado.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}

export default Proyectos;