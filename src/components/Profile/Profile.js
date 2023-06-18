import './Profile.css';
import React from 'react';
import Api from '../../utils/Api'
import { useState, useEffect } from 'react';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';

function Profile(props) {

    const currentUser = React.useContext(CurrentUserContext);

    const [profileClass, setProfileClass] = useState('profile__text');

    const [editText, setEditText] = useState('Редактировать');

    const configApi = {
        url: "https://addmymovies.nomoredomains.monster/api",
        headers: {
            'Authorization': `Bearer ${localStorage.getItem('jwt')}`,
            'Content-Type': 'application/json'
        },
    }

    const api = new Api(configApi);

    // useEffect(() => {
    //     console.log(value);
    // }, [currentUser])

    function redactProfile() {
        const profileName = document.querySelector('#name');
        const profileEmail = document.querySelector('#email');
        if (profileClass === 'profile__text profile__text_active') {
            // console.log(profileName.value);
            api.setUserInfo({
                name: profileName.value,
                email: profileEmail.value,
            })
                .then((res) => {
                    console.log(res);
                    setProfileClass('profile__text');
                    setEditText('Редактировать')
                })
                .catch((err) => {
                    console.log(err);
                })
        } else {
            setEditText('Применить изменения')
            setProfileClass('profile__text profile__text_active')
        }
    }

    return (
        <>
            <section className='profile'>
                <p className='profile__title'>
                    Привет, {currentUser.name}!
                </p>
                <div className='profile__container'>
                    <h2 className='profile__name'>
                        Имя
                    </h2>
                    <input id='name' className={profileClass} defaultValue={currentUser.name}></input>
                </div>
                <div className='profile__container'>
                    <h2 className='profile__name'>
                        E-mail
                    </h2>
                    <input id='email' className={profileClass} defaultValue={currentUser.email}></input>
                </div>
                <p className='profile__edit' onClick={redactProfile}>
                    {editText}
                </p>
                <p className='profile__exit' onClick={props.leaveProfile}>
                    Выйти из аккаунта
                </p>
            </section>
        </>
    );
}

export default Profile;