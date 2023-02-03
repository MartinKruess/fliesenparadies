import { useEffect, useState } from "react"


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

    
    // useEffect(() =>{
        
    // },[index])

    // setInterval(index < images.length-1 ? setIndex(index+1) : setIndex(0), 3000)

    console.log("Index:", index)

    return(
        <article>
            <div className="carouselContainer">
                <img src={images[index].name}/>
                <div className="textContainer" style={{minWidth: images[index].width}}>
                    <h1><strong>{images[index].header}</strong></h1>
                    <p>{images[index].text}</p>
                </div>
            </div>
        </article>
    )
}