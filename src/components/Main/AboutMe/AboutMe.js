import './AboutMe.css';

function AboutMe() {
  return (
    <div className="AboutMe">
        <h2 className='AboutMe__title'>Студент</h2>

        <article className='AboutMe__paragraph'>subtitle
          <h2 className='AboutMe__paragraph-title'>Владимир</h2>
          <h3 className='AboutMe__paragraph-subtitle'>Фронтенд-разработчик, 23 года</h3>
          <p className='AboutMe__description'>Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня есть жена 
и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить. С 2015 года работал в компании «СКБ Контур». После того, как прошёл курс по веб-разработке, начал заниматься фриланс-заказами и ушёл с постоянной работы.</p>
        </article>
        <div className='AboutMe__connection'>
          <a href={'https://developer.mozilla.org/en-US/docs/Web/CSS/font-style'}>Facebook</a>
          <a href={'https://hcdev.ru/grid/grid-5/'}>Github</a>
        </div>
        <img></img>
    </div>
  );
}

export default AboutMe;

// AboutMe — компонент с информацией о студенте.
