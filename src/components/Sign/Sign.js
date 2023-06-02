import './Sign.css';
import { useNavigate } from 'react-router-dom';
import logo from '../../images/logo.svg'

function Sign(props) {

    const navigate = useNavigate();

    function goHome() {
        navigate('/', { replace: true });
    }

    return (
        <form className='sign'>
            <div className='sign__box'>
                <img className='sign__img' src={logo} alt={'Лого'} onClick={goHome} />
            </div>
            <h2 className='sign__title'>
                {props.title}
            </h2>
            <div className='sign__container' style={{ display: `${!props.sign ? 'none' : 'block'}` }}>
                <h3 className='sign__name'>
                    Имя
                </h3>
                <input className='sign__input' value={'Константин'} required></input>
            </div>
            <div className='sign__container'>
                <h3 className='sign__name'>
                    E-mail
                </h3>
                <input className='sign__input' value={'kostya1.6@yandex.ru'} required></input>
            </div>
            <div className='sign__container'>
                <h3 className='sign__name'>
                    Пароль
                </h3>
                <input className='sign__input' type='password' value={'fdsfsdfsdfsdfs'} required></input>
            </div>
            <p className='sign__err'>
                Что-то пошло не так...
            </p>
            <button type='submit' className='sign__button'>
                {props.button}
            </button>
            <p className='sign__question'>
                {props.question}
                <a className='sign__link' onClick={props.signLink}>
                    {props.link}
                </a>
            </p>
        </form>
    )
}

export default Sign;