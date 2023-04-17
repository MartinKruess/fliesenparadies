export const Header = () => {
    return(
    <section className="header">
        <div className="logoContainer">
            <img src="/raute.png" alt="" />
            <h1>Fliesenparadies Voß</h1>
        </div>
        <div className="fastContact">
            <a href="https://www.facebook.com/people/Fliesenparadies-Vo%C3%9F/100063689840579/" target="_blank" rel="noopener noreferrer" title="Facebook" alt="Facebook Button">
                <i className="fa-brands fa-facebook fb"></i>
            </a>
            <a href="tel:+4106 / 7 16 44" title="Telefon" alt="Telefon Button">
                <i className="fa-solid fa-phone"></i>
            </a>
            <a href="mailto:khv@fliesenparadies-voss.de" title="Mail" alt="Mail Button">
                <i className="fa-regular fa-envelope"></i>
            </a>
        </div>
    </section>
    )
}