import './MoviesCard.css';

import { useState } from 'react';

import likeNotActive from '../../images/MoviesCard/likeNotActive.svg';
import likeActive from '../../images/MoviesCard/likeActive.svg';

function MoviesCard() {
  const [likeToSwitch, setLikeToSwitch] = useState(false);

  function switchLike() {
    setLikeToSwitch(!likeToSwitch);
  }

  return (
    <div className="MoviesCard">
        <div className="MoviesCard__photo"></div>
        <p className="MoviesCard__text">Какой то фильм</p>
        <img className='MoviesCard__like' src={likeToSwitch ? likeActive : likeNotActive} onClick={switchLike} alt={'like'}/>
        <p className="MoviesCard__movie-time">1ч42м</p>
    </div>
  );
}

export default MoviesCard;

// MoviesCard — компонент одной карточки фильма.
