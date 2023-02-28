import { useParams } from "react-router";
import { CardContainer } from "./cardcontainer"

export const ServiceSubPage = () => {
    const params = useParams()
    switch (params.service) {
        case "Bodenbeläge":
            return(
                <section>
                    <CardContainer />
                    <div>
                        TEST
                    </div>    
                </section>
            )
        case "Wandgestaltung":
            return(
            <section>
                    
                    <div>
                        TEST 123
                    </div>    
            </section>
            )
        case "Außenbereich":
            
            break;
        case "Kaminverkleidung":
            
            break;
        case "Sannierungsarbeiten":
            
            break;
        case "Überfliesen":
            
            break;
        case "Think out of the Box":
            
            break;
        case "Mehrfamilienhaus / Genossenschaften":
            
            break;
        case "Großraumsannierung":
            
            break;

        default:
            return(
                <section>
                    <div>
                        404
                    </div>    
                </section>
            )
            break;
    }

    console.log("ServiceSubPages found!", params)
}