import { ServiceCard } from "./serviceCard"

export const CardContainer = () => {

    const privatServices = [
        // Privat- und Einzelaufträge
        {
            img: "sCard1",
            title: "Bodenbeläge",
            group: "bodenfliesen",
            text: "Küchen, Bäder, Flure und Saunen",
            size: "small",
        },
        {
            img: "sCard2",
            title: "Wandgestaltung",
            group: "wandfliesen",
            text: "Wohn- & Arbeitszimmer in klassisch Schick",
            size: "small",
        },
        {
            img: "sCard3",
            title: "Außenbereich",
            group: "ausenfliesen",
            text: "Terrassen, Balkone und Pools",
            size: "small",
        },

        // Sannierungen
        {
            img: "mCard3",
            title: "Mosaikmuster / Sonderanfertigungen",
            group: "special",
            text: "Think out of the Box",
            size: "medium",
        },
        {
            img: "lCard2",
            title: "Großraumsannierung",
            group: "sannierung",
            text: "Eingangshallen, Schwimmbäder, Umkleiden",
            size: "medium",
        },
        // Mehrfamilienhaus, Groß- und Geschäftsaufträge
        {
            img: "lCard1",
            title: "Mehrfamilienhaus / Genossenschaften",
            group: "genossenschaft",
            text: "Treppenhäuser, Küchen, Bäder & mehr",
            size: "medium",
        },
    ]

    return (
        <article className="cardConatiner">
            <div>
                <h1>Gut geplant ist halb gebaut</h1>
                <p>
                    Der Erfolg Ihres Projektes entscheidet sich bereits in der Planungsphase. Durch gemeinsames Planen werden viele Komplikationen und Kommunikationsfehler bereits vor Baubegin vermieden. So finden wir die passende Lösung für Ihr persönliches Projekt. Dies spart bare Münze.
                </p>
                <ul className="list">
                    <h2>So finden wir gemeinsam einen Lösung</h2>
                    <li>Beratung</li>
                    <li>Vor Ort Analyse</li>
                    <li>Kalkulationen</li>
                    <li>Kostenvoranschlag</li>
                    <li>Wir finden gemeinsam eine Lösung</li>
                    <li>Umsetzung</li>
                </ul>
                <p>
                    Wir unterstützen Sie von der Planung bis zur Ausführung.
                </p>
            </div>
            
            <h2>Für das idyllische Zuhause</h2>
            {privatServices.filter(serv => serv.size === "small").map((service, i,) => (
                <ServiceCard key={i} service={service}/>
            ))
            }
            <h2>Sannierungs- und Ausbesserungsarbeiten</h2>
            {privatServices.filter(serv => serv.size === "medium").map((service, i,) => (
                <ServiceCard key={i} service={service}/>
            ))
            }
        </article>
    )
}