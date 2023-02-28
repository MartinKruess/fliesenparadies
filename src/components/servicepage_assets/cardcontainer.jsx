import { ServiceCard } from "./serviceCard"

export const CardContainer = () => {

    const privatServices = [
        // Privat- und Einzelaufträge
        {
            img: "sCard1",
            title: "Bodenbeläge",
            text: "Küchen, Bäder, Flure und Saunen",
            size: "small",
        },
        {
            img: "sCard2",
            title: "Wandgestaltung",
            text: "Wohn- & Arbeitszimmer in klassisch Schick",
            size: "small",
        },
        {
            img: "sCard3",
            title: "Außenbereich",
            text: "Terrassen, Balkone und Pools",
            size: "small",
        },

        // Sannierungen
        {
            img: "mCard1",
            title: "Sannierungsarbeiten",
            text: "Reperaturen & optische Aufwertungen",
            size: "medium",
        },
        {
            img: "mCard2",
            title: "Überfliesen",
            text: "Eine schnelle und saubere Lösung",
            size: "medium",
        },
        {
            img: "mCard3",
            title: "Mosaikmuster & Sonderanfertigungen",
            text: "Think out of the Box",
            size: "large",
        },
        
        // Mehrfamilienhaus, Groß- und Geschäftsaufträge
        {
            img: "lCard1",
            title: "Mehrfamilienhaus / Genossenschaften",
            text: "Treppenhäuser, Küchen, Bäder & mehr",
            size: "large",
        },
        {
            img: "lCard2",
            title: "Großraumsannierung",
            text: "Eingangshallen, Schwimmbäder, Umkleiden",
            size: "large",
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
                    <h3>So finden wir gemeinsam einen Lösung</h3>
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
            <h2>Aus Alt mach Neu</h2>
            {privatServices.filter(serv => serv.size === "medium").map((service, i,) => (
                <ServiceCard key={i} service={service}/>
            ))
            }

            <h2>Wir könne auch <span>groß!</span></h2>
            {privatServices.filter(serv => serv.size === "large").map((service, i,) => (
                <ServiceCard key={i} service={service}/>
            ))
            }
        </article>
    )
}