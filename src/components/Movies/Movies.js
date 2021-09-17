import './Movies.css';

import { useState } from 'react'

import SearchForm from '../reusableComponents/SearchForm/SearchForm.js';
import FilterCheckbox from '../reusableComponents/FilterCheckbox/FilterCheckbox.js';
import Preloader from '../reusableComponents/Preloader/Preloader.js';
import MoviesCardList from '../reusableComponents/MoviesCardList/MoviesCardList.js';

function Movies({movies, moviesRequest, addSaveMovies, saveMoviesId, delMovie, switchFilterMovies, filterMovies, inputTextMovies, setInputTextMovies, maxLengthListMovies, setMaxLengthListMovies}) {
  const [submit, setSubmit] = useState(false);
  const [preloader, setPreloader] = useState(false)
  
  function onSubmit(e) {
    e.preventDefault();
    setSubmit(true)
    if(inputTextMovies.length > 0) {
      moviesRequest()
      setPreloader(true)
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
        switchFilter={switchFilterMovies}
        filter={filterMovies}
      />
      {(submit && movies.length === 0 && !preloader) && <p>«Ничего не найдено»</p>}
      {/* {false && <p>«Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз»</p>} */}
      {movies.length !== 0 && <MoviesCardList
      addSaveMovies={addSaveMovies} 
      movies={movies}
      saveMoviesId={saveMoviesId}
      delMovie={delMovie}
      filter={filterMovies}
      inputText={inputTextMovies}
      maxLengthListMovies={maxLengthListMovies}
      setMaxLengthListMovies={setMaxLengthListMovies}
      />}
      {(movies.length === 0 && preloader) && <Preloader/>}
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
