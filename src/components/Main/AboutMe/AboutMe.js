import './AboutMe.css';

function AboutMe() {
  return (
    <div className="AboutMe">
        <h2 className='AboutMe__title'>Студент</h2>
        <div className='AboutMe__student'>
          <div className='AboutMe__photo' alt='photo'/>
          <article className='AboutMe__paragraph'>
            <h2 className='AboutMe__paragraph-title'>Владимир</h2>
            <h3 className='AboutMe__paragraph-subtitle'>Фронтенд-разработчик, 23 года</h3>
            <p className='AboutMe__description'>Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня есть жена и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить. С 2015 года работал в компании «СКБ Контур». После того, как прошёл курс по веб-разработке, начал заниматься фриланс-заказами и ушёл с постоянной работы.</p>
          <div className='AboutMe__website'>
            <a className='AboutMe__link' href={'https://developer.mozilla.org/en-US/docs/Web/CSS/font-style'}>Facebook</a>
            <a className='AboutMe__link' href={'https://developer.mozilla.org/en-US/docs/Web/CSS/font-style'}>Github</a>
          </div>
          </article>
        </div>
        <div className='AboutMe__portfolio'>Портфолио</div>
        <ul className='AboutMe__portfolio-list'>
          <li className='AboutMe__portfolio-item'>
            <a className='AboutMe__portfolio-link' href={'https://developer.mozilla.org/en-US/docs/Web/CSS/font-style'}>
              <p className='AboutMe__portfolio-text'>Статичный сайт</p>
              <div className='AboutMe__portfolio-arrow'/>
            </a>
          </li>
          <li className='AboutMe__portfolio-item'>
            <a className='AboutMe__portfolio-link' href={'https://developer.mozilla.org/en-US/docs/Web/CSS/font-style'}>
              <p className='AboutMe__portfolio-text'>Адаптивный сайт</p>
              <div className='AboutMe__portfolio-arrow'/>
            </a>
          </li>
          <li className='AboutMe__portfolio-item'>
            <a className='AboutMe__portfolio-link' href={'https://developer.mozilla.org/en-US/docs/Web/CSS/font-style'}>
              <p className='AboutMe__portfolio-text'>Одностраничное приложение</p>
              <div className='AboutMe__portfolio-arrow'/>
            </a>
          </li>
        </ul>
    </div>
  );
}

export default AboutMe;

// AboutMe — компонент с информацией о студенте.
