import './Promo.css';
import OCSVG from '../../images/text__COLOR_landing-logo.svg';

function Promo() {
    return (
        <section className='promo'>
            <h1 className='promo__title'>
                Учебный проект студента факультета Веб-разработки.
            </h1>
                <img className='promo__svg' src={OCSVG} alt={'Сдесь должна была быть картинка'} ></img>
        </section>
    )
}

export default Promo;