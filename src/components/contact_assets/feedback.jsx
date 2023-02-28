export const Feedback = () => {
    return(
        <form className="formContainer" action="mailto:martinkr90@googlemail.com" method="post">
            <input type="text" name="Name" placeholder="Max Mustermann" required />
            <textarea name="Message" id="" cols="30" rows="10" placeholder="Ihr Feedback" required></textarea>
            <button type="submit" >Feedback Senden</button>
        </form>
    )
}