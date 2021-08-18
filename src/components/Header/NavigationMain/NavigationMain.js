import './NavigationMain.css';
import { Link } from 'react-router-dom';

function NavigationMain() {
  return (
    <div className="NavigationMain">
      <Link className='NavigationMain__button-register' to='/sign-in' href="./Navigation.css">Регистрация</Link>
      <Link className='NavigationMain__button-open' to='/sign-up' href="./Navigation.css">Войти</Link>
    </div>
  );
}

export default NavigationMain;

// Navigation — компонент, который отвечает за меню навигации на сайте.
