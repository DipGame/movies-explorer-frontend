import './PageNotFound.css';
import Error from '../../images/pngegg (1).png'
import { useNavigate } from 'react-router-dom';

function PageNotFound() {

    const navigate = useNavigate();

    function name() {
        navigate('/', { replace: true });
    }

    return (
        <>
            <section className='error'>
                <button className='error__title' onClick={name}>На главную</button>
                <img className='error__img' src={Error}></img>
            </section>
        </>
    );
}

export default PageNotFound;