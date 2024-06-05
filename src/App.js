import React from 'react';
import AboutMeSection from './Components/Landing/AboutMe';
import Resume from './Components/Landing/Resume';
import Personality from './Components/Landing/Personality';
import Proyectos from './Components/Landing/proyectos';
import Contacto from './Components/Landing/Contact';
import Footer from './Components/Landing/Footer';
import Observatorios from './Components/Landing/Observatorios';
import Menu from './Components/Menu/index' 

function App() {
  return (
    <div>
      <Menu />
      <AboutMeSection />
      <Personality />
      <Resume />
      <Observatorios />
      <Proyectos />
      <Contacto />
      <Footer />
    </div>
  );
}

export default App;