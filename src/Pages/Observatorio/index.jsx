import { CustomHeader, CustomParagraph } from "../AboutMe/index";
import BackgroundImage from '../../Components/assets/img/Animation.gif';

function Observatorio() {
    return (
        <section className='mt-5 text-black' style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0.8)), url(${BackgroundImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
        }}>
            <CustomHeader>
            Observatorios Urbanos de IA para Ecosistemas de Comunidades (OUEC)
            </CustomHeader>
            <CustomParagraph>
            Los Observatorios Urbanos de IA para Ecosistemas de Comunidades (OUEC) son plataformas de investigación y desarrollo que utilizan tecnologías de Inteligencia Artificial (IA) para analizar, monitorear y mejorar los ecosistemas de las comunidades urbanas. A través del uso de IA, los OUEC pueden recopilar y analizar grandes cantidades de datos para ayudar a los gobiernos locales y las comunidades a tomar decisiones. Estos observatorios pueden proporcionar información crítica sobre una variedad de temas, desde el cuidado, talento local hasta el medio ambiente y la salud pública.

Inspirados en las Manzanas de Cuidado de las cuales pueden profundizar información en <a href="https://manzanasdelcuidado.gov.co/" target="_blank" rel="noopener noreferrer">Manzanas de Cuidado</a> y <a href="https://www.bbc.com/mundo/articles/cqeq38je3qro" target="_blank" rel="noopener noreferrer">BCC Manzanas de Cuidado</a> 🍎. Y en los Cerebral Valley aquí <a href="https://sfstandard.com/2023/01/13/what-is-cerebral-valley-san-franciscos-nerdiest-new-neighborhood/" target="_blank" rel="noopener noreferrer">Cerebral Valleys</a> 🧠.
            </CustomParagraph>
        </section>
    );
}

export default Observatorio;