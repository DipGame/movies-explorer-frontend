import './SearchForm.css';
import filterLogo from '../../images/smalltumb.png'

function SearchForm() {

    return (
        <section className='search'>
            <form className="search__form">
                <input className='search__input' type='text' placeholder='Фильм' />
                <button className='search__button'>Поиск</button>
            </form>
            <div className='search__container'>
                <img className='search__filter' src={filterLogo} alt={'Сдесь должна была быть картинка'}/>
                <p className='search__title'>
                    Короткометражки
                </p>
            </div>
        </section>
    );
}

export default SearchForm;