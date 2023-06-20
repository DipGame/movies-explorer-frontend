import './SearchForm.css';
import { useState, useEffect } from 'react';
import filterLogoOff from '../../images/smalltumboff.png'
import filterLogoOn from '../../images/smalltumb.png'

function SearchForm(props) {

    const inputFind = document.querySelector('.search__input');

    const [errorInput, setErrorInput] = useState(false);

    const handleClickFindButton = (event) => {
        event.preventDefault();
        if (inputFind.value.length > 1) {
            setErrorInput(false);
            props.handleVisionMovies();
        } else {
            setErrorInput(true);
        }
    }

    const handleLangChange = () => {
        let text = inputFind.value;
        props.onSelectInput(text);
    }

    return (
        <section className='search'>
            <form className="search__form">
                <input className='search__input' type='text' placeholder='Фильм' required minLength={2} onChange={handleLangChange} />
                <button type='submit' className='search__button' onClick={handleClickFindButton}>Поиск</button>
                <p className='sign__err search__err'>{errorInput ? 'Нужно ввести ключевое слово' : ''}</p>
            </form>
            <div className='search__container'>
                <img className='search__filter' onClick={props.handleClickFilter} src={`${props.filterActive ? filterLogoOn : filterLogoOff}`} alt={'Сдесь должна была быть картинка'} />
                <p className='search__title'>
                    Короткометражки
                </p>
            </div>
        </section>
    );
}

export default SearchForm;