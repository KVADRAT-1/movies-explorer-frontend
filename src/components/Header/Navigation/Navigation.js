import './Navigation.css';
import { Link, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import icon from '../../../images/Header/Navigation/Navigation__icon-nav.svg';



function Navigation() {
  const { pathname } = useLocation();

  useEffect(() => {
    const NavigationList = document.querySelector('.Navigation__list');
    const NavigationBackground = document.querySelector('.Navigation__background');
    let screenWidth = document.documentElement.clientWidth;
    if (screenWidth < 1280) {
      NavigationList.classList.add('hide');
      NavigationBackground.classList.add('hide');
    } else { return };
  })

  window.addEventListener('resize', () => {
    const NavigationList = document.querySelector('.Navigation__list');
    const NavigationBackground = document.querySelector('.Navigation__background');
    let screenWidth = document.documentElement.clientWidth;

    if (screenWidth < 1280) {
      NavigationList.classList.add('hide');
      NavigationBackground.classList.add('hide');
    } else {
      NavigationList.classList.remove('hide');
      NavigationBackground.classList.add('hide');
    }
  });

  function openMenu(e) {
    const NavigationList = document.querySelector('.Navigation__list');
    const NavigationBackground = document.querySelector('.Navigation__background');
    let screenWidth = document.documentElement.clientWidth;

    if (screenWidth > 1279) { return };
    if (e.target.className !== 'Navigation__button-open-nav') { return };
    NavigationBackground.classList.remove('hide');
    NavigationList.classList.remove('hide');
  }

  function closeMenu() {
    const NavigationList = document.querySelector('.Navigation__list');
    const NavigationBackground = document.querySelector('.Navigation__background');
    NavigationList.classList.add('hide');
    NavigationBackground.classList.add('hide');
  }

  return (
    <div className="Navigation">
      <button className='Navigation__button-open-nav' onClick={openMenu}></button>
      <div className='Navigation__background hide' onClick={closeMenu}></div>
      <ul className="Navigation__list">
      <button className='Navigation__button-Close' onClick={closeMenu}></button>
        <li className="Navigation__item">
          <Link className={`Navigation__link ${pathname === '/movies' && 'activePage'}`} to='/movies'>Фильмы</Link>
        </li>
        <li className="Navigation__item">
          <Link className={`Navigation__link ${pathname === '/saved-movies' && 'activePage'}`} to='/saved-movies'>Сохранённые фильмы</Link>
        </li>
        <li className="Navigation__item">
          <Link className={`Navigation__link ${pathname === '/profile' && 'activePage'}`} to='/profile'>
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
