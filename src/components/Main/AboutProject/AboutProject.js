import './AboutProject.css';

function AboutProject() {
  return (
    <div className="AboutProject" id='AboutProject'>
        <h2 className='AboutProject__title'>О проекте</h2>
        <div className='info-text'>
          <article className='info-text__paragraph'>
            <h3 className='info-text__title'>Дипломный проект включал 5 этапов</h3>
            <p className='info-text__description'>Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
          </article>
          <article className='info-text__paragraph'>
            <h3 className='info-text__title'>На выполнение диплома ушло 5 недель</h3>
            <p className='info-text__description'>У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
          </article>
        </div>
        <div className='visual-info'>
          <div className='visual-info__one-week'>1 неделя</div>
          <div className='visual-info__four-week'>4 недели</div>
          <div className='visual-info__back-end'>Back-end</div>
          <div className='visual-info__front-end'>Front-end</div>
        </div>
    </div>
  );
}

export default AboutProject;

// AboutProject — компонент с описанием дипломного проекта.
