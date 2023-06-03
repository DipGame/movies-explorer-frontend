import './App.css';
import Header from '../Header/Header.js'
import Main from '../Main/Main.js'
import SavedMovies from '../SavedMovies/SavedMovies';
import Movies from '../Movies/Movies';
import Footer from '../Footer/Footer.js'
import Profile from '../Profile/Profile.js'
import Sign from '../Sign/Sign.js'
import { Routes, Route, useNavigate } from 'react-router-dom';
import threeLine from '../../images/icon__COLOR_icon-main.png';

function App() {

  const navigate = useNavigate();

  function goMovies() {
    navigate('/movies', { replace: true });
  }

  function goHome() {
    navigate('/', { replace: true });
  }

  function goSignIn() {
    navigate('/signin', { replace: true });
}

function goSignUp() {
    navigate('/signup', { replace: true });
}

  return (
    <div className="body">
      <div className="page">
        <Routes>
          <Route path='/' element={
            <>
              <Header click={goMovies} signup={'Регистрация'} signin={'Войти'} color={'#DDDEE3'} />
              <Main />
              <Footer />
            </>
          } />
          <Route path='/movies' element={
            <>
              <Movies />
            </>
          }
          />
          <Route path='/save-movies' element={
            <>
              <SavedMovies />
            </>
          }
          />
          <Route path='/profile' element={
            <>
              <Header click={goHome} threeLine={threeLine} alt={'3 линии'} films={'Фильмы'} save={'Сохраненные фильмы'} account={'Аккаунт'} color={'#FAFAFA'} />
              <Profile />
            </>
          }
          />
          <Route path='/signup' element={
            <>
              <Sign signLink={goSignIn} sign={'true'} title={'Добро Пожаловать!'} button={'Зарегистрироваться'} question={'Уже зарегистрированы? '} link={'Войти'} />
            </>
          }
          />
          <Route path='/signin' element={
            <>
              <Sign signLink={goSignUp} title={'Рады видеть!'} button={'Войти'} question={'Ещё не зарегистрированы? '} link={'Регистрация'} />
            </>
          }
          />
        </Routes>
      </div>
    </div>
  );
}

export default App;
