import './AboutProject.css';

function AboutProject() {
    return (
        <section className='project'>
            <h2 className='project__title'>
                О проекте
            </h2>
            <div className='project__box'>
                <div className='project__container'>
                    <p className='project__stage'>
                        Дипломный проект включал 5 этапов
                    </p>
                    <p className='project__text'>
                        Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.
                    </p>
                </div>
                <div className='project__container'>
                    <p className='project__stage'>
                        На выполнение диплома ушло 5 недель
                    </p>
                    <p className='project__text'>
                        У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.
                    </p>
                </div>
            </div>
            <div className='project__line-time'>
                <div className='project__back-week'>
                    <div className='project__week' id='project__week_1'>
                        <p className='project__week_text' id='project__week_text_1'>
                            1 неделя
                        </p>
                    </div>
                    <p className='project__title-end' id='project__title-end_back'>
                        Back-end
                    </p>
                </div>
                <div className='project__front-week'>
                    <div className='project__week' id='project__week_4'>
                        <p className='project__week_text' id='project__week_text_4'>
                            4 недели
                        </p>
                    </div>
                    <p className='project__title-end' id='project__title-end_front'>
                        Front-end
                    </p>
                </div>
            </div>
        </section>
    )
}

export default AboutProject;