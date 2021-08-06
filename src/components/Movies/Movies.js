import './Movies.css';

import SearchForm from './SearchForm/SearchForm.js';
import Preloader from './Preloader/Preloader.js';
import MoviesCardList from '../MoviesCardList/MoviesCardList.js';
import MoviesCard from '../MoviesCard/MoviesCard.js';

function Movies() {
  return (
    <div className="Movies">
      ↓↓↓ Movies ↓↓↓
      <SearchForm />
      <Preloader />
      <MoviesCardList />
      <MoviesCard />
      ↑↑↑ Movies ↑↑↑
    </div>
  );
}

export default Movies;

// Movies — компонент страницы с поиском по фильмам. В нём компоненты:
//      1. SearchForm — форма поиска, куда пользователь будет вводить запрос. 
//         Обратите внимание на фильтр с чекбоксом «Только короткометражки». 
//         Для него можно воспользоваться отдельным управляемым компонентом FilterCheckbox.
//      2. Preloader — отвечает за работу прелоадера.
//      3. MoviesCardList — компонент, который управляет отрисовкой карточек фильмов на страницу и их количеством.
//      4. MoviesCard — компонент одной карточки фильма.
