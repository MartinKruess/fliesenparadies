import { useParams } from "react-router";
import { CardContainer } from "./cardcontainer"

export const ServiceSubPage = () => {
    const params = useParams()
    switch (params.service) {
        case "boden":
            return(
                <section className="service">
                    <aside>
                        <CardContainer />
                    </aside>
                    <article>
                        Bodenbeläge
                    </article>    
                </section>
            )
        case "wand":
            return(
            <section>
                    <div>
                        Wandgestaltung
                    </div>    
            </section>
            )
        case "ausen":
            return(
                <section>
                        <div>
                            Außenbereich
                        </div>    
                </section>
                )
        case "rep":
            return(
                <section>
                        <div>
                            Sannierungsarbeiten
                        </div>    
                </section>
                )
        case "special":
            return(
                <section>
                        <div>
                            Think out of the Box
                        </div>    
                </section>
                )
        case "genossenschaft":
            return(
                <section> 
                        <div>
                            Mehrfamilienhaus / Genossenschaften
                        </div>    
                </section>
                )
        case "repbig":
            return(
                <section>
                        <div>
                            Großraumsannierung
                        </div>    
                </section>
                )
        default:
            return(
                <section>
                    <div>
                        404 keine Seite gefunden!
                    </div>    
                </section>
            )
            break;
    }

    console.log("ServiceSubPages found!", params)
}