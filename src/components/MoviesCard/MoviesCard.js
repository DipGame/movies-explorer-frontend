import './MoviesCard.css';
import { useState, useEffect } from 'react';

function MoviesCard(props) {

    const [hour, setHour] = useState(0);
    const [min, setMin] = useState(0);

    useEffect(() => {
        if (props.duration > 59) {
            setHour(Math.floor(props.duration / 60));
            const hourInMin = Math.floor(props.duration / 60) * 60;
            setMin(props.duration - hourInMin);
        } else {
            setMin(props.duration);
        }
    }, [props.lol])

    function handleGoTrailerLink() {
        window.open(
            props.trailerLink,
            '_blank'
        );
    }

    return (
        <>
            <div className='movie'>
                <img className='movie__img' src={`${!props.save ? `${'https://api.nomoreparties.co/' + props.image}` : props.image}`} alt={'Сдесь должна была быть картинка'} onClick={handleGoTrailerLink} />
                <div className='movie__container'>
                    <h2 className='movie__title'>
                        {props.name}
                    </h2>
                    <button className={!props.save ? `${!props.checkSave ? 'movie__save' : 'movie__save movie__save_active'}` : 'movie__save movie__save_delete'} alt={'Кнопка сохранения'} id={JSON.stringify(props.item)} onClick={props.handleCardClick} ></button>
                </div>
                <p className='movie__time'>
                    {/* {hour}ч{min}м */}
                    {props.filterActive ? `0ч${props.duration}м` : `${hour}ч${min}м`}
                </p>
            </div>
        </>
    );
}

export default MoviesCard;