import './HiddenComponent.css';
import logoExit from '../../images/Group.png'
import { NavLink, useNavigate } from 'react-router-dom';

function HiddenComponent(props) {

    const navigate = useNavigate();

    function goHome() {
        navigate('/', { replace: true });
    }

    function goMovies() {
        navigate('/movies', { replace: true });
    }

    function goSaveMovies() {
        navigate('/save-movies', { replace: true });
    }

    function goProfile() {
        navigate('/profile', { replace: true });
    }

    return (
        <>
            <div className={props.classOverlay}>
                <div className={props.classSecret}>
                    <div className='secret__container'>
                        <img className='secret__exit' src={logoExit} onClick={props.close} />
                        <NavLink to="/" className={(navData) => (navData.isActive ? 'secret__link secret__link_active' : 'secret__link')} onClick={goHome} >
                            Главная
                        </NavLink>
                        <NavLink to="/movies" className={(navData) => (navData.isActive ? 'secret__link secret__link_active' : 'secret__link')} onClick={goMovies} >
                            Фильмы
                        </NavLink>
                        <NavLink to="/save-movies" className={(navData) => (navData.isActive ? 'secret__link secret__link_active' : 'secret__link')} onClick={goSaveMovies}>
                            Сохраненные фильмы
                        </NavLink>
                        <button className='secret__button' onClick={goProfile}>Аккаунт</button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default HiddenComponent;