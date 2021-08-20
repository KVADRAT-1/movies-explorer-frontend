import './SearchForm.css';
import FilterCheckbox from './FilterCheckbox/FilterCheckbox.js';

function SearchForm() {
  return (
    <div className="SearchForm">
      <form className='SearchForm__form'>
        <input className='SearchForm__input' placeholder='Фильм'></input>
        <button className='SearchForm__button'></button>
      </form>
      <FilterCheckbox />
    </div>
  );
}

export default SearchForm;

// SearchForm — форма поиска, куда пользователь будет вводить запрос.
// Обратите внимание на фильтр с чекбоксом «Только короткометражки».
// Для него можно воспользоваться отдельным управляемым компонентом FilterCheckbox.