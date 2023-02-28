import { useEffect, useState } from "react"
import { ContactBG } from "../contact_assets/contactbg"
import { ContactReason } from "../contact_assets/contact_reason"


export const Contact = () => {
    const [contactActive, setContactActive] = useState(false)

    useEffect (()=> {
        document.body.style.overflow = contactActive ? 'hidden' : 'unset'
    },[contactActive])

    return(
        <>
            
            <div className="contactContainer">
                <div onClick={() => setContactActive(!contactActive)}>
                    <p>Kontakt</p>
                    <p><i className="fa-solid fa-comments"></i></p>
                </div>
                
            </div>
            {contactActive && 
            <div>
                <ContactBG setContactActive={setContactActive} />
                <ContactReason setContactActive={setContactActive}/>
            </div>}
        </>
    )
}