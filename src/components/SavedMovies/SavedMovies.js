import './SavedMovies.css';

import { useState } from 'react'

import SearchForm from '../reusableComponents/SearchForm/SearchForm.js';
import FilterCheckbox from '../reusableComponents/FilterCheckbox/FilterCheckbox.js';
import MoviesCardList from '../reusableComponents/MoviesCardList/MoviesCardList.js';

function SavedMovies({saveMovies, delMovie, switchFilterSaveMovies, filterSaveMovies, inputTextSaveMovies, setInputTextSaveMovies, maxLengthListSaveMovies, setMaxLengthListSaveMovies}) {
  const [submit, setSubmit] = useState(false);
  
  function onSubmit(e) {
    e.preventDefault();
    setSubmit(true)
  }

  return (
    <div className="SavedMovies">
      <SearchForm 
        onSubmit={onSubmit}
        submit={submit}
        setInputText={setInputTextSaveMovies}
        inputText={inputTextSaveMovies}
      />
      <FilterCheckbox 
        switchFilter={switchFilterSaveMovies}
        filter={filterSaveMovies}
      />
      {saveMovies.length !== 0 && <MoviesCardList 
      movies={saveMovies}
      delMovie={delMovie}
      filter={filterSaveMovies}
      inputText={inputTextSaveMovies}
      maxLengthListMovies={maxLengthListSaveMovies}
      setMaxLengthListMovies={setMaxLengthListSaveMovies}
      />}
    </div>
  );
}

export default SavedMovies;

// SavedMovies — компонент страницы с сохранёнными карточками фильмов. Пригодятся эти компоненты:
//      1. MoviesCardList — компонент, который управляет отрисовкой карточек фильмов на страницу и их количеством.
//      2. MoviesCard — компонент одной карточки фильма.