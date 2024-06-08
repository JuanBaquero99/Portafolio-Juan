import React from 'react';
import { Helmet } from 'react-helmet';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { DarkModeProvider } from '.././src/Components/DarkMode/index';
import Navbar from './Components/Navbar';
import AboutMe from './Pages/AboutMe/index';
import Personality from './Pages/Personality/Personality';
import Laboral from './Pages/Laboral/index';
import Observatorio from './Pages/Observatorio/index'; // Asegúrate de importar el componente correcto

const App = () => {
    return (
        <DarkModeProvider>
            <Helmet>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
                <link href="https://fonts.googleapis.com/css2?family=Jacquard+12&family=League+Spartan:wght@100..900&family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&family=Tiny5&display=swap" rel="stylesheet" />
            </Helmet>
            <Router>
                <Navbar />
                <Routes>
                    <Route path='/' element={<AboutMe />} />
                    <Route path='/Personality' element={<Personality />} />
                    <Route path='/Laboral' element={<Laboral />} />
                    <Route path='/Observatorio' element={<Observatorio />} /> 
                </Routes>
            </Router>
        </DarkModeProvider>
    );
};

export default App;