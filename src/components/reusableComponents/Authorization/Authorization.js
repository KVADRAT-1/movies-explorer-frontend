import './Authorization.css';
import { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import icon from '../../../images/reusableImages/logo.svg';
import { useState } from 'react';

function Authorization({registerUser, loginUser}) {
    const { pathname } = useLocation();

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [nameDirty, setNameDirty] = useState(false);
    const [emailDirty, setEmailDirty] = useState(false);
    const [passwordDirty, setPasswordDirty] = useState(false);

    const [nameError, setNameError] = useState('Введите ваше имя');
    const [emailError, setEmailError] = useState('Введите ваш емейл');
    const [passwordError, setPasswordError] = useState('Введите ваш пароль');

    const [formValid, setFormValid] = useState(false);

    useEffect(() => {
        const button = document.querySelector('.Authorization__button')
        if (pathname === '/sign-up') {
            if (nameError || emailError || passwordError) {
                setFormValid(false)
                button.style = 'background: #F8F8F8; color: #C2C2C2; cursor: default;'
            } else {
                setFormValid(true)
                button.style = 'background: #FF6838; color: wight; cursor: pointer'
            }
        } else {
            if (emailError || passwordError) {
                setFormValid(false)
                button.style = 'background: #F8F8F8; color: #C2C2C2; cursor: default'
            } else {
                setFormValid(true)
                button.style = 'background: #FF6838; color: wight; cursor: pointer'
            }
        }
    }, [nameError, emailError, passwordError, pathname])

    function nameHandler(e) {
        setName(e.target.value)
        const re = /^[A-zА-я -]+$/;
        if (!re.test(String(e.target.value).toLowerCase()) && e.target.value.length > 0) {
            setNameError('Поле name должно содержить только латиницу, кириллицу, пробел или дефис.');
        } else if (2 > e.target.value.length || 30 < e.target.value.length) {
            if (e.target.value.length === 0) {
                setNameError('Введите ваше имя');
            } else if (e.target.value.length < 2) {
                setNameError('Используйте не менее 2 символов');
            } else if (e.target.value.length > 30) {
                setNameError('Используйте менее 30 символов');
            }
        } else {
            setNameError('');
        }
    }

    function emialHandler(e) {
        setEmail(e.target.value)
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (!re.test(String(e.target.value).toLowerCase())) {
            if (e.target.value.length === 0) {
                setEmailError('Введите ваш емейл');
            } else {
                setEmailError('Некорректный емейл');
            }
        } else {
            setEmailError('');
        }
    }

    function passwordHandler(e) {
        setPassword(e.target.value)
        if (e.target.value.length < 8 || e.target.value.length >30) {
            if (e.target.value.length === 0) {
                setPasswordError('Введите ваш пароль');
            } else if (e.target.value.length < 8) {
                setPasswordError('Используйте не менее 8 символов');
            } else if (e.target.value.length > 30) {
                setPasswordError('Используйте менее 30 символов');
            }
        } else {
            setPasswordError('');
        }
    }

    function blurHandLer(e) {
        if (e.target.name === 'name') { setNameDirty(true) }
        if (e.target.name === 'email') { setEmailDirty(true) }
        if (e.target.name === 'password') { setPasswordDirty(true) }
    }

    function onSubmit(e) {
        e.preventDefault();
        if (pathname === '/sign-up') {
            registerUser({name: name, email: email, password: password});
        } else {
            loginUser({email: email, password: password})
        }
    }

  return (
    <div className='Authorization'>
        <img className='Authorization__icon' src={icon} alt={'icon'}/>
        <h2 className='Authorization__title'>{pathname === '/sign-in' ? 'Рады видеть!' : 'Добро пожаловать!'}</h2>
        <form className='Authorization__form' onSubmit={onSubmit}>
            {pathname === '/sign-up' && 
                <>
                    <p className='Authorization__text-input'>Имя</p>
                    <div className='Authorization__section-input'>
                        <input className='Authorization__input' type='text' name='name' required onChange={nameHandler} onBlur={blurHandLer} value={name}></input>
                        {(nameDirty && nameError) && <span className='Authorization__input-error'>{nameError}</span>}
                    </div>
                </>
            }
            <p className='Authorization__text-input'>E-mail</p>
            <div className='Authorization__section-input'>
                <input className='Authorization__input' type='mail' name='email' required onChange={emialHandler} onBlur={blurHandLer} value={email}></input>
                {(emailDirty && emailError) && <span className='Authorization__input-error'>{emailError}</span>}
            </div>
            <p className='Authorization__text-input'>Пароль</p>
            <div className='Authorization__section-input'>
                <input className='Authorization__input' type='password' name='password' required onChange={passwordHandler} onBlur={blurHandLer} value={password}></input>
                {(passwordDirty && passwordError) && <span className='Authorization__input-error'>{passwordError}</span>}
            </div>
            <button disabled={!formValid} className='Authorization__button'>{pathname === '/sign-in' ? 'Войти' : 'Зарегистрироваться'}</button>
        </form>
        <p className='Authorization__text-link'>{pathname === '/sign-in' ? 'Ещё не зарегистрированы?' : 'Уже зарегистрированы?'}<Link className='Authorization__link' to={pathname === '/sign-in' ? '/sign-up' : '/sign-in'}>{pathname === '/sign-in' ? 'Регистрация' : 'Войти'}</Link></p>
    </div>
  );
}

export default Authorization;