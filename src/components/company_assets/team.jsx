import { useEffect, useState } from "react"
import { teammitglieder } from "../BEARBEITEN/teammitglieder"
import { History } from "./history"
import { SinglePreview } from "./singlepreview"

export const Team = () => {
  const [menu, setMenu] = useState('team')
  const activeStyle = {backgroundColor: "var(--company)", color: "var(--primary)"}
  const inactiveStyle = {backgroundColor: "transparent", color: "var(--secondary)"}

  useEffect(() => {

  }, [menu])


    return(
        <article className="teamSinglePreview">
            <div className="switchMenu">
              <div onClick={() => setMenu('team')}
              style={menu === 'team' ? activeStyle : inactiveStyle} >Unser Team</div>
              <div onClick={() => setMenu('history')}
              style={menu === 'history' ? activeStyle : inactiveStyle} >Unsere Geschichte</div>
            </div>
            {menu === 'team' &&
            <>
              <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, tempore? Necessitatibus ipsum repellat quaerat, obcaecati qui accusantium blanditiis exercitationem explicabo debitis perferendis! Veritatis distinctio recusandae adipisci repudiandae ducimus reiciendis sunt.
              </p>
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
            </>}

            {menu === 'history' &&
            <>
              <History />
            </>}
        </article>
    )
}