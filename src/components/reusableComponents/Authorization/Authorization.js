import './Authorization.css';
import { Link, useLocation } from 'react-router-dom';
import icon from '../../../images/reusableImages/logo.svg';

function Authorization() {
    const { pathname } = useLocation();

  return (
    <div className='Authorization'>
        <img className='Authorization__icon' src={icon} alt={'icon'}/>
        <h2 className='Authorization__title'>{pathname === '/sign-in' ? 'Рады видеть!' : 'Добро пожаловать!'}</h2>
        <form className='Authorization__form'>
            {pathname === '/sign-up' && 
                <>
                    <p className='Authorization__text-input'>Имя</p>
                    <div className='Authorization__section-input'>
                        <input className='Authorization__input' type='text' required></input>
                        <span className='Authorization__input-error hide'>Что-то пошло не так...</span>
                    </div>
                </>
            }
            <p className='Authorization__text-input'>E-mail</p>
            <div className='Authorization__section-input'>
                <input className='Authorization__input' type='mail' required></input>
                <span className='Authorization__input-error hide'>Что-то пошло не так...</span>
            </div>
            <p className='Authorization__text-input'>Пароль</p>
            <div className='Authorization__section-input'>
                <input className='Authorization__input' type='password' required></input>
                <span className='Authorization__input-error hide'>Что-то пошло не так...</span>
            </div>
            <button className='Authorization__button'>{pathname === '/sign-in' ? 'Войти' : 'Зарегистрироваться'}</button>
        </form>
        <p className='Authorization__text-link'>{pathname === '/sign-in' ? 'Ещё не зарегистрированы?' : 'Уже зарегистрированы?'}<Link className='Authorization__link' to={pathname === '/sign-in' ? '/sign-up' : '/sign-in'}>{pathname === '/sign-in' ? 'Регистрация' : 'Войти'}</Link></p>
    </div>
  );
}

export default Authorization;