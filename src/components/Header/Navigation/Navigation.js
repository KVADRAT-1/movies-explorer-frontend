import './Navigation.css';
import { Link } from 'react-router-dom';

function Navigation() {
  return (
    <div className="Navigation">
      <Link className='navigation__button-register' to='/sign-in' href="./Navigation.css">Регистрация</Link>
      <Link className='navigation__button-open' to='/sign-up' href="./Navigation.css" style={{textDecoration: 'none'}}>Войти</Link>
    </div>
  );
}

export default Navigation;

// Navigation — компонент, который отвечает за меню навигации на сайте.
