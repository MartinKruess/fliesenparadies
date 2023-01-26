import ReactCurvedText from "react-curved-text";

export const SinglePreview = (props) => {
    return(
        <div className="previesContainer">
            <div className="personalImage">
                <div className="personalName">
                    {props.mitglied.name}<br />
                    {props.mitglied.titel}
                </div>
                <img src={props.mitglied.bild} alt="" />
            </div>
        </div>
    )
}