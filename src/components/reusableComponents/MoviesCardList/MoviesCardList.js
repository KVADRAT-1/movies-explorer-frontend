import './MoviesCardList.css';

import { useState } from 'react';

import MoviesCard from './MoviesCard/MoviesCard.js';

function MoviesCardList({movies, addSaveMovies, delMovie, saveMoviesId}) {
  const [moviesMaxLength, setMaxMoviesLength] = useState(12);

  function addMoviesLength() {
    let screenWidth = document.documentElement.clientWidth;
    if (screenWidth >= 1280) {
      setMaxMoviesLength(moviesMaxLength + 3);
    } else if (screenWidth >= 768) {
      setMaxMoviesLength(moviesMaxLength + 2);
    } else if (screenWidth < 768) {
      setMaxMoviesLength(moviesMaxLength + 1);
    }
  }

  return (
    <div className="MoviesCardList">
      <ul className="MoviesCardList__list">
          {movies.map(movie => (
                <MoviesCard
                  key={movie._id}
                  movie={movie}
                  moviesMaxLength={moviesMaxLength}
                  setMaxMoviesLength={setMaxMoviesLength}
                  addSaveMovies={addSaveMovies}
                  delMovie={delMovie}
                  saveMoviesId={saveMoviesId}
                />
              )
          )}
      </ul>
      <button className="MoviesCardList__button" onClick={addMoviesLength}>Ещё</button>
    </div>
  );
}

export default MoviesCardList;

// MoviesCardList — компонент, который управляет отрисовкой карточек фильмов на страницу и их количеством.