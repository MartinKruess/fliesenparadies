import { useState } from "react"
//import { Anfrage } from "./anfrage"
import { ContactUs } from "./contact_logic"
import { Feedback } from "./feedback"

export const ContactReason = (props) => {

    const [contactValue, setContactValue] = useState("anfrage")

    return(
        <div className="contactForm">
            <select name="contect" id=""
            onChange={(e) => setContactValue(e.target.value)}>
                <option value="anfrage" >Unverbindliche Anfrage</option>
                <option value="feedback">Feedback</option>
            </select>
            {contactValue === "anfrage" && <ContactUs />}
            {/* {contactValue === "anfrage" && <Anfrage />} */}
            {contactValue === "feedback" && <Feedback />}
        </div>
    )
}