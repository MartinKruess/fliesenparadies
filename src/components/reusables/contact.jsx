import { useEffect } from "react"
import { useState } from "react"
import { Anfrage } from "./anfrage"
import { Feedback } from "./feedback"

export const Contact = () => {
    const [contactActive, setContactActive] = useState(false)
    const [contactValue, setContactValue] = useState("anfrage")

    useEffect (()=> {
        document.body.style.overflow = contactActive ? 'hidden' : 'unset'
    },[contactActive])

    console.log(contactValue)

    return(
        <>
            <div className="contactContainer">
                <div onClick={() => setContactActive(!contactActive)}>
                    <p>Kontakt:</p>
                    <p><i className="fa-solid fa-comments"></i></p>
                </div>
                
            </div>
            {contactActive && <div className="contactForm">
                <select name="contect" id=""
                onChange={(e) => setContactValue(e.target.value)}>
                    <option value="anfrage" >Unverbindliche Anfrage</option>
                    <option value="feedback">Feedback</option>
                </select>
                {contactValue === "anfrage" && <Anfrage />}
                {contactValue === "feedback" && <Feedback />}
            </div>}
        </>
    )
}