import './AboutMe.css';
import { Link } from 'react-router-dom';
import myFoto from '../../images/HmmkhQvfXoc.jpg'

function AboutMe() {
    return (
        <section className='about'>
            <h2 className='about__title'>
                Студент
            </h2>
            <div className='about__container'>
                <div className='about__box'>
                    <h2 className='about__name'>
                        Константин
                    </h2>
                    <h3 className='about__prof'>
                        Веб разработчик, 26 лет
                    </h3>
                    <p className='about__text'>
                        Я родился и живу в Сургуте, закончил факультет строительства в Тюменском Индустриальном Университете. Холост. Я люблю слушать музыку, играть на музыкальных инструментах и играть в баскетболл. Недавно начал кодить. Сейчас заканчиваю обучение(А если вы это читаете после 26.06.2023, то уже закончил) в Яндекс Практикуме. Активно ищу работу.
                    </p>
                    <a className='about__link' href='https://github.com/DipGame'>
                        Мой GitHub
                    </a>
                </div>
                <div className='about__box'>
                    <img className='about__img' src={myFoto} alt={'Аватар'} />
                </div>
            </div>
            <h2 className='about__subtitle'>
                Портфолио
            </h2>
            <ul className='about__list'>
                <li><Link className='about__navigate' to='https://dipgame.github.io/how-to-learn/' target="_blank" >
                    <h2 className='about__navigate_text'>
                        Статичный сайт
                    </h2>
                    <p className='about__navigate_arrow'>
                        ↗
                    </p>
                </Link>
                </li>
                <li><Link className='about__navigate' to='https://dipgame.github.io/russian-travel/' target="_blank">
                    <h2 className='about__navigate_text'>
                        Адаптивный сайт
                    </h2>
                    <p className='about__navigate_arrow'>
                        ↗
                    </p>
                </Link>
                </li>
                <li><Link className='about__navigate' to='https://ivachev.k.f.students.nomoredomains.monster/sign-in' target="_blank">
                    <h2 className='about__navigate_text'>
                        Одностраничное приложение
                    </h2>
                    <p className='about__navigate_arrow'>
                        ↗
                    </p>
                </Link>
                </li>
            </ul>
        </section >
    )
}

export default AboutMe;