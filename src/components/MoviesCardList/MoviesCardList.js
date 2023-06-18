import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';
import { useState, useEffect } from 'react';

function MoviesCardList(props) {

    const cards = props.cards;

    const [moreMovies, setMoreMovies] = useState(8);

    function handleMoreButtonClick() {
        setMoreMovies(moreMovies + 4);
    }

    return (
        <>
            <section className='movies'>
                <ul className='movies__container'>
                    {cards.filter((filter) => props.filterOn ? filter.duration < 41 : filter.duration > 0).slice(0, moreMovies).map((item) => {
                        return (<li><MoviesCard item={item} image={`${!props.save ? item.image.url : item.image}`} name={item.nameRU} duration={item.duration} handleCardClick={props.handleCardClick} save={props.save} checkSave={item.save} /></li>)
                    })}
                </ul>
                <div className='movies__more'>
                    <button className='movies__button' onClick={handleMoreButtonClick}>Ещё</button>
                </div>
            </section>
        </>
    );
}

export default MoviesCardList;