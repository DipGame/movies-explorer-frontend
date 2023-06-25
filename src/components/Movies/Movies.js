import './Movies.css';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Header from '../Header/Header.js';
import SearchForm from '../SearchForm/SearchForm';
import Footer from '../Footer/Footer.js';
import HiddenComponent from '../HiddenComponent/HiddenComponent.js';
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import threeLine from '../../images/icon__COLOR_icon-main.png'

function Movies(props) {

    const navigate = useNavigate();

    const [overlay, setOverlay] = useState('overlay');
    const [secret, setSecret] = useState('secret');
    const [isActiveFindButton, setIsActiveFindButton] = useState(false);
    const [isActiveButton, setIsActiveButton] = useState(false);
    const [request, setRequest] = useState('');

    console.log(request);

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

    function handleClickFilter() {
        if (isActiveButton === false) {
            setIsActiveButton(true);
        } else {
            setIsActiveButton(false);
        }
    }

    useEffect(() => {
        if (localStorage.getItem("inputFindValue").length > 1) {
            handleVisionMovies();
        }
    }, [])

    function handleVisionMovies() {
        setIsActiveFindButton(true);
    }

    function handleInputValue(value) {
        setRequest(value);
    }

    return (
        <>
            <Header click={goHome} threeLine={threeLine} films={'Фильмы'} save={'Сохраненные фильмы'} account={'Аккаунт'} color={'#FAFAFA'} overlay={openOverlay} />
            <SearchForm handleClickFilter={handleClickFilter} filterActive={isActiveButton} handleVisionMovies={handleVisionMovies} onSelectInput={handleInputValue}/>
            {isActiveFindButton && <MoviesCardList cards={props.cards} load={props.load} handleCardClick={props.handleCardClick} save={false} fliterOn={isActiveButton} request={request}/>}
            <Footer />
            <HiddenComponent classOverlay={overlay} classSecret={secret} close={closeOverlay} />
        </>
    );
}

export default Movies;