import './SearchForm.css';
import icon from '../../../images/SearchForm/SearchForm__icon-search.svg';

function SearchForm() {

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
    <div className="SearchForm">
      <form className='SearchForm__form'>
        <img className='SearchForm__icon-search' src={icon} alt={'icon'}/>
        <input className='SearchForm__input' placeholder='Фильм' onClick={clickInput}></input>
        <button className='SearchForm__button-find' >Найти</button>
      </form>
    </div>
  );
}

export default SearchForm;

// SearchForm — форма поиска, куда пользователь будет вводить запрос.
// Обратите внимание на фильтр с чекбоксом «Только короткометражки».
// Для него можно воспользоваться отдельным управляемым компонентом FilterCheckbox.