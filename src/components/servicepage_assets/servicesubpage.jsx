import { CardContainer } from "./cardcontainer"

export const ServiceSubPage = (title) => {

    switch (title) {
        case "Bodenbeläge":
            return(
                <section>
                    <CardContainer />
                    <div>
                        TEST
                    </div>    
                </section>
            )
            break;
        case "Wandgestaltung":
            
            break;
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
            break;
    }

    console.log("ServiceSubPages found!")


    
}