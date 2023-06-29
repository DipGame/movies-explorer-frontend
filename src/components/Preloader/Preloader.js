import './Preloader.css';
import gif from '../../images/loading-thumb.gif'

function Preloader() {

    return (
        <>
            <section className='preloader'>
                <img className='preloader__img' src={gif} />
            </section>
        </>
    );
}

export default Preloader;