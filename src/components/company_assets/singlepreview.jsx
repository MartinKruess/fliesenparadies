import ReactCurvedText from "react-curved-text";

export const SinglePreview = (props) => {
    return(
        <div className="previesContainer">
            <div className="personalImage">
                <div className="personalName">
                    {props.mitglied.name}<br />
                    <span>{props.mitglied.titel}</span>
                </div>
                <img src={props.mitglied.bild} alt="" />
            </div>
        </div>
    )
}