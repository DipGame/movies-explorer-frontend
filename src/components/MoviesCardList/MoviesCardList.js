import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';

function MoviesCardList() {

    return (
        <>
            <section className='movies'>
                <ul className='movies__container'>
                    <li><MoviesCard /></li>
                    <li><MoviesCard /></li>
                    <li><MoviesCard /></li>
                    <li><MoviesCard /></li>
                    <li><MoviesCard /></li>
                    <li><MoviesCard /></li>
                    <li><MoviesCard /></li>
                    <li><MoviesCard /></li>
                </ul>
                <div className='movies__more'>
                    <button className='movies__button'>Ещё</button>
                </div>
            </section>
        </>
    );
}

export default MoviesCardList;