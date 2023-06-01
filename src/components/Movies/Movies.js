import './Movies.css';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Header from '../Header/Header.js';
import SearchForm from '../SearchForm/SearchForm';
import Footer from '../Footer/Footer.js';
import HiddenComponent from '../HiddenComponent/HiddenComponent.js';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import threeLine from '../../images/icon__COLOR_icon-main.png'

function Movies(props) {

    const navigate = useNavigate();

    const [overlay, setOverlay] = useState('overlay');
    const [secret, setSecret] = useState('secret');

    function openOverlay() {
        setOverlay('overlay overlay_open');
        setSecret('secret secret_active');
    }

    function closeOverlay() {
        setOverlay('overlay');
        setSecret('secret');
    }

    function goHome() {
        navigate('/', { replace: true });
    }

    return (
        <>
            <Header click={goHome} threeLine={threeLine} films={'Фильмы'} save={'Сохраненные фильмы'} account={'Аккаунт'} color={'#FAFAFA'} overlay={openOverlay} />
            <SearchForm />
            <MoviesCardList />
            <Footer />
            <HiddenComponent classOverlay={overlay} classSecret={secret} close={closeOverlay} />
        </>
    );
}

export default Movies;