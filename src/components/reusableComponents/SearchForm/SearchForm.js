import './SearchForm.css';

import { useState } from 'react'

import icon from '../../../images/SearchForm/SearchForm__icon-search.svg';

function SearchForm({onSubmit, submit, setInputText, inputText}) {
  const [inputDirty, setInputDirty] = useState(false)

  function blurHandler() {
    setInputDirty(true);
  }

  document.addEventListener('click' , (e) => {
    const searchFormInput = document.querySelector('.SearchForm__input');
    if (e.target.className === 'SearchForm__input') { return };
    if (!searchFormInput) { return }
    searchFormInput.placeholder = 'Фильм';
  });

  function clickInput(e) {
    e.target.placeholder = '';
  };


  return (
    <div className="SearchForm" onSubmit={onSubmit}>
      <form className='SearchForm__form'>
        <img className='SearchForm__icon-search' src={icon} alt={'icon'}/>
        <input className='SearchForm__input' placeholder='Фильм' onClick={clickInput} onBlur={blurHandler} onChange={e => {setInputText(e.target.value)}}></input>
        <button className='SearchForm__button-find' type='submit'>Найти</button>
      </form>
      {((inputDirty && inputText.length === 0) || (submit === true && inputText.length === 0)) && <div style={{color: 'red'}}>«Нужно ввести ключевое слово»</div>}
    </div>
  );
}

export default SearchForm;

// SearchForm — форма поиска, куда пользователь будет вводить запрос.
// Обратите внимание на фильтр с чекбоксом «Только короткометражки».
// Для него можно воспользоваться отдельным управляемым компонентом FilterCheckbox.