import { useEffect, useState } from "react"
import { ContactBG } from "../contact_assets/contactbg"


export const Contact = () => {
    const [contactActive, setContactActive] = useState(false)

    useEffect (()=> {
        document.body.style.overflow = contactActive ? 'hidden' : 'unset'
    },[contactActive])

    console.log("ContactOpen?", contactActive)

    return(
        <>
            <div className="contactContainer">
                <div onClick={() => setContactActive(!contactActive)}>
                    <p>Kontakt:</p>
                    <p><i className="fa-solid fa-comments"></i></p>
                </div>
                
            </div>
            {contactActive && <ContactBG setContactActive={setContactActive}/>}
        </>
    )
}