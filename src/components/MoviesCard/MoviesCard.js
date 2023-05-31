import './MoviesCard.css';
import test from '../../images/255095-Sepik.jpg'
import save from '../../images/save8d.png'

function MoviesCard() {

    return (
        <>
            <div className='movie'>
                <img className='movie__img' src={test} />
                <div className='movie__container'>
                    <h2 className='movie__title'>
                        Милый леопард
                    </h2>
                    <img className='movie__save' src={save} />
                </div>
                <p className='movie__time'>
                    1ч42м
                </p>
            </div>
        </>
    );
}

export default MoviesCard;