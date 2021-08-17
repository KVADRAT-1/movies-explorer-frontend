import './MoviesCardList.css';

import MoviesCard from '../MoviesCard/MoviesCard.js';

function MoviesCardList() {
  return (
    <div className="MoviesCardList">
      <ul className="MoviesCardList__list">
        <li className="MoviesCardList__item"><MoviesCard/></li>
        <li className="MoviesCardList__item"><MoviesCard/></li>
        <li className="MoviesCardList__item"><MoviesCard/></li>
        <li className="MoviesCardList__item"><MoviesCard/></li>
        <li className="MoviesCardList__item"><MoviesCard/></li>
        <li className="MoviesCardList__item"><MoviesCard/></li>
        <li className="MoviesCardList__item"><MoviesCard/></li>
        <li className="MoviesCardList__item"><MoviesCard/></li>
        <li className="MoviesCardList__item"><MoviesCard/></li>
        <li className="MoviesCardList__item"><MoviesCard/></li>
        <li className="MoviesCardList__item"><MoviesCard/></li>
        <li className="MoviesCardList__item"><MoviesCard/></li>
        <li className="MoviesCardList__item"><MoviesCard/></li>
        <li className="MoviesCardList__item"><MoviesCard/></li>
        <li className="MoviesCardList__item"><MoviesCard/></li>
        <li className="MoviesCardList__item"><MoviesCard/></li>
      </ul>
      <button className="MoviesCardList__button">Ещё</button>
    </div>
  );
}

export default MoviesCardList;

// MoviesCardList — компонент, который управляет отрисовкой карточек фильмов на страницу и их количеством.