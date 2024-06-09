import { CustomHeader, CustomParagraph } from "../AboutMe/index";
import BackgroundImage from '../../Components/assets/img/Animation.gif';
import { ArrowText } from "../../Components/PojectCards";

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
            <CustomHeader style={{marginTop: '50px'}}>
            Observatorios Urbanos de IA para Ecosistemas de Comunidades (OUEC)
            </CustomHeader>
            <CustomParagraph style={{width: '80%', height: '50%', overflowX: 'auto'}}>
            Los Observatorios Urbanos de IA para Ecosistemas de Comunidades (OUEC) son plataformas de investigación y desarrollo que utilizan tecnologías de Inteligencia Artificial (IA) para analizar, monitorear y mejorar los ecosistemas de las comunidades urbanas.
            </CustomParagraph>
            <ArrowText url="https://www.notion.so/Observatorios-Urbanos-de-IA-para-Ecosistemas-de-Comunidades-OUEC-865a0b3761964c8eb88f56f494e3be96">
                Haz click aquí para profundizar en proyecto
            </ArrowText>
        </section>
    );
}

export default Observatorio;