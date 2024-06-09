import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import Contacto from '../../Components/assets/img/@sanassatan.jpg';
import Fondo from '../../Components/assets/img/Animation.gif';

const GitHubProfile = () => {
    const [profile, setProfile] = useState(null);

    useEffect(() => {
        fetch("https://api.github.com/users/JuanBaquero99")
            .then(response => response.json())
            .then(data => setProfile(data));
    }, []);

    if (!profile) {
        return <div>Cargando...</div>;
    }

    return (
        <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0.8)), url(${Fondo})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
        }}>
            <div className="m-20 flex flex-col items-center justify-center bg-white bg-opacity-50 shadow-md rounded-lg p-6">
                <img className="w-24 h-24 rounded-full mb-4" src={profile.avatar_url} alt="Avatar" />
                <h1 className="text-2xl font-bold mb-2">{profile.name}</h1>
                <p className="text-sm text-gray-500 mb-4">{profile.bio}</p>
                <a className="text-blue-500 hover:text-green-600 font-tiny5" href={profile.html_url} target="_blank" rel="noopener noreferrer">Ver perfil en GitHub</a>
                <h2 className="font-tiny5 mt-4">
                    <a className="text-blue-500 hover:text-green-600 font-tiny5" href="https://www.linkedin.com/in/juan-pablo-baquero-dávila" target="_blank" rel="noopener noreferrer">
                        Conecta conmigo
                    </a>
                </h2>
                <a href="https://www.linkedin.com/in/juan-pablo-baquero-dávila" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faLinkedin} size="2x" />
                </a>
                <img src={Contacto} alt="Contacto" style={{ width: '150px', height: '90px', borderRadius: '5%', border: '1px solid black' }} />
            </div>
        </div>
    );
};

export default GitHubProfile;