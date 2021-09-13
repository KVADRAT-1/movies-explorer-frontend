import './Profile.css';

import { useState } from 'react';

function Profile({userData, logOutOfProfile, changeProfile}) {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  function switchEdit(e) {
    const profile = document.querySelector('.Profile')
    const buttonForm = profile.querySelector('.Profile__button-form')
    const profileButtons = profile.querySelector('.Profile__buttons')
    const inputAll = profile.querySelectorAll('.Profile__input')

    if (e.target.className === 'Profile__button-edit') {
      buttonForm.style.display = 'block'
      profileButtons.style.display = 'none'
      inputAll.forEach((item) => {
        item.removeAttribute('readOnly')
        item.style.cursor = 'pointer';
      })
    } else {
      buttonForm.style.display = 'none'
      profileButtons.style.display = 'flex'
      inputAll.forEach((item) => {
        item.setAttribute('readOnly', 'readonly')
        item.style.cursor = 'default';
      })
    }
  }

  function nameChange(e) {
    setName(e.target.value)
  }

  function mailChange(e) {
  	setEmail(e.target.value)
  }

  function onSubmit(e) {
    e.preventDefault();
    if (name === '' && email === '') { return }
    changeProfile({name: name === '' ? userData.name : name, email: email === '' ? userData.email : email})
    setName('');
    setEmail('');
  }

  return (
    <div className='Profile'>
      <h2 className='Profile__title'>Привет, Виталий!</h2>
      <form className='Profile__form' onSubmit={onSubmit}>
        <div className='Profile__user-data'>
          <p className='Profile__text'>Имя</p>
          <input className='Profile__input' value={name === '' ? userData.name : name} onChange={nameChange} readOnly="readonly" type='text' minLength='2' maxLength='30' required></input>
        </div>
        <div className='Profile__user-data'>
          <p className='Profile__text'>Почта</p>
          <input className='Profile__input' value={email === '' ? userData.email : email} onChange={mailChange} readOnly="readonly" type='mail' required></input>
        </div>
        <button className='Profile__button-form' onClick={switchEdit}>Сохранить</button>
      </form>
      <div className='Profile__buttons'>
        <button className='Profile__button-edit' onClick={switchEdit}>Редактировать</button>
        <button className='Profile__button-output' onClick={logOutOfProfile}>Выйти из аккаунта</button>
      </div>
    </div>
  );
}

export default Profile;

// Profile — компонент страницы изменения профиля.
