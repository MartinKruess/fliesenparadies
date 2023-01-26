export const ServiceCard = (props) => {
    console.log(props)
    return(
        <div className="servicecard" id={props.service.img}>
            
            <div className="cardTextblock">
                <h3>{props.service.title}</h3>
                <p>{props.service.text}</p>
            </div>
        </div>
    )
}