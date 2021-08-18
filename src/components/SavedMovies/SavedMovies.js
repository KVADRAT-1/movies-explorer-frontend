import './SavedMovies.css';


import MoviesCardList from '../MoviesCardList/MoviesCardList.js';

function SavedMovies() {
  return (
    <div className="SavedMovies">
      <MoviesCardList />
    </div>
  );
}

export default SavedMovies;

// SavedMovies — компонент страницы с сохранёнными карточками фильмов. Пригодятся эти компоненты:
//      1. MoviesCardList — компонент, который управляет отрисовкой карточек фильмов на страницу и их количеством.
//      2. MoviesCard — компонент одной карточки фильма.