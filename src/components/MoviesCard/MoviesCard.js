import './MoviesCard.css';
import test from '../../images/255095-Sepik.jpg'

function MoviesCard() {

    return (
        <>
            <div className='movie'>
                <img className='movie__img' src={test} alt={'Сдесь должна была быть картинка'}/>
                <div className='movie__container'>
                    <h2 className='movie__title'>
                        Милый леопард
                    </h2>
                    <button className='movie__save' alt={'Кнопка сохранения'}></button>
                </div>
                <p className='movie__time'>
                    1ч42м
                </p>
            </div>
        </>
    );
}

export default MoviesCard;