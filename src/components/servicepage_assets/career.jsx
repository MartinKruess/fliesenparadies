import { Link } from "react-router-dom"
import { ServiceSubPage } from "./servicesubpage"

export const ServiceCard = (props) => {
    console.log(props)
    return(
        <div className="servicecard" id={props.service.img}onClick={() => ServiceSubPage(props.service.title)}>
            <Link to={"/service/" + props.service.title}>
                <div className="cardTextblock">
                    <h3>{props.service.title}</h3>
                    <p>{props.service.text}</p>
                </div>
            </Link>
            
            
        </div>
    )
}