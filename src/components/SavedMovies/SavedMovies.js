import './SavedMovies.css';

import SearchForm from '../reusableComponents/SearchForm/SearchForm.js';
import MoviesCardList from '../reusableComponents/MoviesCardList/MoviesCardList.js';

function SavedMovies() {
  return (
    <div className="SavedMovies">
      <SearchForm />
      <MoviesCardList />
    </div>
  );
}

export default SavedMovies;

// SavedMovies — компонент страницы с сохранёнными карточками фильмов. Пригодятся эти компоненты:
//      1. MoviesCardList — компонент, который управляет отрисовкой карточек фильмов на страницу и их количеством.
//      2. MoviesCard — компонент одной карточки фильма.