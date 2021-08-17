import './Portfolio.css';

function Portfolio() {
  return (
    <div className="Portfolio">
      <div className='Portfolio__title'>Портфолио</div>
        <ul className='Portfolio__list'>
          <li className='Portfolio__item'>
            <a className='Portfolio__link' href={'https://kvadrat-1.github.io/how-to-learn/'} target='blank'>
              <p className='Portfolio__text'>Статичный сайт</p>
              <div className='Portfolio__arrow'/>
            </a>
          </li>
          <li className='Portfolio__item'>
            <a className='Portfolio__link' href={'https://kvadrat-1.github.io/russian-travel-master/'} target='blank'>
              <p className='Portfolio__text'>Адаптивный сайт</p>
              <div className='Portfolio__arrow'/>
            </a>
          </li>
          <li className='Portfolio__item'>
            <a className='Portfolio__link' href={'http://mesto.frontend.nomoredomains.rocks/'} target='blank'>
              <p className='Portfolio__text'>Одностраничное приложение</p>
              <div className='Portfolio__arrow'/>
            </a>
          </li>
        </ul>
    </div>
  );
}

export default Portfolio;

// Portfolio — компонент со ссылками на другие проекты.
