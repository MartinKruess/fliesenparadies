import { useEffect, useState } from "react"
//import { sendMSG } from "./contact_logic"

export const Anfrage = () => {
    const [data, setData] = useState({
        mail: "",
        name: "",
        msg: "",
    })

    useEffect(() => {

    },[data])

    console.log("DATA", data)

    return(
        <form className="formContainer" method="post">
            <input type="email" name="mail" onChange={(e) => setData({...data, mail: e.target.value})} placeholder="example@mail.com" required />
            <input type="text" name="Name" onChange={(e) => setData({...data, name: e.target.value})} placeholder="Max Mustermann" required />
            <textarea name="Message" onChange={(e) => setData({...data, msg: e.target.value})} cols="30" rows="10" placeholder="" required></textarea>
            <p>
                Manchmal sagt ein Bild mehr als 1000 Worte. Zeigen Sie uns die Fläche um die es geht. 
            </p>
            {/* <button type="submit" onClick={() => sendMSG(data)}>Unverbindliche Anfrage Senden</button> */}
        </form>
    )
}