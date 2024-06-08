import React, { useState } from 'react';
import { FaReact, FaNodeJs, FaPython } from 'react-icons/fa';
import { SiTailwindcss } from "react-icons/si";
import { FaNpm } from "react-icons/fa";
import { SiVisualstudio } from "react-icons/si";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";

function ArrowText({ children, url }) {
    return (
        <a href={url} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 cursor-pointer hover:text-blue-500 transition-all duration-200 ease-in-out transform hover:scale-105">
            <span className="text-olive max-w-[600px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed text-justify font-tiny5">{children}</span>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 transition-transform duration-200 ease-in-out transform hover:rotate-90">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
        </a>
    );
}

const techIcons = {
    React: <FaReact className="text-black" />,
    NodeJs: <FaNodeJs className="text-black" />,
    Python: <FaPython className="text-black" />,
    Tailwind: <SiTailwindcss className="text-black" />,
    JavaScript: <IoLogoJavascript className="text-black" />,
    Npm: <FaNpm className="text-black" />,
    VSCode: <SiVisualstudio className="text-black" />,
    CCS: <FaCss3Alt className="text-black" />
}



// Agrega más mapeos según sea necesario


function ProjectCard({ image, title, description, url, technologies }) {
    const [showTechnologies, setShowTechnologies] = useState(false);

    const handleMouseEnter = () => {
        setShowTechnologies(true);
    };

    const handleMouseLeave = () => {
        setShowTechnologies(false);
    };

    return (
        <div className="relative">
            <div
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                onClick={() => window.open(url, "_blank")}
                className="project-card bg-white rounded-lg shadow-md overflow-hidden transform transition-transform duration-500 hover:scale-105 w-64 h-80 relative m-1"
            >
                <img src={image} alt={title} className="w-full h-80 object-cover" />
                <div className="p-4 absolute bottom-0 left-0 bg-black bg-opacity-60 text-white w-full h-full opacity-0 hover:opacity-100 transition-opacity duration-500">
                    <h2 className="text-xl font-chivo font-bold mb-2">{title}</h2>
                    <p className="font-overpass text-white">{description}</p>
                </div>
            </div>
            {showTechnologies && (
                <div className="hidden lg:block absolute top-0 right-0 bg-7F5AF0 text-white p-2 mt-2 rounded shadow-lg">
                    <h3 className="font-overpass text-black">Algunas Tecnologias:</h3>
                    <div className="flex justify-center items-center">
                        {technologies.map((tech) => techIcons[tech])}
                    </div>
                </div>
            )}
        </div>
    );
}

export { ArrowText, ProjectCard };