import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';

function MoviesCardList() {

    return (
        <>
            <section className='movies'>
                <div className='movies__container'>
                    <MoviesCard />
                    <MoviesCard />
                    <MoviesCard />
                    <MoviesCard />
                    <MoviesCard />
                    <MoviesCard />
                    <MoviesCard />
                    <MoviesCard />
                </div>
                <div className='movies__more'>
                    <button className='movies__button'>Ещё</button>
                </div>
            </section>
        </>
    );
}

export default MoviesCardList;