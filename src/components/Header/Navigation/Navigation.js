import './Navigation.css';
import { Link } from 'react-router-dom';
import icon from '../../../images/Header/Navigation/iconNavigation.svg';

function Navigation() {

  return (
    <div className="Navigation">
      <ul className="Navigation__list">
        <li className="Navigation__item">
          <Link className='Navigation__link' to='/movies'>Фильмы</Link>
        </li>
        <li className="Navigation__item">
          <Link className='Navigation__link' to='/saved-movies'>Сохранённые фильмы</Link>
        </li>
        <li className="Navigation__item">
          <Link className='Navigation__link' to='/profile'>
            <p className='Navigation__text-profile'>Аккаунт</p>
            <img className='Navigation__icon-profile' src={icon} alt={'Иконка'}/>
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Navigation;

// Navigation — компонент, который отвечает за меню навигации на сайте.
