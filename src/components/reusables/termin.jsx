export const Anfrage = () => {
    return(
        <form className="formContainer" action="mailto:martinkr90@googlemail.com" method="post">
            <input type="email" name="E-mail" placeholder="example@mail.com" required />
            <input type="text" name="Name" placeholder="Max Mustermann" required />
            <textarea name="Message" id="" cols="30" rows="10" placeholder="" required></textarea>
            <p>
                Manchmal sagt ein Bild mehr als 1000 Worte. Zeigen Sie uns die Fläche um die es geht. 
            </p>
            <a href="mailto:martinkr90€googlemail.com">TEST</a>
            <button type="submit" >Unverbindliche Anfrage Senden</button>
        </form>
    )
}