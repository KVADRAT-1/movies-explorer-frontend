import './Navigation.css';
import { Link, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import icon from '../../../images/Header/Navigation/Navigation__icon-nav.svg';

function Navigation() {
  
	const { pathname } = useLocation();

  useEffect(() => {
    const NavigationLinkAll = document.querySelectorAll('.Navigation__link')

    NavigationLinkAll.forEach((item) => {
      if(item.classList.contains('activePage')) {
        item.classList.remove('activePage');
      }
    })

		if (pathname === '/movies') {
      NavigationLinkAll[0].classList.add('activePage')
    } else if (pathname === '/saved-movies') {
      NavigationLinkAll[1].classList.add('activePage')
    } else if (pathname === '/profile') {
      NavigationLinkAll[2].classList.add('activePage')
    } else { return }
	}, [pathname]);

  window.addEventListener(`resize`, () => {
    const NavigationList = document.querySelector('.Navigation__list');
    let screenWidth = document.documentElement.clientWidth;
    
    if (screenWidth > 1279 && !NavigationList.classList.contains('hide')) {
      NavigationList.classList.add('hide');
    }
  }, false);

  function openMenu(e) {
    const NavigationList = document.querySelector('.Navigation__list');
    let screenWidth = document.documentElement.clientWidth;

    if (screenWidth > 1279) { return };
    if (e.target.className !== 'Navigation') { return };
    if (!NavigationList.classList.contains('hide')) { return }
    NavigationList.classList.remove('hide');
  }

  function closeMenu() {
    const NavigationList = document.querySelector('.Navigation__list');
    NavigationList.classList.add('hide');
  }

  return (
    <div className="Navigation" onClick={openMenu}>
      <ul className="Navigation__list hide">
        <button className='Navigation__button-Close' onClick={closeMenu}></button>
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
