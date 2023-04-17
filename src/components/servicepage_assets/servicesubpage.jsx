import { useParams } from "react-router";
import { CardContainer } from "./cardcontainer"

export const ServiceSubPage = () => {
    const params = useParams()
    switch (params.service) {
        case "bodenfliesen":
            return(
                <section className="service">                     
                    <div>
                        <p>Bodenbeläge</p>
                        <p>Hier wird noch gearbeitet!</p>
                    </div>
                    <div className="serviceImages">
                        <img src="/boden/boden0.jpg" alt="" />
                        <img src="/boden/marmorfliesen.jpg" alt="" />
                        <img src="/boden/dunkelgrauer-mosaikfliesen.jpg" alt="" />
                    </div>  
                </section>
            )
        case "wandfliesen":
            return(
                <section>    
                    <div>
                        <p>Wandgestaltung</p>
                        <p>Hier wird noch gearbeitet!</p>
                    </div>
                    <div>
                        <img src="/baustelle.jpg" alt="" />
                    </div> 
                </section>
            )
        case "ausenfliesen":
            return(
                <section>
                        <div>
                            <p>Außenbereich</p>
                            <p>Hier wird noch gearbeitet!</p>
                        </div>
                        <div>
                            <img src="/baustelle.jpg" alt="" />
                        </div> 
                </section>
                )
        case "sannierung":
            return(
                <section>
                        <div>
                            <p>Sannierungsarbeiten</p>
                            <p>Hier wird noch gearbeitet!</p>
                        </div>
                        <div>
                            <img src="/baustelle.jpg" alt="" />
                        </div> 
                </section>
                )
        case "special":
            return(
                <section>
                        <div>
                            <p>Think out of the Box</p>
                            <p>Hier wird noch gearbeitet!</p>
                        </div>
                        <div>
                            <img src="/baustelle.jpg" alt="" />
                        </div> 
                </section>
                )
        case "genossenschaft":
            return(
                <section> 
                        <div>
                            <p>Mehrfamilienhaus / Genossenschaften</p>
                            <p>Hier wird noch gearbeitet!</p>
                        </div>
                        <div>
                            <img src="/baustelle.jpg" alt="" />
                        </div> 
                </section>
                )
        default:
            return(
                <section>
                    <div className="error">
                        ERROR 404
                        <p>keine Seite gefunden!</p>
                    </div>   
                </section>
            )
            break;
    }

    console.log("ServiceSubPages found!", params)
}