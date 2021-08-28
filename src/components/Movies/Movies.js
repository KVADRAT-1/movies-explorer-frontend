import './Movies.css';

import { useState } from 'react'

import SearchForm from '../reusableComponents/SearchForm/SearchForm.js';
import FilterCheckbox from '../reusableComponents/FilterCheckbox/FilterCheckbox.js';
import Preloader from './Preloader/Preloader.js';
import MoviesCardList from '../reusableComponents/MoviesCardList/MoviesCardList.js';


function Movies({movies}) {
  const [input, setInput] = useState('');
  const [submit, setSubmit] = useState(false);

  function onChange(e) {
    const { value }= e.target
    setInput(value)
  }
  console.log(input)
  
  function onSubmit(e) {
    e.preventDefault();
    setSubmit(true)
  }
  
  return (
    <div className="Movies">
      <SearchForm 
        onChange={onChange}
        onSubmit={onSubmit}
      />
      <FilterCheckbox />
      {submit && <MoviesCardList 
      movies={movies}
      />}
      <Preloader />
    </div>
  );
}

export default Movies;

// Movies — компонент страницы с поиском по фильмам. В нём компоненты:
//      1. SearchForm — форма поиска, куда пользователь будет вводить запрос. 
//         Обратите внимание на фильтр с чекбоксом «Только короткометражки». 
//         Для него можно воспользоваться отдельным управляемым компонентом FilterCheckbox.
//      2. Preloader — отвечает за работу прелоадера.
//      3. MoviesCardList — компонент, который управляет отрисовкой карточек фильмов на страницу и их количеством.
//      4. MoviesCard — компонент одной карточки фильма.
