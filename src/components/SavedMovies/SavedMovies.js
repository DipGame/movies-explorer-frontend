import './SavedMovies.css';
import Header from '../Header/Header.js';
import SearchForm from '../SearchForm/SearchForm';
import Footer from '../Footer/Footer.js';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import HiddenComponent from '../HiddenComponent/HiddenComponent.js';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import threeLine from '../../images/icon__COLOR_icon-main.png';

function SavedMovies(props) {

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

    const [isActiveButton, setIsActiveButton] = useState(false)

    function handleClickFilter() {
        if (isActiveButton === false) {
            setIsActiveButton(true);
        } else {
            setIsActiveButton(false);
        }
    }

    return (
        <>
            <Header click={goHome} threeLine={threeLine} films={'Фильмы'} save={'Сохраненные фильмы'} account={'Аккаунт'} color={'#FAFAFA'} overlay={openOverlay} />
            <SearchForm handleClickFilter={handleClickFilter} filterActive={isActiveButton} />
            <MoviesCardList cards={props.cards} load={props.load} handleCardClick={props.handleCardClick} save={true} filterOn={isActiveButton} />
            <Footer />
            <HiddenComponent classOverlay={overlay} classSecret={secret} close={closeOverlay} />
        </>
    );
}

export default SavedMovies;