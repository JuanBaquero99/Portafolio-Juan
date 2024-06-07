import React from 'react';
import AboutMeSection from './Components/Landing/AboutMe';
import Personality from './Components/Landing/Personality';
import Proyectos from './Components/Landing/proyectos';
import Contacto from './Components/Landing/Contact';
import Footer from './Components/Landing/Footer';
import Observatorios from './Components/Landing/Observatorios';
import Menu from './Components/Menu/index' 
import Logo from './Components/Logo';

function App() {
  return (
    <div>
      <Logo />
      <Menu />
      <AboutMeSection />
      <Proyectos />
      <Personality />
      <Observatorios />
      <Contacto />
      <Footer />
    </div>
  );
}

export default App;