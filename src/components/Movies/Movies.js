import './Movies.css';

import { useState } from 'react'

import SearchForm from '../reusableComponents/SearchForm/SearchForm.js';
import FilterCheckbox from '../reusableComponents/FilterCheckbox/FilterCheckbox.js';
import Preloader from '../reusableComponents/Preloader/Preloader.js';
import MoviesCardList from '../reusableComponents/MoviesCardList/MoviesCardList.js';

function Movies({moviesAll, movies, preloaderMovies, setPreloaderMovies, submitMovies, setSubmitMovies, moviesRequest, addSaveMovies, saveMoviesId, delMovie, setFilterMovies, filterMovies, inputTextMovies, setInputTextMovies, maxLengthListMovies, setMaxLengthListMovies}) {
  const [submit, setSubmit] = useState(false);
  
  function onSubmit(e) {
    e.preventDefault();
    setSubmit(true)
    if(inputTextMovies.length > 0 && moviesAll.length === 0 && !submit) {
      moviesRequest()
      setPreloaderMovies(true)
    } else if (inputTextMovies.length > 0) {
      setSubmitMovies(!submitMovies)
    }
  }
  
  return (
    <div className="Movies">
      <SearchForm
        onSubmit={onSubmit}
        submit={submit}
        setInputText={setInputTextMovies}
        inputText={inputTextMovies}
      />
      <FilterCheckbox 
        setFilterMovies={setFilterMovies}
        filterMovies={filterMovies}
      />
      {(submit && movies.length === 0 && !preloaderMovies) && <p>«Ничего не найдено»</p>}
      {movies.length !== 0 && <MoviesCardList
      addSaveMovies={addSaveMovies} 
      movies={movies}
      saveMoviesId={saveMoviesId}
      delMovie={delMovie}
      maxLengthListMovies={maxLengthListMovies}
      setMaxLengthListMovies={setMaxLengthListMovies}
      />}
      {(preloaderMovies) && <Preloader/>}
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
