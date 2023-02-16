import React from "react";

const Features = () => {
  return (
    <section className="bg-white py-12">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold mb-4 text-center font-mono">
          Destacados
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-gray-100 p-8 shadow-xl rounded-lg">
            <h3 className="text-2xl font-bold mb-4 text-green-700">Profesionales experimentados</h3>
            <p className="text-lg">
            Nuestros docentes son altamente experimentados en sus ramas de estudio.
            </p>
          </div>
          <div className="bg-gray-100 p-8 shadow-xl rounded-lg">
            <h3 className="text-2xl font-bold mb-4 text-green-700">Innovador</h3>
            <p className="text-lg">
            Enseñamos mediante el pensamiento crítico y fomentamos la constante experimentación.
            </p>
          </div>
          <div className="bg-gray-100 p-8 shadow-xl rounded-lg">
            <h3 className="text-2xl font-bold mb-4 text-green-700">Reconocido</h3>
            <p className="text-lg">
              Nuestra institución ha sido reconocida por implementar nuevas técnicas de enseñanza.
            </p>
          </div>
          </div>
          </div>
        </section>
        )
        }

export default Features;