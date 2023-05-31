import './Movies.css';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Header from '../Header/Header.js';
import SearchForm from '../SearchForm/SearchForm';
import Footer from '../Footer/Footer.js';
import { useNavigate } from 'react-router-dom';
import threeLine from '../../images/icon__COLOR_icon-main.png'

function Movies(props) {

    const navigate = useNavigate();

    function goHome() {
        navigate('/', { replace: true });
    }

    return (
        <>
            <Header click={goHome} threeLine={threeLine} films={'Фильмы'} save={'Сохраненные фильмы'} account={'Аккаунт'} color={'#FAFAFA'} />
            <SearchForm />
            <MoviesCardList />
            <Footer />
        </>
    );
}

export default Movies;