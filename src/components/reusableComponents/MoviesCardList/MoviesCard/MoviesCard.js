import './MoviesCard.css';

import { useState } from 'react';
import { useLocation } from 'react-router-dom';

import iconNotfavoriteActive from '../../../../images/MoviesCard/MoviesCard__icon-not-favoriteActive.svg';
import iconFavoriteActive from '../../../../images/MoviesCard/MoviesCard__icon-favoriteActive.svg';
import iconDeleteFavoriteActive from '../../../../images/MoviesCard/MoviesCard__icon-delete-favoriteActive.svg';
import photo from '../../../../images/trash/asd.jpg';

function MoviesCard() {
  const { pathname } = useLocation();
  const [favoriteActive, setFavoriteActive] = useState(false);
  
  function deleteMovies() {
    console.log('deleteMovies')
  }

  function clickIcon(e) {
    if (pathname === '/movies' && favoriteActive === false) {
      setFavoriteActive(!favoriteActive)
      e.target.src = iconFavoriteActive
    } else if (pathname === '/movies' && favoriteActive === true) {
      setFavoriteActive(!favoriteActive)
      e.target.src = iconNotfavoriteActive
    } else if (pathname === '/saved-movies') {
      deleteMovies()
    }
  }

  return (
    <div className="MoviesCard">
        <div className='MoviesCard__ebout-movie'>
          <p className="MoviesCard__text">Документальный фильм</p>
          <p className="MoviesCard__movie-time">1ч42м</p>
        </div>
        <img className='MoviesCard__like' src={pathname === '/movies' ? iconNotfavoriteActive : iconDeleteFavoriteActive} onClick={clickIcon} alt={'like'}/>
        <img className="MoviesCard__photo" src={photo} alt={'photoMovie'}/>
    </div>
  );
}

export default MoviesCard;

// MoviesCard — компонент одной карточки фильма.
