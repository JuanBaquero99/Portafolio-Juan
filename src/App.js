import React from 'react';
import { Helmet } from 'react-helmet';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { DarkModeProvider } from '.././src/Components/DarkMode/index';
import Navbar from './Components/Navbar';
import AboutMe from './Pages/AboutMe/index';

const App = () => {
    return (
        <DarkModeProvider>
            <Helmet>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
                <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400..900;1,400..900&family=Tiny5&display=swap" rel="stylesheet" />
            </Helmet>
            <Router>
                <Navbar />
                <Routes>
                    <Route path='/' element={<AboutMe />} />
                </Routes>
            </Router>
        </DarkModeProvider>
    );
};

export default App;