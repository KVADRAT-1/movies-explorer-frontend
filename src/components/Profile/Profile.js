import './Profile.css';

import { useState, useEffect } from 'react';

function Profile({userData, logOutOfProfile, changeProfile}) {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')

  const [nameDirty, setNameDirty] = useState(false);
  const [emailDirty, setEmailDirty] = useState(false);

  const [nameError, setNameError] = useState('Введите ваше имя');
  const [emailError, setEmailError] = useState('Введите ваш емейл');

  const [formValid, setFormValid] = useState(false);
  const [edit, setEdit] = useState(false);

  useEffect(() => {
    const button = document.querySelector('.Profile__button-form')
    if (button === null) { return }
    if (nameError || emailError) {
      setFormValid(false)
      button.style = 'background: #F8F8F8; color: #C2C2C2; cursor: default;'
    } else {
      setFormValid(true)
      button.style = 'background: #FF6838; color: wight; cursor: pointer;'
    }
  }, [nameError, emailError, edit])

  useEffect(() => {
    nameHandler(userData.name)
    emailHandler(userData.email)
  }, [userData])

  function nameHandler(name) {
    setName(name)
    const re = /^[A-zА-я -]+$/;
    if (!re.test(String(name).toLowerCase()) && name.length > 0) {
        setNameError('Поле name должно содержить только латиницу, кириллицу, пробел или дефис.');
    } else if (2 > name.length || 30 < name.length) {
        if (name.length === 0) {
            setNameError('Введите ваше имя');
        } else if (name.length < 2) {
            setNameError('Используйте не менее 2 символов');
        } else if (name.length > 30) {
            setNameError('Используйте менее 30 символов');
        }
    } else {
        setNameError('');
    }
  }

  function emailHandler(email) {
      setEmail(email)
      const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      if (!re.test(String(email).toLowerCase())) {
          if (email.length === 0) {
              setEmailError('Введите ваш емейл');
          } else {
              setEmailError('Некорректный емейл');
          }
      } else {
          setEmailError('');
      }
  }

  function onSubmit(e) {
    e.preventDefault();
    changeProfile({name: name, email: email})
    setEdit(!edit)
  }

  function blurHandLer(e) {
    if (e.target.name === 'name') { setNameDirty(true) }
    if (e.target.name === 'email') { setEmailDirty(true) }
  }

  function switchEdit() {
    setEdit(!edit)
  }

  return (
    <div className='Profile'>
      <h2 className='Profile__title'>{`Привет, ${userData.name}!`}</h2>
      <form className='Profile__form' onSubmit={onSubmit}>
        <div className='Profile__user-data'>
          <p className='Profile__text'>Имя</p>
          <input className='Profile__input' type='text' name='name' required onChange={e => {nameHandler(e.target.value)}} onBlur={blurHandLer} value={name} readOnly={!edit}></input>
          {(nameDirty && nameError) && <span className='Profile__input-error'>{nameError}</span>}
        </div>
        <div className='Profile__user-data'>
          <p className='Profile__text'>Почта</p>
          <input className='Profile__input'type='mail' name='email' required onChange={e => {emailHandler(e.target.value)}} onBlur={blurHandLer} value={email} readOnly={!edit}></input>
          {(emailDirty && emailError) && <span className='Profile__input-error'>{emailError}</span>}
        </div>
        {edit && <button disabled={!formValid} className='Profile__button-form'>Сохранить</button>}
      </form>
      {!edit && <div className='Profile__buttons'>
        <button className='Profile__button-edit' onClick={switchEdit}>Редактировать</button>
        <button className='Profile__button-output' onClick={logOutOfProfile}>Выйти из аккаунта</button>
      </div>}
    </div>
  );
}

export default Profile;

// Profile — компонент страницы изменения профиля.
