import './SearchForm.css';
import { useState, useEffect } from 'react';
import filterLogoOff from '../../images/smalltumboff.png'
import filterLogoOn from '../../images/smalltumb.png'

function SearchForm(props) {

    return (
        <section className='search'>
            <form className="search__form">
                <input className='search__input' type='text' placeholder='Фильм' required minLength={2} />
                <button className='search__button'>Поиск</button>
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