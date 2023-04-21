import { useEffect, useState } from "react"


export const TopCarousel = (props) => {
    const [index, setIndex] = useState(0)
    const images = [
        {
            name: "Headerbild01.jpg",
            header: "Das Team!",
            width: "20rem",
        },
        {
            name: "services.png",
            header: "",
            width: "0",
        },
        {
            name: "header.jpg",
            header: "Familienbetrieb Voß",
            width: "33rem",
        },
        {
            name: "jobs.png",
            header: "Wir suchen Dich!",
            width: "28rem",
        },
    ]

    useEffect(() =>{
        setIndex(props.id)
    },[index])

    console.log("Index:", index)

    return(
        <article>
            <div className="carouselContainer">
                <img src={images[index].name} alt="Titlebild" />
                {images[index].header &&
                <div className="textContainer" style={{minWidth: images[index].width}}>
                    <h1><strong>{images[index].header}</strong></h1>
                </div>}
            </div>
        </article>
    )
}