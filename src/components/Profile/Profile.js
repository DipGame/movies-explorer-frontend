import './Profile.css';

function Profile() {

    return (
        <>
            <section className='profile'>
                <p className='profile__title'>
                    Привет, Константин!
                </p>
                <div className='profile__container'>
                    <h2 className='profile__name'>
                        Имя
                    </h2>
                    <p className='profile__text'>
                        Константин
                    </p>
                </div>
                <div className='profile__container'>
                    <h2 className='profile__name'>
                        E-mail
                    </h2>
                    <p className='profile__text'>
                        kostya1.6@yandex.ru
                    </p>
                </div>
                <p className='profile__edit'>
                    Редактировать
                </p>
                <p className='profile__exit'>
                    Выйти из аккаунта
                </p>
            </section>
        </>
    );
}

export default Profile;