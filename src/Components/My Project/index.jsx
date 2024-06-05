import React from 'react';

const Projects = () => {
  return (
    <section className="bg-gray-100 p-8">
      <h2 className="text-2xl font-semibold mb-4">Proyectos</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-white p-4 shadow rounded">
          <h3 className="text-xl font-bold">Proyecto 1</h3>
          <p className="text-gray-700">Descripción del proyecto...</p>
        </div>
        <div className="bg-white p-4 shadow rounded">
          <h3 className="text-xl font-bold">Proyecto 2</h3>
          <p className="text-gray-700">Descripción del proyecto...</p>
        </div>
      </div>
    </section>
  );
};

export default Projects;