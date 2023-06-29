import './Sign.css';
import SuccessTrue from '../SuccessTrue/SuccessTrue.js'
import SuccessFalse from '../SuccessFalse/SuccessFalse.js'
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import * as Api from '../../utils/MainApi';
import logo from '../../images/logo.svg'

function Sign({ handleLogin, ...props }) {

    const navigate = useNavigate();

    function goHome() {
        navigate('/', { replace: true });
    }

    const [isButton, setIsButton] = useState('sign__button sign__button_disabled');

    const [nameDirty, setNameDirty] = useState(false);
    const [emailDirty, setEmailDirty] = useState(false);
    const [passwordDirty, setPasswordDirty] = useState(false);
    const [activeTrue, setActiveTrue] = useState(false);
    const [activeFalse, setActiveFalse] = useState(false);

    const [catchText, setCatchText] = useState('');

    const [formValue, setFormValue] = useState({
        name: '',
        email: '',
        password: '',
    })

    function goSign() {
        if (props.sign) {
            setFormValue({ name: '', email: '', password: '' });
            setNameDirty(false);
            setEmailDirty(false);
            setPasswordDirty(false);
            setCatchText('');
            navigate('/signin', { replace: true });
        } else {
            setFormValue({ name: '', email: '', password: '' });
            setNameDirty(false);
            setEmailDirty(false);
            setPasswordDirty(false);
            setCatchText('');
            navigate('/signup', { replace: true });
        }
    }

    function restrictionName() {
        const signInputName = document.querySelector('#signInputName');
        signInputName.value = signInputName.value.replace(/[0-9]/gu, '');
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValue({
            ...formValue,
            [name]: value
        });
    }

    useEffect(() => {
        if (!props.sign) {
            if (checkValidEmail() && checkValidPassword()) {
                setIsButton('sign__button');
            } else {
                setIsButton('sign__button sign__button_disabled');
            }
        } else {
            if (checkValidName() && checkValidEmail() && checkValidPassword()) {
                setIsButton('sign__button');
            } else {
                setIsButton('sign__button sign__button_disabled');
            }
        }
    }, [formValue])

    function checkValidName() {
        if (formValue.name.length > 1) {
            return true
        } else {
            return false
        }
    }

    function checkValidEmail() {
        const regexEmail = '[a-z0-9]+@[a-z]+\.[a-z]{2,3}';
        if (formValue.email.match(regexEmail)) {
            return true
        } else {
            return false
        }
    }

    function checkValidPassword() {
        if (formValue.password.length > 7) {
            return true
        } else {
            return false
        }
    }

    function blurHandler(e) {
        switch (e.target.name) {
            case 'name':
                setNameDirty(true)
                break;
            case 'email':
                setEmailDirty(true)
                break;
            case 'password':
                setPasswordDirty(true)
                break;
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (props.sign) {
            Api.register(formValue.name, formValue.email, formValue.password)
                .then((data) => {
                    Api.login(formValue.email, formValue.password)
                        .then((data) => {
                            if (data.token) {
                                setActiveTrue(true);
                                setTimeout(() => {
                                    setActiveTrue(false);
                                }, 1500);
                                setFormValue({ name: '', email: '', password: '' });
                                navigate('/movies', { replace: true });
                                localStorage.setItem('jwt', data.token);
                                handleLogin();
                                return data;
                            }
                        })
                        .catch((err) => {
                            setActiveFalse(true);
                            setTimeout(() => {
                                setActiveFalse(false);
                            }, 1500);
                            setCatchText('Что то пошло не так...');
                            console.log(err)
                        })
                })
                .catch((err) => {
                    setActiveFalse(true);
                    setTimeout(() => {
                        setActiveFalse(false);
                    }, 1500);
                    setCatchText('Что то пошло не так...');
                    console.log(err)
                })
        } else {
            Api.login(formValue.email, formValue.password)
                .then((data) => {
                    if (data.token) {
                        setActiveTrue(true);
                        setTimeout(() => {
                            setActiveTrue(false);
                        }, 1500);
                        setFormValue({ name: '', email: '', password: '' });
                        navigate('/movies', { replace: true });
                        localStorage.setItem('jwt', data.token);
                        handleLogin();
                        return data;
                    }
                })
                .catch((err) => {
                    setActiveFalse(true);
                    setTimeout(() => {
                        setActiveFalse(false);
                    }, 1500);
                    setCatchText('Что то пошло не так...');
                    console.log(err)
                })
        }
    }

    return (
        <>
            <form className='sign' onSubmit={handleSubmit}>
                <div className='sign__box'>
                    <img className='sign__img' src={logo} alt={'Лого'} onClick={goHome} />
                </div>
                <h2 className='sign__title'>
                    {props.title}
                </h2>
                {(props.sign) && <div className='sign__container'>
                    <h3 className='sign__name'>
                        Имя
                    </h3>
                    <input className='sign__input' onBlur={e => blurHandler(e)} value={formValue.name} type='text' id='signInputName' name='name' onInput={restrictionName} onChange={handleChange} required pattern=".{2,}" maxLength={50}></input>
                    <p className='sign__err'>{`${(nameDirty === true && checkValidName() === false) ? 'Минимальное кол-во символов - 2' : ''}`}</p>
                </div>
                }
                <div className='sign__container'>
                    <h3 className='sign__name'>
                        E-mail
                    </h3>
                    <input className='sign__input' onBlur={e => blurHandler(e)} value={formValue.email} type='email' name='email' onChange={handleChange} required minLength={2}></input>
                    <p className='sign__err'>{`${(emailDirty === true && checkValidEmail() === false) ? 'Пожалуйста, введите корректный Email' : ''}`}</p>
                </div>
                <div className='sign__container'>
                    <h3 className='sign__name'>
                        Пароль
                    </h3>
                    <input className='sign__input' onBlur={e => blurHandler(e)} value={formValue.password} type='password' name='password' onChange={handleChange} required minLength={8}></input>
                    <p className='sign__err'>{`${(passwordDirty === true && checkValidPassword() === false) ? 'Минимальное кол-во символов - 8' : ''}`}</p>
                </div>
                <div className='sign__case'>
                    <p className='sign__catch'>
                        {catchText}
                    </p>
                    <button type='submit' className={isButton}>
                        {props.button}
                    </button>
                </div>
                <p className='sign__question'>
                    {props.question}
                    <a className='sign__link' onClick={goSign}>
                        {props.link}
                    </a>
                </p>
            </form>
            <SuccessTrue isActive={activeTrue} />
            <SuccessFalse isActive={activeFalse} />
        </>
    )
}

export default Sign;