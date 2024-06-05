function Personality() {
  return (
    <div id="personality" className="flex justify-center py-12 bg-white">
      <div className="max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <div>
            <h2 className="text-5xl font-bold text-[#4831D4] mb-6">Design</h2>
            <p className="text-gray-600 mb-8">
              Aquí puedes agregar una descripción sobre tus habilidades en diseño.
            </p>
          </div>
          <div>
            <h2 className="text-5xl font-bold text-[#4831D4] mb-6">Engineering</h2>
            <p className="text-gray-600 mb-8">
              Aquí puedes agregar una descripción sobre tus habilidades en ingeniería.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mt-16">
          <div className="order-1 md:order-2">
            <div className="grid grid-cols-3 gap-4">
              <div className="text-gray-300 h-6 w-6" />
              <div className="text-gray-300 h-6 w-6" />
              <div className="text-gray-300 h-6 w-6" />
            </div>
            <div className="grid grid-cols-2 gap-4 mt-4">
              <div className="text-gray-300 h-6 w-6" />
              <div className="text-gray-300 h-6 w-6" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Personality;