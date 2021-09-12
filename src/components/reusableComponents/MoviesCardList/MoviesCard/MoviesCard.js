import './MoviesCard.css';

import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import iconNotfavoriteActive from '../../../../images/MoviesCard/MoviesCard__icon-not-favoriteActive.svg';
import iconFavoriteActive from '../../../../images/MoviesCard/MoviesCard__icon-favoriteActive.svg';
import iconDeleteFavoriteActive from '../../../../images/MoviesCard/MoviesCard__icon-delete-favoriteActive.svg';

function MoviesCard({movie, moviesLength, setMoviesLength, addSaveMovies, deleteSaveMovies, deleteMovies}) {
  const { pathname } = useLocation();

  const [favoriteActive, setFavoriteActive] = useState(false);

  function clickIcon(e) {
    if (pathname === '/movies' && favoriteActive === false) {
      addSaveMovies(movie)
      setFavoriteActive(!favoriteActive)
      e.target.src = iconFavoriteActive
    } else if (pathname === '/movies' && favoriteActive === true) {
      deleteSaveMovies(movie)
      setFavoriteActive(!favoriteActive)
      e.target.src = iconNotfavoriteActive
    } else if (pathname === '/saved-movies') {
      deleteMovies()
    }
  }

  useEffect(() => {
    let screenWidth = document.documentElement.clientWidth;
    if (screenWidth >= 1280) {
      setMoviesLength(12);
    } else if (screenWidth >= 768) {
      setMoviesLength(8);
    } else if (screenWidth < 768) {
      setMoviesLength(5);
    }
  }, [])

  return (
    movie.id <= moviesLength && (
      <li className="MoviesCard">
          <div className='MoviesCard__ebout-movie'>
            <p className="MoviesCard__text">{movie.nameRU}</p>
            <p className="MoviesCard__movie-time">{`${Math.floor(movie.duration / 60)}ч${movie.duration % 60}м`}</p>
          </div>
          <img className='MoviesCard__like' src={pathname === '/movies' ? iconNotfavoriteActive : iconDeleteFavoriteActive} onClick={clickIcon} alt={'like'}/>
          <img className="MoviesCard__photo" src={movie.image} alt={'photoMovie'}/>
      </li>
    )
  );
}

export default MoviesCard;

// MoviesCard — компонент одной карточки фильма.
