import { CustomHeader, CustomParagraph } from "../AboutMe/index";
import BackgroundImage from '../../Components/assets/img/Animation.gif';
import GifImage from '../../Components/assets/img/hom.gif';

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
                <CustomHeader>
                    En construcción
                </CustomHeader>
                <CustomParagraph>
                    Cuando me den mi primera chamba de programador
                </CustomParagraph>
            </div>
        </section>
    );
}

export default Laboral;