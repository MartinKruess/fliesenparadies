import { ServiceCard } from "./serviceCard"

export const CardContainer = () => {

    const privatServices = [
        {
            img: "card1",
            title: "Bodenbeläge",
            text: "Bäder, Küchen, Saunen und Pools",
            size: "small",
        },
        {
            img: "card2",
            title: "Wandgestaltung",
            text: "Wohnzimmer und Flure",
            size: "small",
        },
        {
            img: "card3",
            title: "Außenbereich",
            text: "Gern planen wir mit Ihnen gemeinsam Ihre Terasse, Balkon oder Loggia und mehr.",
            size: "small",
        },
        {
            img: "card4",
            title: "Sannierungsarbeiten",
            text: "Wir bessern auch aus und Fliese auf Fliese",
            size: "small",
        },
        {
            img: "card1",
            title: "Innovative Ideen",
            text: "Think out of the Box.",
            size: "medium",
        },
        {
            img: "card2",
            title: "Mehrfamilienhaus",
            text: "Grundsannierungen aller Bäder im Haus",
            size: "medium",
        },
        {
            img: "card3",
            title: "Mehrfamilienhaus",
            text: "Wanfvertäfelung im ganzen Hausflur",
            size: "medium",
        },
        {
            img: "card4",
            title: "Bäder und Saunalandschaften",
            text: "Think out of the Box.",
            size: "medium",
        },
        
    ]

    return (
        <article className="cardConatiner">
            <h2>Für das idyllische Zuhause</h2>
            {privatServices.filter(serv => serv.size === "small").map((service, i,) => (
                <ServiceCard key={i} service={service}/>
            ))
            }

            <h2>Wir könne auch <span>groß!</span></h2>
            {privatServices.filter(serv => serv.size === "medium").map((service, i,) => (
                <ServiceCard key={i} service={service}/>
            ))
            }
        </article>
    )
}