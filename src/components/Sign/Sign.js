import './Sign.css';

function Sign(props) {    

    return (
        <section className='sign'>
            <h2 className='sign__title'>
                {props.title}
            </h2>
            <div className='sign__container' style={{ display: `${!props.sign ? 'none' : 'block'}` }}>
                <h3 className='sign__name'>
                    Имя
                </h3>
                <input className='sign__input' value={'Константин'}></input>
            </div>
            <div className='sign__container'>
                <h3 className='sign__name'>
                    E-mail
                </h3>
                <input className='sign__input' value={'kostya1.6@yandex.ru'}></input>
            </div>
            <div className='sign__container'>
                <h3 className='sign__name'>
                    Пароль
                </h3>
                <input className='sign__input' type='password' value={'mlkjfgdlfg'}></input>
            </div>
            <p className='sign__err'>
                Что-то пошло не так...
            </p>
            <button className='sign__button'>
                {props.button}
            </button>
            <p className='sign__question'>
                {props.question}
                <a className='sign__link' onClick={props.signLink}>
                    {props.link}
                </a>
            </p>
        </section>
    )
}

export default Sign;