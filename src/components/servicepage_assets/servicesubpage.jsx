import { useParams } from "react-router";
import { CardContainer } from "./cardcontainer"

export const ServiceSubPage = () => {
    const params = useParams()
    switch (params.service) {
        case "bodenfliesen":
            return(
                <article>                     
                    <div>
                        <p>Bodenbeläge</p>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita inventore magnam perspiciatis iste ad vel eos voluptas sint numquam facilis reiciendis delectus repellat consectetur, eligendi commodi in adipisci praesentium tenetur quos veniam neque corporis? Veniam ea quidem inventore nulla, minus ipsa qui accusamus, rerum iusto vero expedita suscipit dignissimos totam.</p>
                    </div>
                    <div className="serviceImages">
                        <div>
                            <img src="/boden/boden0.jpg" alt="" />
                            <span>
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reprehenderit quasi enim sunt ducimus. Blanditiis, quia temporibus praesentium laboriosam odit quisquam accusamus corporis cum quidem recusandae hic alias reiciendis ipsam officiis!
                            </span>
                        </div>
                        <div>
                            <img src="/boden/marmorfliesen.jpg" alt="" />
                        </div>
                        <div>
                            <img src="/boden/dunkelgrauer-mosaikfliesen.jpg" alt="" />
                        </div>
                    </div>  
                </article>
            )
        case "wandfliesen":
            return(
                <article>    
                    <div>
                        <p>Wandgestaltung</p>
                        <p>Hier wird noch gearbeitet!</p>
                    </div>
                    <div>
                        <img src="/baustelle.jpg" alt="" />
                    </div> 
                </article>
            )
        case "ausenfliesen":
            return(
                <article>
                        <div>
                            <p>Außenbereich</p>
                            <p>Hier wird noch gearbeitet!</p>
                        </div>
                        <div>
                            <img src="/baustelle.jpg" alt="" />
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
                            <p>Hier wird noch gearbeitet!</p>
                        </div>
                        <div>
                            <img src="/baustelle.jpg" alt="" />
                        </div> 
                </article>
                )
        case "genossenschaft":
            return(
                <article> 
                        <div>
                            <p>Mehrfamilienhaus / Genossenschaften</p>
                            <p>Hier wird noch gearbeitet!</p>
                        </div>
                        <div>
                            <img src="/baustelle.jpg" alt="" />
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