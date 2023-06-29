import './Profile.css';
import React from 'react';
import SuccessTrue from '../SuccessTrue/SuccessTrue.js'
import SuccessFalse from '../SuccessFalse/SuccessFalse.js'
import Api from '../../utils/Api'
import { useState, useEffect } from 'react';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';

function Profile(props) {

    const currentUser = React.useContext(CurrentUserContext);

    const [profileClass, setProfileClass] = useState('profile__text');

    const [editText, setEditText] = useState('Редактировать');

    const [activeTrue, setActiveTrue] = useState(false);

    const [activeFalse, setActiveFalse] = useState(false);

    const [editClass, setEditClass] = useState('profile__edit');

    const configApi = {
        url: "https://addmymovies.nomoredomains.monster/api",
        headers: {
            'Authorization': `Bearer ${localStorage.getItem('jwt')}`,
            'Content-Type': 'application/json'
        },
    }

    const api = new Api(configApi);

    function redactProfile() {
        const profileName = document.querySelector('#name');
        const profileEmail = document.querySelector('#email');
        if (profileClass === 'profile__text profile__text_active') {
            api.setUserInfo({
                name: profileName.value,
                email: profileEmail.value,
            })
                .then((res) => {
                    setActiveTrue(true);
                    setTimeout(() => {
                        setActiveTrue(false);
                    }, 1500);
                    setProfileClass('profile__text');
                    setEditText('Редактировать')
                })
                .catch((err) => {
                    setActiveFalse(true);
                    setTimeout(() => {
                        setActiveFalse(false);
                    }, 1500);
                    console.log(err);
                })
        } else {
            setEditText('Применить изменения')
            setEditClass('profile__edit profile__edit_disabled')
            setProfileClass('profile__text profile__text_active')
        }
    }

    function checkValid() {
        const profileName = document.querySelector('#name');
        const profileEmail = document.querySelector('#email');
        if (profileName.value !== currentUser.name || profileEmail.value !== currentUser.email) {
            setEditClass('profile__edit')
        } else {
            setEditClass('profile__edit profile__edit_disabled')
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
                    <input id='name' className={profileClass} defaultValue={currentUser.name} onChange={checkValid}></input>
                </div>
                <div className='profile__container'>
                    <h2 className='profile__name'>
                        E-mail
                    </h2>
                    <input id='email' className={profileClass} defaultValue={currentUser.email} onChange={checkValid}></input>
                </div>
                <p className={editClass} onClick={redactProfile}>
                    {editText}
                </p>
                <p className='profile__exit' onClick={props.leaveProfile}>
                    Выйти из аккаунта
                </p>
            </section>
            <SuccessTrue isActive={activeTrue} />
            <SuccessFalse isActive={activeFalse} />
        </>
    );
}

export default Profile;