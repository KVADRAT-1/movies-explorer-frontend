import './MoviesCardList.css';
import { useEffect } from 'react';
import MoviesCard from './MoviesCard/MoviesCard.js';

function MoviesCardList({movies, addSaveMovies, delMovie, saveMoviesId, filter, inputText, maxLengthListMovies, setMaxLengthListMovies}) {
  function addMoviesLength() {
    let screenWidth = document.documentElement.clientWidth;
    if (screenWidth >= 1280) {
      setMaxLengthListMovies(maxLengthListMovies + 3);
    } else if (screenWidth >= 768) {
      setMaxLengthListMovies(maxLengthListMovies + 2);
    } else if (screenWidth < 768) {
      setMaxLengthListMovies(maxLengthListMovies + 1);
    }
  }

  useEffect(() => {
    let screenWidth = document.documentElement.clientWidth;
    if (screenWidth >= 1280) {
      setMaxLengthListMovies(12);
    } else if (screenWidth >= 768) {
      setMaxLengthListMovies(8);
    } else if (screenWidth < 768) {
      setMaxLengthListMovies(5);
    }
  }, [])

  return (
    <div className="MoviesCardList">
      <ul className="MoviesCardList__list">
          {movies.map((movie, i) => {
            if ((movie.nameRU.match(inputText) === null) || (filter && movie.duration >= 40)) { return }
            if ((i + 1) > maxLengthListMovies) { return }
            return (
              <MoviesCard
                key={movie._id}
                movie={movie}
                addSaveMovies={addSaveMovies}
                delMovie={delMovie}
                saveMoviesId={saveMoviesId}
              />
            )
          }
          )}
      </ul>
      <button className="MoviesCardList__button" onClick={addMoviesLength}>Ещё</button>
    </div>
  );
}

export default MoviesCardList;

// MoviesCardList — компонент, который управляет отрисовкой карточек фильмов на страницу и их количеством.