import { useEffect, useState } from "react"


export const TopCarousel = (props) => {
    const [index, setIndex] = useState(0)
    const images = [
        
        {
            name: "Headerbild01.jpg",
            header: "Das Team!",
            text: "",
            width: "30rem",
        },
        {
            name: "services.png",
            header: "",
            text: "",
            width: "35rem",
        },
        {
            name: "header.jpg",
            header: "Familienbetrieb Voß",
            text: "",
            width: "25rem",
        },
        {
            name: "jobs.png",
            header: "Wir suchen Dich!",
            text: "",
            width: "30rem",
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
                    <p>{images[index].text}</p>
                </div>}
            </div>
        </article>
    )
}