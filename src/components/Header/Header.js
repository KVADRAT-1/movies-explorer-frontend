import './Header.css';

import React from 'react';
import { useHistory } from 'react-router-dom';
import NavigationMain from './NavigationMain/NavigationMain.js';
import Navigation from './Navigation/Navigation.js';
import icon from '../../images/reusableImages/logo.svg';

function Header({loggedIn}) {
  const history = useHistory();
  return (
    <div className='Header'>
      <img className='Header__icon' src={icon} alt={'icon'} onClick={() => { history.push('/') }}/>
      {loggedIn === false ? <NavigationMain /> : <Navigation />}
    </div>
  );
}

export default Header;

// Header — компонент, который отрисовывает шапку сайта на страницу.
