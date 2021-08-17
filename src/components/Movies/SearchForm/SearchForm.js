import './SearchForm.css';

function SearchForm() {
  return (
    <div className="SearchForm">
      <form className='SearchForm__form'>
        <input className='SearchForm__input' placeholder='Фильм'></input>
        <button className='SearchForm__button'></button>
      </form>
      <div className='SearchForm__switch'>
        <p className='SearchForm__text-switch'>Короткометражки</p>
        <button className='SearchForm__button-switch'></button>
      </div>
    </div>
  );
}

export default SearchForm;

// SearchForm — форма поиска, куда пользователь будет вводить запрос.
// Обратите внимание на фильтр с чекбоксом «Только короткометражки».
// Для него можно воспользоваться отдельным управляемым компонентом FilterCheckbox.