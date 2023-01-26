import { teammitglieder } from "../BEARBEITEN/teammitglieder"
import { SinglePreview } from "./singlepreview"

export const Team = () => {

    return(
        <article className="teamSinglePreview">
            <h1>Unser Team</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, tempore? Necessitatibus ipsum repellat quaerat, obcaecati qui accusantium blanditiis exercitationem explicabo debitis perferendis! Veritatis distinctio recusandae adipisci repudiandae ducimus reiciendis sunt.</p>
            <h2>Office Team/Projektleitung</h2>
            {teammitglieder.map((mitglied, i) => mitglied.titel.includes('Chef') && (
                    <SinglePreview key={i} mitglied={mitglied} />
              ))
            }
            {teammitglieder.map((mitglied, i) => mitglied.titel.includes('Projektleiter') && (
                    <SinglePreview key={i} mitglied={mitglied} />
              ))
            }
            <h2>Unsere Fliesenleger</h2>
            {teammitglieder.filter(bauhelfer => bauhelfer.titel.includes('Fliesen')).map((mitglied, i) => (
                <SinglePreview key={i} mitglied={mitglied} />
              ))
            }
            <h2>Unsere Bauhelfer</h2>
            {teammitglieder.filter(bauhelfer => bauhelfer.titel === "Bauhelfer").map((mitglied, i) => (
                <SinglePreview key={i} mitglied={mitglied} />
              ))
            }
            <h2>Unsere Azubis</h2>
            {teammitglieder.map((mitglied, i) => mitglied.titel === "Azubi" && (
                    <SinglePreview key={i} mitglied={mitglied} />
              ))
            }
        </article>
    )
}