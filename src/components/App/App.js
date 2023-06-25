import './App.css';
import Header from '../Header/Header.js'
import Main from '../Main/Main.js'
import SavedMovies from '../SavedMovies/SavedMovies';
import Movies from '../Movies/Movies';
import Api from '../../utils/Api'
import * as ApiUser from '../../utils/MainApi';
import * as ApiMovies from '../../utils/MoviesApi';
import Footer from '../Footer/Footer.js'
import Profile from '../Profile/Profile.js'
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import Sign from '../Sign/Sign.js'
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import { Routes, Route, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import threeLine from '../../images/icon__COLOR_icon-main.png';

function App() {

  const navigate = useNavigate();

  function goMovies() {
    navigate('/movies', { replace: true });
  }

  function goHome() {
    navigate('/', { replace: true });
  }

  function leaveProfile() {
    localStorage.removeItem('jwt');
    setLoggedIn(false);
    navigate('/signin', { replace: true });
  }
  
  const handleCardSave = (event) => {
    const card = event.currentTarget;
    const movieData = JSON.parse(card.id);
    if (card.className === 'movie__save movie__save_active') {
      api
        .getSaveMovies()
        .then((data) => {
          data.map((itemSave) => {
            if (movieData.id === itemSave.movieId) {
              api.changeDeleteSaveCard(itemSave._id)
                .then((res) => {
                  card.className = 'movie__save'
                })
                .catch((err) => {
                  console.log(err);
                })
            }
          })
        })
        .catch((err) => console.log(err))
    }
    else {
      api.changeSaveCard({
        country: movieData.country,
        director: movieData.director,
        duration: movieData.duration,
        year: movieData.year,
        description: movieData.description,
        image: 'https://api.nomoreparties.co' + movieData.image.url,
        trailerLink: movieData.trailerLink,
        thumbnail: 'https://api.nomoreparties.co' + movieData.image.url,
        movieId: movieData.id,
        nameRU: movieData.nameRU,
        nameEN: movieData.nameEN
      })
        .then((res) => {
          api
            .getSaveMovies()
            .then((data) => {
              card.className = 'movie__save'
              card.className = 'movie__save movie__save_active'
              setSaveMovieCard(data);
            })
            .catch((err) => console.log(err))
        })
        .catch((err) => {
          console.log(err);
        })
    }
  }

  const handleCardDelete = (event) => {
    const card = event.currentTarget;
    const movieData = JSON.parse(card.id);
    api.changeDeleteSaveCard(movieData._id)
      .then((res) => {
        api
          .getSaveMovies()
          .then((data) => {
            card.className = 'movie__save'
            setSaveMovieCard(data);
          })
          .catch((err) => console.log(err))
      })
      .catch((err) => {
        console.log(err);
      })
  }

  const [currentUser, setCurrentUser] = useState({
    name: '',
    email: '',
  });

  const [loggedIn, setLoggedIn] = useState(false);
  const [load, setLoad] = useState(false);

  const [movieCard, setMovieCard] = useState([]);
  const [saveMovieCard, setSaveMovieCard] = useState([]);

  const configApi = {
    url: "https://addmymovies.nomoredomains.monster/api",
    headers: {
      'Authorization': `Bearer ${localStorage.getItem('jwt')}`,
      'Content-Type': 'application/json'
    },
  }

  useEffect(() => {
    handleTokenCheck();
  }, [loggedIn])

  const handleTokenCheck = () => {
    if (localStorage.getItem('jwt')) {
      const jwt = localStorage.getItem('jwt');
      ApiUser.checkToken(jwt).then((res) => {
        setLoggedIn(true);
      })
        .catch((err) => {
          console.log(err);
        })
    }
  }

  useEffect(() => {
    navigate(JSON.parse(window.sessionStorage.getItem('lastRoute') || '{}'))
    window.onbeforeunload = () => {
        window.sessionStorage.setItem('lastRoute', JSON.stringify(window.location.pathname))
    }
}, [])

  const api = new Api(configApi);

  const handleLogin = () => {
    setLoggedIn(true);
  }

  useEffect(() => {
    api
      .getUserInfo()
      .then((data) => {
        setCurrentUser(data);
      })
      .catch((err) => console.log(err))
  }, [loggedIn]);

  useEffect(() => {
    setLoad(true);
    api
      .getSaveMovies()
      .then((data) => {
        setSaveMovieCard(data);
      })
      .finally(() => {
        setLoad(false);
      })
      .catch((err) => console.log(err))
  }, [loggedIn]);

  useEffect(() => {
    setLoad(true);
    ApiMovies.movies()
      .then((data) => {
        saveMovieCard.map((saveItem) => {
          data.map((item) => {
            if (saveItem.movieId === item.id) {
              item.save = true;
            }
            saveItem.save = true;
          })
        })
        setMovieCard(data)
      })
      .finally(() => {
        setLoad(false);
      })
      .catch((err) => console.log(err))
  }, [loggedIn, saveMovieCard])

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="body">
        <div className="page">
          <Routes>
            <Route path='/' element={
              <>
                {(!loggedIn) && <Header click={goMovies} signup={'Регистрация'} signin={'Войти'} color={'#DDDEE3'} />}
                {(loggedIn) && <Header click={goHome} threeLine={threeLine} alt={'3 линии'} films={'Фильмы'} save={'Сохраненные фильмы'} account={'Аккаунт'} color={'#DDDEE3'} />}
                <Main />
                <Footer />
              </>
            } />
            <Route path='/movies' element={
              <>
                <ProtectedRoute loggedIn={loggedIn}>
                  <Movies cards={movieCard} load={load} handleCardClick={handleCardSave} />
                </ProtectedRoute>
              </>
            }
            />
            <Route path='/save-movies' element={
              <>
                <ProtectedRoute loggedIn={loggedIn}>
                  <SavedMovies cards={saveMovieCard} load={load} handleCardClick={handleCardDelete} />
                </ProtectedRoute>
              </>
            }
            />
            <Route path='/profile' element={
              <>
                <ProtectedRoute loggedIn={loggedIn}>
                  <Header click={goHome} threeLine={threeLine} alt={'3 линии'} films={'Фильмы'} save={'Сохраненные фильмы'} account={'Аккаунт'} color={'#FAFAFA'} />
                  <Profile leaveProfile={leaveProfile} />
                </ProtectedRoute>
              </>
            }
            />
            <Route path='/signup' element={
              <>
                <Sign handleLogin={handleLogin} sign={'true'} title={'Добро Пожаловать!'} button={'Зарегистрироваться'} question={'Уже зарегистрированы? '} link={'Войти'} />
              </>
            }
            />
            <Route path='/signin' element={
              <>
                <Sign handleLogin={handleLogin} title={'Рады видеть!'} button={'Войти'} question={'Ещё не зарегистрированы? '} link={'Регистрация'} />
              </>
            }
            />
          </Routes>
        </div>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
