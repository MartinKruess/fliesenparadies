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
                  
              </p>
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
            </>}

            {menu === 'history' &&
            <>
              <History />
            </>}
        </article>
    )
}