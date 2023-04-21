import { useParams } from "react-router";
import { CardContainer } from "./cardcontainer"

export const ServiceSubPage = () => {
    const params = useParams()

    const serviceImages = {
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-between"
    }

    const imgContainer = {
        width: "32%",
        minWidth: "40rem",
        height: "auto",
        margin: "1rem 0",
    }

    switch (params.service) {
        case "bodenfliesen":
            return(
                <article>                     
                    <div>
                        <p>Bodenbeläge</p>
                    </div>
                    <div style={serviceImages}>
                        <div style={imgContainer}>
                            <img src="/boden/boden0.jpg" alt="Bodenfliese 50x50 antrazit" style={{width: "100%", borderRadius: "2.5rem"}} />
                        </div>
                        <div style={imgContainer}>
                            <img src="/boden/marmorfliesen.jpg" alt="Bodenfliese 15x15 Marmor weiß" style={{width: "100%", borderRadius: "2.5rem"}} />
                        </div>
                        <div style={imgContainer}>
                            <img src="/boden/dunkelgrauer-mosaikfliesen.jpg" alt="Bodenfliese Antrazit Trapez" style={{width: "100%", borderRadius: "2.5rem"}} />
                        </div>
                    </div>  
                </article>
            )
        case "wandfliesen":
            return(
                <article>                     
                    <div>
                        <p>Wandgestaltung</p>
                    </div>
                    <div style={serviceImages}>
                        <div style={imgContainer}>
                            <img src="/wand/wand_main.jpg" alt="Wandfliese 60x30 Sandstein" style={{width: "100%", borderRadius: "2.5rem"}} />
                        </div>
                        <div style={imgContainer}>
                            <img src="/wand/wandBad.jpg" alt="Wandfliese 60x30 Holzoptik" style={{width: "100%", borderRadius: "2.5rem"}} />
                        </div>
                        <div style={imgContainer}>
                            <img src="/wand/wandBad2.jpg" alt="Wandfliese 30x30 Dachschräge weiß" style={{width: "100%", borderRadius: "2.5rem"}} />
                        </div>
                        <div style={imgContainer}>
                            <img src="/wand/wandBad3.jpg" alt="Wandfliese 60x20 Weiß Wellenmuster" style={{width: "100%", borderRadius: "2.5rem"}} />
                        </div>
                        <div style={imgContainer}>
                            <img src="/wand/Weis-Walnussdekor.png" alt="Wandfliesen Muster Trapez Weiß und Walnuss mix" style={{width: "100%", borderRadius: "2.5rem"}} />
                        </div>
                        <div style={imgContainer}>
                            <img src="/wand/kuecherueckwand.jpg" alt="Wandfliese 120x30 Marmor Schwarz" style={{width: "100%", borderRadius: "2.5rem"}} />
                        </div>
                        <div style={imgContainer}>
                            <img src="/wand/hexagon-marmorfliesen.jpg" alt="Wandfliese Hexagon Marmor" style={{width: "100%", borderRadius: "2.5rem"}} />
                        </div>
                        <div style={imgContainer}>
                            <img src="/wand/saunaraum.jpg" alt="Wandfliese 40x30 Holzoptik Edel Sauna" style={{width: "100%", borderRadius: "2.5rem"}} />
                        </div>
                    </div>  
                </article>
            )
        case "ausenfliesen":
            return(
                <article>                     
                    <div>
                        <p>Wandgestaltung</p>
                    </div>
                    <div style={serviceImages}>
                        <div style={imgContainer}>
                            <img src="/aussen/aussen_main.jpg" alt="Naturstein Grundstückseingang" style={{width: "100%", borderRadius: "2.5rem"}} />
                        </div>
                    </div>  
                </article>
                )
        case "sannierung":
            return(
                <article>
                        <div>
                            <p>Sannierungsarbeiten</p>
                            <p>Hier wird noch gearbeitet!</p>
                        </div>
                        <div>
                            <img src="/baustelle.jpg" alt="" />
                        </div> 
                </article>
                )
        case "special":
            return(
                <article>                     
                    <div>
                        <p>Think out of the Box</p>
                    </div>
                    <div style={serviceImages}>
                        <div style={imgContainer}>
                            <img src="/special/kamin1.jpg" alt="Kamin Feuerstelle" style={{width: "100%", borderRadius: "2.5rem"}} />
                        </div>
                        <div style={imgContainer}>
                            <img src="/special/kamin2.jpg" alt="Kamin Verkleidung" style={{width: "100%", borderRadius: "2.5rem"}} />
                        </div>
                        <div style={imgContainer}>
                            <img src="/special/kamin_main.jpg" alt="Kamin Grundplatte" style={{width: "100%", borderRadius: "2.5rem"}} />
                        </div>
                        <div style={imgContainer}>
                            <img src="/special/outofthebox.png" alt="Bild aus Mosaik" style={{width: "100%", borderRadius: "2.5rem"}} />
                        </div>
                    </div>  
                </article>
                )
        case "genossenschaft":
            return(
                <article>                     
                    <div>
                        <p>Mehrfamilienhaus/Hotel/Genossenschaft</p>
                    </div>
                    <div style={serviceImages}>
                        <div style={imgContainer}>
                            <img src="/hotel/lobby_main.jpg" alt="Hotellobby" style={{width: "100%", borderRadius: "2.5rem"}} />
                        </div>
                        <div style={imgContainer}>
                            <img src="/hotel/lounge.jpg" alt="Hotel Eingangsbereich" style={{width: "100%", borderRadius: "2.5rem"}} />
                        </div>
                    </div>  
                </article>
                )
        default:
            return(
                <article>
                    <div className="error">
                        ERROR 404
                        <p>keine Seite gefunden!</p>
                    </div>   
                </article>
            )
            break;
    }

    console.log("ServiceSubPages found!", params)
}