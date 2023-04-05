import { Link } from "react-router-dom"

export const ServiceCard = (props) => {
    return(
        <div className="servicecard" id={props.service.img}>
            <Link to={"/service/" + props.service.group.toLowerCase()}>
                <div className="cardTextblock">
                    <h3>{props.service.title}</h3>
                    <p>{props.service.text}</p>
                </div>
            </Link>
        </div>
    )
}