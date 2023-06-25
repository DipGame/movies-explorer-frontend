import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';
import { useState, useEffect } from 'react';
import Preloader from '../Preloader/Preloader';
import crySmail from '../../images/pngegg.png'

const MoviesCardList = (props) => {

    const cards = props.cards;

    const [moreMovies, setMoreMovies] = useState(8);

    const [onVision, setOnVision] = useState(false);

    useEffect(() => {
        const numView = document.querySelectorAll('#container').length;

        const numAll = cards.filter((filter) => filter.description.includes(props.request.toLowerCase()) || filter.nameRU.includes(props.request.toLowerCase())).filter((filter) => props.fliterOn ? filter.duration < 40 : filter.duration > 0).map((item) => {
            return (<li><MoviesCard item={item} trailerLink={item.trailerLink} image={`${!props.save ? item.image.url : item.image}`} name={item.nameRU} duration={item.duration} handleCardClick={props.handleCardClick} save={props.save} checkSave={item.save} /></li>)
        });

        if (numView === numAll.length || numAll.length < numView) {
            setOnVision(false);
        } else {
            setOnVision(true);
        }
    }, [props.request, moreMovies])

    const [find, setFind] = useState(true);

    function handleMoreButtonClick() {
        setMoreMovies(moreMovies + 4);
    }

    useEffect(() => {
        if (!props.save) {
            if (cards.filter((filter) => filter.description.includes(props.request.toLowerCase()).length === 0 || filter.nameRU.includes(props.request.toLowerCase()))?.length === 0) {
                setFind(false)
            } else {
                setFind(true);
            }
        }
    }, [props.cards, props.request])

    return (
        <>
            <section className='movies'>
                <ul className='movies__container' >
                    {cards.filter((filter) => filter.description.includes(props.request.toLowerCase()) || filter.nameRU.includes(props.request.toLowerCase())).filter((filter) => props.fliterOn ? filter.duration < 40 : filter.duration > 0).slice(0, moreMovies).map((item) => {
                        return (<li id='container'><MoviesCard filterActive={props.fliterOn} lol={props.fliterOn} item={item} trailerLink={item.trailerLink} image={`${!props.save ? item.image.url : item.image}`} name={item.nameRU} duration={item.duration} handleCardClick={props.handleCardClick} save={props.save} checkSave={item.save} /></li>)
                    })}
                </ul>
                {props.load && <Preloader />}
                {!find &&
                    <><img className='movies__img' src={crySmail} />
                        <p className='movies__text'>Ничего не найдено...</p>
                    </>}
                {onVision && <div className='movies__more'>
                    <button className='movies__button' onClick={handleMoreButtonClick}>Ещё</button>
                </div>}
            </section>
        </>
    );
}

export default MoviesCardList;