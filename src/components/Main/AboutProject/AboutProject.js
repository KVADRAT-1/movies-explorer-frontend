import './AboutProject.css';

function AboutProject() {
  return (
    <div className="AboutProject">
        <h2 className='AboutProject__title'>О проекте</h2>
        <div className='AboutProject__info'>
          <article className='AboutProject__paragraph'>
            <h3 className='AboutProject__paragraph-title'>Дипломный проект включал 5 этапов</h3>
            <p className='AboutProject__paragraph-description'>Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
          </article>
          <article className='AboutProject__paragraph'>
            <h3 className='AboutProject__paragraph-title'>На выполнение диплома ушло 5 недель</h3>
            <p className='AboutProject__paragraph-description'>У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
          </article>
        </div>
        <div className='AboutProject__visual-info'>
          <div className='AboutProject__one-week'>1 неделя</div>
          <div className='AboutProject__four-week'>4 недели</div>
          <div className='AboutProject__back-end'>Back-end</div>
          <div className='AboutProject__front-end'>Front-end</div>
        </div>
    </div>
  );
}

export default AboutProject;

// AboutProject — компонент с описанием дипломного проекта.
