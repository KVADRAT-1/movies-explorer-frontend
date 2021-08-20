import { useState } from 'react';
import './Profile.css';


function Profile() {
  const [name, setName] = useState('Виталий');
  const [mail, setMail] = useState('pochta@yandex.ru');

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
  	setName(e.target.value);
  }

  function mailChange(e) {
  	setMail(e.target.value);
  }

  return (
    <div className='Profile'>
      <h2 className='Profile__title'>Привет, Виталий!</h2>
      <form className='Profile__form'>
        <div className='Profile__user-data'>
          <p className='Profile__text'>Имя</p>
          <input className='Profile__input' readOnly="readonly" value={name} onChange={nameChange} type='text'></input>
        </div>
        <div className='Profile__user-data'>
          <p className='Profile__text'>Почта</p>
          <input className='Profile__input' readOnly="readonly"  value={mail} onChange={mailChange} type='mail'></input>
        </div>
        <button className='Profile__button-form' type='button' onClick={switchEdit}>Сохранить</button>
      </form>
      <div className='Profile__buttons'>
        <button className='Profile__button-edit' onClick={switchEdit}>Редактировать</button>
        <button className='Profile__button-output'>Выйти из аккаунта</button>
      </div>
    </div>
  );
}

export default Profile;

// Profile — компонент страницы изменения профиля.
