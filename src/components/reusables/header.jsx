export const Header = () => {
    return(
    <section className="header">
        <div className="logo">
            <img src="/Fliesenparadies-Voss-Logo.jpg" alt="" />
        </div>
        <div className="fastContact">
            <i className="fa-brands fa-facebook fb"></i>
            <a href="tel:+4106 / 7 16 44">
                <i className="fa-solid fa-phone"></i>
            </a>
            <a href="mailto:khv@fliesenparadies-voss.de">
                <i className="fa-regular fa-envelope"></i>
            </a>
            <a href="https://www.facebook.com/people/Fliesenparadies-Vo%C3%9F/100063689840579/" target="_blank" rel="noopener noreferrer">
                <i className="fa-solid fa-gears"></i>
            </a>
        </div>
    </section>
    )
}