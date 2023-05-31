import './Header.css';
import logo from '../../images/logo.svg'
import { useNavigate } from 'react-router-dom';

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
        <header className="header" style={{ backgroundColor: props.color, maxWidth: props.maxWidth, margin: props.marginHeader }} >
            <img className='header__img' style={{ margin: props.marginLogo }} src={logo} onClick={props.click} alt={'Лого'} />
            <a className={`${props.films ? 'header__films' : ''}`} onClick={goMovies}>
                {props.films}
            </a>
            <a className={`${props.save ? 'header__save-films' : ''}`} onClick={goSaveMovies}>
                {props.save}
            </a>
            <a className={`${props.signup ? 'header__signup' : ''}`} onClick={goSignUp} id={'signUp'} href='#'>
                {props.signup}
            </a>
            <a className={`${props.signin ? 'header__signin' : ''}`} onClick={goSignIn} href='#'>
                {props.signin}
            </a>
            <h2 className={`${props.account ? 'header__account' : ''}`} onClick={goProfile} id={'myAccount'}  >
                {props.account}
            </h2>
            <img className={`${props.threeLine ? 'header__three' : ''}`} src={props.threeLine} alt={`${props.threeLine ? 'картинка' : ''}`}/>
        </header >
    );
}

export default Header;