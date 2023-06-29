import './Header.css';
import logo from '../../images/logo.svg'
import { useNavigate, NavLink } from 'react-router-dom';

function Header(props) {

    const navigate = useNavigate();

    function goMovies() {
        navigate('/movies', { replace: true });
    }

    function goSaveMovies() {
        navigate('/save-movies', { replace: true });
    }

    function goSignIn() {
        navigate('/signin', { replace: true });
    }

    function goSignUp() {
        navigate('/signup', { replace: true });
    }

    function goProfile() {
        navigate('/profile', { replace: true });
    }

    return (
        <header className="header" style={{ backgroundColor: props.color }} >
            <img className='header__img' src={logo} onClick={props.click} alt={'Лого'} />
            <NavLink to="/movies" className={(navData) => (navData.isActive ? 'header__films header__films_active' : 'header__films')} onClick={goMovies}>
                {props.films}
            </NavLink>
            <NavLink to="/save-movies" className={(navData) => (navData.isActive ? 'header__save-films header__films_active' : 'header__save-films')} onClick={goSaveMovies}>
                {props.save}
            </NavLink>
            <a className={`${props.signup ? 'header__signup' : ''}`} onClick={goSignUp} id={'signUp'} href='#'>
                {props.signup}
            </a>
            <a className={`${props.signin ? 'header__signin' : ''}`} onClick={goSignIn} href='#'>
                {props.signin}
            </a>
            <NavLink to="/profile" className={`${props.account ? 'header__account' : ''}`} style={(navData) => (navData.isActive ? { backgroundColor: '#3456F3', color: 'white' } : { backgroundColor: '#F4F4F4', color: 'black' })} onClick={goProfile} id={'myAccount'}  >
                {props.account}
            </NavLink>
            <img className={`${props.threeLine ? 'header__three' : ''}`} src={props.threeLine} alt={props.alt} onClick={props.overlay} />
        </header >
    );
}

export default Header;