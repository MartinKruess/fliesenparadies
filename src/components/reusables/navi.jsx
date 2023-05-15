import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

export const Navi = () => {
    const [burgerOn, setBurgerOn] = useState(false)

    useEffect(() => {
    },[burgerOn])

    useEffect(() => {
        function handleResize() {
          if (window.innerWidth > 700) {
            setBurgerOn(true);
          } else {
            setBurgerOn(false);
          }
        }
    
        handleResize();
        window.addEventListener("resize", handleResize);
    
        return () => window.removeEventListener("resize", handleResize);
      }, []); 


    return (
        <nav>
            <Link className="burger"
            onClick={() => setBurgerOn(!burgerOn)} aria-label="burgermenu"><i className="fa-solid fa-bars" alt="burgermenu"></i></Link>
            {burgerOn &&
            <>
                <Link to="/">Home</Link>
                <Link to="/services">Service</Link>
                <Link to="/unternehmen">Unternehmen</Link>
                <Link to="/karriere">Karriere</Link>
            </>}
        </nav>)
}