import { ServiceCard } from "./serviceCard"

export const CardContainer = () => {

    const privatServices = [
        {
            img: "card1",
            title: "Bodenbeläge",
            text: "Bäder, Küchen, Saunen und Pools"
        },
        {
            img: "card2",
            title: "Wandgestaltung",
            text: "Wohnzimmer und Flure"
        },
        {
            img: "card3",
            title: "Außenbereich",
            text: "Gern planen wir mit Ihnen gemeinsam Ihre Terasse, Balkon oder Loggia und mehr."
        },
        {
            img: "card4",
            title: "Innovative Ideen",
            text: "Think out of the Box."
        },
    ]

    return (
        <article className="cardConatiner">
            <h2>Für das idyllische Zuhause</h2>
            {privatServices.map((service, i,) => (
                <ServiceCard key={i} service={service}/>
            ))
            }

            <h2>Wir könne auch <span>groß!</span></h2>
        </article>
    )
}