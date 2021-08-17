import './MoviesCard.css';

function MoviesCard() {
  return (
    <div className="MoviesCard">
        <div className="MoviesCard__photo"></div>
        <p className="MoviesCard__text">Какой то фильм</p>
        <button className="MoviesCard__buttom"></button>
        <p className="MoviesCard__movie-time">1ч42м</p>
    </div>
  );
}

export default MoviesCard;

// MoviesCard — компонент одной карточки фильма.
