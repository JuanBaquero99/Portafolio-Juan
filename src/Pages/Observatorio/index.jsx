import { CustomHeader, CustomParagraph } from "../AboutMe/index";
import BackgroundImage from '../../Components/assets/img/Animation.gif';
import { ArrowText } from "../../Components/PojectCards";

const ObservatorioHeader = ({ children }) => (
    <h1 className="text-[#45C1A5] font-league-spartan tracking-tighter sm:text-4xl md:text-5xl border border-black rounded-lg p-5 bg-white bg-opacity-50 shadow-lg">
        {children}
    </h1>
);

const ObservatorioParagraph = ({ children }) => (
    <div className="max-w-[600px] text-black md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed text-justify font-libre-baskerville border border-black rounded-lg p-5 bg-white bg-opacity-50 shadow-lg animate-fadeIn">
        {children}
    </div>
);

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
            <ObservatorioHeader style={{marginTop: '50px'}}>
            Observatorios Urbanos de IA para Ecosistemas de Comunidades (OUEC)
            </ObservatorioHeader>
            <ObservatorioParagraph style={{width: '80%', height: '50%', overflowX: 'auto'}}>
            Los Observatorios Urbanos de IA para Ecosistemas de Comunidades (OUEC) son plataformas de investigación y desarrollo que utilizan tecnologías de Inteligencia Artificial (IA) para analizar, monitorear y mejorar los ecosistemas de las comunidades urbanas.
            </ObservatorioParagraph>
            <ArrowText url="https://www.notion.so/Observatorios-Urbanos-de-IA-para-Ecosistemas-de-Comunidades-OUEC-865a0b3761964c8eb88f56f494e3be96">
                Haz click aquí para profundizar en proyecto
            </ArrowText>
        </section>
    );
}

export default Observatorio;