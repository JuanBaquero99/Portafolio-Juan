import BackgroundImage from '../../Components/assets/img/Animation.gif';
import GifImage from '../../Components/assets/img/hom.gif';

const HeaderLaboral = ({ children }) => (
    <h1 className="text-[#45C1A5] font-league-spartan tracking-tighter sm:text-4xl md:text-5xl border border-black rounded-lg p-5 bg-white bg-opacity-50 shadow-lg">
        {children}
    </h1>
);

const ParagraphLaboral = ({ children }) => (
    <div className="max-w-[600px] text-black md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed text-justify font-libre-baskerville border border-black rounded-lg p-5 bg-white bg-opacity-50 shadow-lg animate-fadeIn">
        {children}
    </div>
);

function Laboral() {
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
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                width: '50%', // Reducir el ancho
                height: '50%', // Reducir la altura
                backgroundImage: `url(${GifImage})`,
                backgroundSize: 'contain', // Asegurarse de que la imagen se ajuste dentro de la div
                backgroundPosition: 'center', // Centrar la imagen
                backgroundRepeat: 'no-repeat'
            }}>
                <HeaderLaboral>
                    Escrbiendo...
                </HeaderLaboral>
                <ParagraphLaboral>
                (Dejara de escribir cuando me den mi primera chamba)
                </ParagraphLaboral>
            </div>
        </section>
    );
}

export default Laboral;