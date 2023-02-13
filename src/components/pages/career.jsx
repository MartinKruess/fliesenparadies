import { useState } from "react"

export const CareerPage = () => {
    const [toggle, setToggle] = useState('base')
    const activeStyle = {backgroundColor: "var(--company)", color: "var(--primary)"}
    const inactiveStyle = {backgroundColor: "transparent", color: "var(--secondary)"}

    const handleToggle = () => {
        setToggle(!toggle)
    }

    

    return(
        <article>
            <div className="careerMenu">
                <div onClick={() => handleToggle()}
                style={toggle === 'base' ? activeStyle : inactiveStyle} >Das Handwerk</div>
                <div onClick={() => handleToggle()}
                style={toggle === 'jobs' ? activeStyle : inactiveStyle} >Jobs</div>
                <div onClick={() => handleToggle()}
                style={toggle === 'Jobs bei uns' ? activeStyle : inactiveStyle} >Ausbildungsplätze</div>
            </div>
        </article>
        
    )
}