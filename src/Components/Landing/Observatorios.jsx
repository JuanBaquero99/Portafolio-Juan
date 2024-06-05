import React from 'react';

function Observatorios() {
  return (
    <section id="observatorio" className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
      <div className="container max-w-5xl px-4 md:px-6">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
          <div>
            <img
              src="/placeholder.svg"
              width="550"
              height="310"
              alt="Proyecto de investigación"
              className="w-full h-[300px] sm:h-[400px] object-cover rounded-lg"
            />
          </div>
          <div className="space-y-6">
            <div>
              <div className="inline-block rounded-lg bg-gradient-to-r from-indigo-700 to-purple-700 text-white px-3 py-1 text-sm">
                Proyecto de investigación
              </div>
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-indigo-900">
                Análisis de la eficiencia energética en edificios
              </h1>
            </div>
            <div className="text-gray-500 space-y-4">
              <p>
                Este proyecto de investigación se enfoca en el análisis de la eficiencia energética en edificios, con el
                objetivo de desarrollar estrategias y soluciones que permitan reducir el consumo de energía y las emisiones
                de carbono.
              </p>
              <p>
                A través de un enfoque multidisciplinario, se estudiarán diversos factores que influyen en el desempeño
                energético de los edificios, como la envolvente, los sistemas de climatización, la iluminación y los
                patrones de uso. Se utilizarán herramientas de simulación y análisis de datos para evaluar el impacto de
                diferentes estrategias de eficiencia energética.
              </p>
              <p>
                Los resultados de esta investigación serán de gran utilidad para arquitectos, ingenieros y responsables de
                políticas públicas, ya que proporcionarán información valiosa para el diseño y la implementación de edificios
                más sostenibles y eficientes energéticamente.
              </p>
            </div>
            <div className="flex justify-end">
              <button className="inline-flex h-8 items-center justify-center rounded-md bg-white text-indigo-700 hover:bg-indigo-700 hover:text-white px-4 py-2 text-sm font-medium shadow transition-colors focus:outline-none focus:ring-1 focus:ring-indigo-700">
                Descargar informe
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Observatorios;