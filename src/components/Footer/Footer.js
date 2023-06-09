import './Footer.css';

function Footer() {
    return (
        <footer className="footer">
            <h2 className="footer__title">
                Учебный проект Яндекс.Практикум х BeatFilm.
            </h2>
            <div className="footer__container">
                <p className="footer__year">
                    © 2023
                </p>
                <a className="footer__link" href="https://practicum.yandex.ru/">
                    Яндекс.Практикум
                </a>
                <a className="footer__link" href="https://github.com/DipGame/">
                    Github
                </a>
            </div>
        </footer>
    );
}

export default Footer;