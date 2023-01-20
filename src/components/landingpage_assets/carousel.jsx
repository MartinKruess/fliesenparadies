import { useState } from "react"


export const TopCarousel = () => {
    const [index, setIndex] = useState(0)
    const images = [
        {
            name: "Headerbild01.jpg",
            header: "Das Team!",
            text: "",
            width: "20rem",
        },
        {
            name: "Headerbild02.jpg",
            header: "Hochwertige Arbeit",
            text: "Wo Schlichtheit auf Stil trifft.",
            width: "30rem",
        },
        {
            name: "Headerbild03.jpg",
            header: "3D-Badplanung",
            text: "Keine Grenzen, wenn Traum auf Wirklichkeit trifft",
            width: "30rem"
        },
    ]

    let id = 0
    

    return(
        <article>
            <div className="carouselContainer">
                <img src={images[id].name}/>
                <div className="textContainer" style={{minWidth: images[id].width}}>
                    <h1><strong>{images[id].header}</strong></h1>
                    <p>{images[id].text}</p>
                </div>
                
            </div>
        </article>
    )
}