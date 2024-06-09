import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { DarkModeProvider } from '.././src/Components/DarkMode/index';
import Navbar from './Components/Navbar';
import Footer from '../src/Pages/Footer/index';
import AboutMe from './Pages/AboutMe/index';
import Personality from './Pages/Personality/Personality';
import Laboral from './Pages/Laboral/index';
import Observatorio from './Pages/Observatorio/index';
import Contacto from './Pages/Contacto/index';

const App = () => {
    const [colorIndex, setColorIndex] = useState(0);
    const colors = ['bg-gradient-to-r from-green-400 to-blue-500', 'bg-gradient-to-r from-red-400 to-yellow-500', 'bg-gradient-to-r from-purple-400 to-pink-500'];

    const handleAlienClick = () => {
        setColorIndex((colorIndex + 1) % colors.length);
    }

    return (
        <DarkModeProvider>
            <Helmet>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
                <link href="https://fonts.googleapis.com/css2?family=Jacquard+12&family=League+Spartan:wght@100..900&family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&family=Tiny5&display=swap" rel="stylesheet" />
            </Helmet>
            <Router>
                <Navbar bgColor={colors[colorIndex]} onAlienClick={handleAlienClick} />
                <Routes>
                    <Route path='/' element={<AboutMe />} />
                    <Route path='/Personality' element={<Personality />} />
                    <Route path='/Laboral' element={<Laboral />} />
                    <Route path='/Observatorio' element={<Observatorio />} />
                    <Route path='/Contacto' element={<Contacto />} />
                </Routes>
                <Footer bgColor={colors[colorIndex]} />
            </Router>
        </DarkModeProvider>
    );
};

export default App;