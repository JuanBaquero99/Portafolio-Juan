import React from 'react';

const Contact = () => {
  return (
    <section className="bg-white p-8">
      <h2 className="text-2xl font-semibold mb-4">Contacto</h2>
      <form className="space-y-4">
        <div>
          <label className="block text-gray-700">Nombre</label>
          <input type="text" className="w-full p-2 border border-gray-300 rounded" />
        </div>
        <div>
          <label className="block text-gray-700">Email</label>
          <input type="email" className="w-full p-2 border border-gray-300 rounded" />
        </div>
        <div>
          <label className="block text-gray-700">Mensaje</label>
          <textarea className="w-full p-2 border border-gray-300 rounded" rows="4"></textarea>
        </div>
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
          Enviar
        </button>
      </form>
    </section>
  );
};

export default Contact;