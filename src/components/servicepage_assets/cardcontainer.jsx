import { ServiceCard } from "./serviceCard"

export const CardContainer = () => {

    const privatServices = [
        // Privat- und Einzelaufträge
        {
            img: "pcard1",
            title: "Bodenbeläge",
            text: "Bäder, Küchen, Flure Saunen und Pools",
            size: "small",
        },
        {
            img: "pcard2",
            title: "Wandgestaltung",
            text: "Flure, Wohn und Arbeitszimmer",
            size: "small",
        },
        {
            img: "pcard3",
            title: "Außenbereich",
            text: "Terrassen, Balkone, Pools und Saunen",
            size: "small",
        },
        {
            img: "pcard4",
            title: "Sannierungsarbeiten",
            text: "Wir bessern auch aus",
            size: "small",
        },
        {
            img: "pcard5",
            title: "Überfliesen",
            text: "Eine schnelle und saubere Lösung",
            size: "small",
        },
        {
            img: "pcard6",
            title: "Think out of the Box",
            text: "Ob Mosaikmuster oder Sonderanfertigungen",
            size: "small",
        },
        // Mehrfamilienhaus, Groß- und Geschäftsaufträge
        {
            img: "gcard1",
            title: "Mehrfamilienhaus / Genossenschaften",
            text: "Ob Mosaikmuster oder Sonderanfertigungen",
            size: "company",
        },
        {
            img: "gcard2",
            title: "Großraumsannierung",
            text: "Eingangshallen, Schwimmbäder, Umkleiden",
            size: "company",
        },
        {
            img: "gcard3",
            title: "Think out of the Box",
            text: "Innovatieve Ideen fordern ein innovatives Team",
            size: "company",
        },
    ]

    return (
        <article className="cardConatiner">
            <div>
                <p>
                    Planen Sie mit unserem 3D-Badplaner Ihr Projekt.
                </p>
                <p>
                    Gern planen wir mit Ihnen gemeinsam Ihr nächstes Projekt.
                </p>
            </div>
            
            <h2>Für das idyllische Zuhause</h2>
            {privatServices.filter(serv => serv.size === "small").map((service, i,) => (
                <ServiceCard key={i} service={service}/>
            ))
            }

            <h2>Wir könne auch <span>groß!</span></h2>
            {privatServices.filter(serv => serv.size === "company").map((service, i,) => (
                <ServiceCard key={i} service={service}/>
            ))
            }
        </article>
    )
}