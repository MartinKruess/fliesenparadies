import { ServiceCard } from "./serviceCard"

export const CardContainer = () => {

    const privatServices = [
        // Privat- und Einzelaufträge
        {
            img: "sCard1",
            title: "Bodenbeläge",
            text: "Küchen, Bäder & Flure",
            size: "small",
        },
        {
            img: "sCard2",
            title: "Wandgestaltung",
            text: "Wohn- & Arbeitszimmer in classisch Schick",
            size: "small",
        },
        {
            img: "sCard3",
            title: "Außenbereich",
            text: "Terrassen, Balkone, Pools und Saunen",
            size: "small",
        },
        {
            img: "sCard4",
            title: "Kaminverkleidung",
            text: "Kaminöfen für das gemütliche Ambiente",
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
            title: "Think out of the Box",
            text: "Mosaikmuster & Sonderanfertigungen",
            size: "medium",
        },
        
        // Mehrfamilienhaus, Groß- und Geschäftsaufträge
        {
            img: "lCard1",
            title: "Mehrfamilienhaus / Genossenschaften",
            text: "Hausflure, Küchen, Bäder & mehr",
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
                <p>
                    Planen Sie mit unserem 3D-Planer Ihr neues Projekt.
                </p>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui aperiam vel modi tenetur voluptatem? Ipsum perspiciatis ab consectetur sit necessitatibus eligendi quisquam impedit aliquid ex ipsa, distinctio, deleniti reiciendis suscipit.
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