import './Navigation.css';
import { Link } from 'react-router-dom';
import icon from '../../../images/Header/Navigation/iconNavigation.svg';

function Navigation() {
  window.addEventListener(`resize`, event => {
    let screenWidth = document.documentElement.clientWidth;
    const NavigationList = document.querySelector('.Navigation__list');
    if (screenWidth > 1279 && !NavigationList.classList.contains('hide')) {
      NavigationList.classList.add('hide');
    }
  }, false);

  function openMenu(e) {
    let screenWidth = document.documentElement.clientWidth;
    if (screenWidth > 1279) { return };
    if (e.target.className !== 'Navigation') { return };
    const NavigationList = e.target.querySelector('.Navigation__list');
    if (NavigationList.classList.contains('hide')) {
      NavigationList.classList.remove('hide');
    } else {
      NavigationList.classList.add('hide');
    }
  }

  return (
    <div className="Navigation" onClick={openMenu}>
      <ul className="Navigation__list hide">
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
