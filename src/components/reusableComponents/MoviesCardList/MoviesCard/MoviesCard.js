import './MoviesCard.css';

import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import iconNotfavoriteActive from '../../../../images/MoviesCard/MoviesCard__icon-not-favoriteActive.svg';
import iconFavoriteActive from '../../../../images/MoviesCard/MoviesCard__icon-favoriteActive.svg';
import iconDeleteFavoriteActive from '../../../../images/MoviesCard/MoviesCard__icon-delete-favoriteActive.svg';

function MoviesCard({movie, addSaveMovies, delMovie, saveMoviesId}) {
  const { pathname } = useLocation();
  const [favoriteActive, setFavoriteActive] = useState(false);

  function clickIcon() {
    if (pathname === '/movies' && favoriteActive === false) {
      addSaveMovies(movie)
      setFavoriteActive(true)
    } else if (pathname === '/movies' && favoriteActive === true) {
      delMovie(movie._id)
      setFavoriteActive(false)
    } else if (pathname === '/saved-movies') {
      delMovie(movie._id)
    }
  }

  useEffect(() => {
    if (pathname === '/movies') {
      if (saveMoviesId.includes(movie._id)) {
        setFavoriteActive(!favoriteActive)
      }
    }
  }, [])

  function openTrailer() {
    window.open(movie.trailerLink);
  }

  return (
      <li className="MoviesCard">
          <div className='MoviesCard__ebout-movie'>
            <p className="MoviesCard__text">{movie.nameRU}</p>
            <p className="MoviesCard__movie-time">{`${Math.floor(movie.duration / 60)}ч${movie.duration % 60}м`}</p>
          </div>
          <img className='MoviesCard__like' src={pathname === '/movies' ? (favoriteActive ? iconFavoriteActive : iconNotfavoriteActive) : iconDeleteFavoriteActive} onClick={clickIcon} alt={'like'}/>
          <img className="MoviesCard__photo" src={movie.image} onClick={openTrailer} alt={movie.nameRU}/>
      </li>
  );
}

export default MoviesCard;

// MoviesCard — компонент одной карточки фильма.
