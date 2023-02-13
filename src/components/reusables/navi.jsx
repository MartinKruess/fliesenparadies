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
            onClick={() => setBurgerOn(!burgerOn)}><i className="fa-solid fa-bars"></i></Link>
            {burgerOn &&
            <>
                <Link to="/">Home</Link>
                <Link to="/services">Service</Link>
                <Link to="/unternehmen">Unternehmen</Link>
                <Link to="/karriere">Karriere</Link>
            </>}
            
            {/* {burgerOn &&
            <ul>
                <li><Link>Home</Link></li>
                <li><Link>Service</Link></li>
                <li className="dropdownMenu"><Link>
                    Unternehmen</Link>
                    <ul className="dropdown">
                        <li><Link>Team</Link></li>
                        <li><Link>Geschichte</Link></li>
                    </ul>
                </li>
                    <li><Link>Karriere</Link></li>
            </ul>} */}
        </nav>)
}