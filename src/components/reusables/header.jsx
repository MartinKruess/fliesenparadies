export const Header = () => {
    return(
    <section className="header">
        <div className="logoContainer">
            <img src="/raute.png" alt="" />
            <h1>Fliesenparadies Voß</h1>
        </div>
        <div className="fastContact">
            <a href="https://www.facebook.com/people/Fliesenparadies-Vo%C3%9F/100063689840579/" target="_blank" rel="noopener noreferrer">
                <i className="fa-brands fa-facebook fb"></i>
            </a>
            <a href="tel:+4106 / 7 16 44">
                <i className="fa-solid fa-phone"></i>
            </a>
            <a href="mailto:khv@fliesenparadies-voss.de">
                <i className="fa-regular fa-envelope"></i>
            </a>
                <i className="fa-solid fa-gears"></i>
        </div>
    </section>
    )
}