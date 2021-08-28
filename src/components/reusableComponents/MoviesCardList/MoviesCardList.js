import './MoviesCardList.css';

import { useState } from 'react';

import MoviesCard from './MoviesCard/MoviesCard.js';

function MoviesCardList({movies}) {
  const [moviesLength, setMoviesLength] = useState(12);

  function addMoviesLength() {
    let screenWidth = document.documentElement.clientWidth;
    if (screenWidth >= 1280) {
      setMoviesLength(moviesLength + 3);
    } else if (screenWidth >= 768) {
      setMoviesLength(moviesLength + 2);
    } else if (screenWidth < 768) {
      setMoviesLength(moviesLength + 1);
    }
  }
  return (
    <div className="MoviesCardList">
      <ul className="MoviesCardList__list">
        {movies.map(movie => (
              <MoviesCard
                key={movie.id}
                movie={movie}
                moviesLength={moviesLength}
                setMoviesLength={setMoviesLength}
              />
        ))}
      </ul>
      <button className="MoviesCardList__button" onClick={addMoviesLength}>Ещё</button>
    </div>
  );
}

export default MoviesCardList;

// MoviesCardList — компонент, который управляет отрисовкой карточек фильмов на страницу и их количеством.