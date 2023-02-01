import { useEffect } from "react"
import { useState } from "react"
import { Anfrage } from "./anfrage"
import { Feedback } from "./feedback"

export const ContactBG = (props) => {

    
    const [contactValue, setContactValue] = useState("anfrage")

    

    return(
        <div className="contactBG" onClick={() => props.setContactActive(false)}>
            <div className="contactForm">
                <select name="contect" id=""
                onChange={(e) => setContactValue(e.target.value)}>
                    <option value="anfrage" >Unverbindliche Anfrage</option>
                    <option value="feedback">Feedback</option>
                </select>
                {contactValue === "anfrage" && <Anfrage />}
                {contactValue === "feedback" && <Feedback />}
  
            </div>
        </div>
    )
}