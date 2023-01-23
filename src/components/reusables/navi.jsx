import { useEffect, useState } from "react"
import { Link, NavLink } from "react-router-dom"

export const Navi = () => {
    const [burgerOn, setBurgerOn] = useState(false)

    useEffect(() => {
        console.log(burgerOn)
    },[burgerOn])


    return (
        <nav>
            <Link className="burger"
            onClick={() => setBurgerOn(!burgerOn)}><i className="fa-solid fa-bars"></i></Link>
            {burgerOn &&
            <>
                <Link>Home</Link>
                <Link>Service</Link>
                <Link>Unternehmen</Link>
                <Link>Karriere</Link>
            </>}
            
        </nav>)
}