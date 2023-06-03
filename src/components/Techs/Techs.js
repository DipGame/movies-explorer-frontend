import './Techs.css';

function Techs() {
    return (
        <section className='techs'>
            <h2 className='techs__title'>
                Технологии
            </h2>
            <div className='techs__container'>
                <h2 className='techs__subtitle'>
                    7 технологий
                </h2>
                <p className='techs__text'>
                    На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.
                </p>
                <div className='techs__langs'>
                    <div className='techs__lang'>
                        <p className='techs__lang_text'>
                            HTML
                        </p>
                    </div>
                    <div className='techs__lang'>
                        <p className='techs__lang_text'>
                            CSS
                        </p>
                    </div>
                    <div className='techs__lang'>
                        <p className='techs__lang_text'>
                            JS
                        </p>
                    </div>
                    <div className='techs__lang'>
                        <p className='techs__lang_text'>
                            React
                        </p>
                    </div>
                    <div className='techs__lang'>
                        <p className='techs__lang_text'>
                            Git
                        </p>
                    </div>
                    <div className='techs__lang'>
                        <p className='techs__lang_text'>
                            Express.js
                        </p>
                    </div>
                    <div className='techs__lang'>
                        <p className='techs__lang_text'>
                            MongoDB
                        </p>
                    </div>
                </div>
            </div>
        </section >
    )
}

export default Techs;