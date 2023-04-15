import { teammitglieder } from "../BEARBEITEN/teammitglieder"
import { SinglePreview } from "./singlepreview"

export const Team = () => {

    return(
      <>
        <h2>Office Team/Projektleitung</h2>
        {teammitglieder.map((mitglied, i) => mitglied.gruppe.includes('Office') && (
            <SinglePreview key={i} mitglied={mitglied} />
          ))
        }
        {teammitglieder.map((mitglied, i) => mitglied.gruppe.includes('Projektleiter') && (
              <SinglePreview key={i} mitglied={mitglied} />
          ))
        }
        <h2>Unsere Fliesenleger</h2>
        {teammitglieder.filter(bauhelfer => bauhelfer.gruppe.includes('Fliesenleger')).map((mitglied, i) => (
            <SinglePreview key={i} mitglied={mitglied} />
          ))
        }
        <h2>Unsere Azubis</h2>
        {teammitglieder.map((mitglied, i) => mitglied.gruppe === "Azubi" && (
              <SinglePreview key={i} mitglied={mitglied} />
          ))
        }
        <h2>Unsere Bauhelfer</h2>
        {teammitglieder.filter(bauhelfer => bauhelfer.gruppe === "Bauhelfer").map((mitglied, i) => (
            <SinglePreview key={i} mitglied={mitglied} />
          ))
        }
        <h2>Partner</h2>
        {teammitglieder.filter(bauhelfer => bauhelfer.gruppe === "Partner").map((mitglied, i) => (
            <SinglePreview key={i} mitglied={mitglied} />
          ))
        }
      </>
    )
}