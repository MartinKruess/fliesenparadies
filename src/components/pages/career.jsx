import { useState } from "react"
import { TopCarousel } from "../landingpage_assets/carousel"

export const CareerPage = () => {
    const [toggle, setToggle] = useState('base')
    const activeStyle = {backgroundColor: "var(--company)", color: "var(--primary)"}
    const inactiveStyle = {backgroundColor: "transparent", color: "var(--secondary)"}

    const handleToggle = (newToggle) => {
        setToggle(newToggle)
    }

    return(
        <section>
            <TopCarousel id={2} />
            <article>
                <div className="careerMenu">
                    <div onClick={() => handleToggle('base')}
                    style={toggle === 'base' ? activeStyle : inactiveStyle} >Das Handwerk</div>
                    <div onClick={() => handleToggle('jobs')}
                    style={toggle === 'jobs' ? activeStyle : inactiveStyle} >Jobs</div>
                    <div onClick={() => handleToggle('azubi')}
                    style={toggle === 'azubi' ? activeStyle : inactiveStyle} >Ausbildungsplätze</div>
                </div>
                <div className="careerContainer">
                    {toggle === 'base' &&
                        <div className="careerBase">
                            <h1>Wir suchen Verstärkung!</h1>
                            <div className="jobContent">
                                <div className="jobImg">
                                    <img src="/fliesenleger_job.jpg" alt="" />
                                </div>
                                <ul className="azubiText">
                                    <h2>Was macht eigentlich ein Fliesenleger?</h2>
                                    <li>
                                        Als Fliesen-, Platten- und Mosaikleger verkleidest du Böden, Wände und Fassaden mit den unterschiedlichsten Belägen, wie Glas, Keramik, Natur- oder Kunststein.
                                    </li>
                                    <li></li>
                                    <li>
                                        Sie beraten Kunden bei der Wahl des Materials und skizzieren den sogenannten Verlegeplan, welcher die genaue Anordnung der Fliesen, Platten oder Mosaike festlegt. Auch die Randabschlüsse werden im Vorhinein nach Plan zurechtgeschnitten, sodass sich das zu verlegende Material beim Verlegen exakt ineinander fügt.
                                    </li>
                                </ul>
                                <ul className="azubiText full">
                                    <h2>Wie sieht der Berufsalltag als Fliesenleger aus?</h2>
                                    <li>
                                        Die Tätigkeit als Fliesenleger ist körperlich anspruchsvoll, denn du musst dein Material tragen und heben, arbeitest außerdem oft gebückt, auf den Knien oder über Kopf.
                                    </li>
                                    <li></li>
                                    <li>
                                        Bei der Arbeit auf Baustellen bist du im Freien unterwegs und daher auch dem Wetter ausgesetzt. Oft trägst du Knieschoner, Handschuhe, Gehörschutz, Gesichtsmaske oder eine Schutzbrille, denn bei deiner Arbeit entstehen auch mal Staub oder Dämpfe.
                                    </li>
                                    <li></li>
                                    <li>
                                        Kundenkontakt fällt ebenfalls an, da du deine Kunden bei der Materialauswahl und der Gestaltung berätst. Dafür erwarten Fliesenleger größtenteils regelmäßige Arbeitszeiten: Du startest oft früh, bist dann aber auch früh wieder fertig.
                                    </li>
                                </ul>
                            </div>
                        </div>}
                    {toggle === 'jobs' &&
                        <div className="careerBase">
                            <h1>Wir suchen ambitionierte Mitarbeiter</h1>
                            <div className="jobContent">
                                <div className="jobImg">
                                    <img src="/jobsuche.png" alt=""/>
                                </div>
                                <p></p>
                                <ul>
                                    <h2>Dein Profil</h2>
                                    <li>
                                        Du hast einen Gesellenbrief als Fliesen-, Platten- und Mosaikleger (w/m/d) in der Tasche oder eine vergleichbare handwerkliche Ausbildung abgeschlossen.
                                    </li>
                                    <li>
                                        Zusätzlich hast Du Berufserfahrung im Fliesenlegerhandwerk gesammelt und auch in angrenzenden Gewerken wie Betonbau, Rohbau, Mauerwerk etc. gearbeitet.
                                    </li>
                                    <li>
                                        Eine ergebnisorientierte und qualitätsbewusste Arbeitsweise zeichnet dich aus.
                                    </li>
                                    <li>
                                        Im Umgang mit unseren Kunden zeigst du dich korrekt und dienstleistungsorientiert.
                                    </li>
                                    <li>
                                        Du arbeitest selbstständig, aber auch gern im Team.
                                    </li>
                                    <li>
                                        Für deine Einsätze im Großraum Hamburg/Schleswig Holstein benötigst du einen Pkw-Führerschein.
                                    </li>
                                </ul>
                                <ul>
                                    <h2>Das bieten wir</h2>
                                    <li>
                                        Eine abwechslungsreiche und interessante Tätigkeit in einem familiären Arbeitsumfeld
                                    </li>
                                    <li>
                                        Eigenverantwortliches Arbeiten und ein hoher Grad an Flexibilität bei der Aufgabenerfüllung
                                    </li>
                                    <li>
                                        Ein sehr gutes Arbeitsklima in einem engagierten und motivierten Team
                                    </li>
                                    <li>
                                        Erweiterung der fachspezifischen Kenntnisse durch kontinuierliche Weiterbildung
                                    </li>
                                    <li>
                                        Eine übertarifliche akkordorientierte Bezahlung
                                    </li>
                                </ul>
                            </div>
                        </div>}
                    {toggle === 'azubi' &&
                        <div className="careerBase">
                        <h1>Die Ausbildung zum Fliesen-, Platten- und Mosaikleger (m,w,d)</h1>
                        <div className="jobContent">
                            <div className="jobImg">
                                <img className="azubiIMG" src="/azubi.jpg" alt="" />
                            </div>
                            <ul className="azubiText side">
                                <h2>Wie läuft die Ausbildung ab?</h2>
                                <li>
                                    Die Ausbildung zum Fliesenleger ist eine Duale Ausbildung, das bedeutet du bist abwechselnd im Betrieb und der Berufsschule. Im Betrieb erlernst du die praktischen Fähigkeiten des Berufes kennen und übernimmst konkrete Aufgaben. Das theoretische Hintergrundwissen wird dir in der Berufsschule vermittelt.
                                </li>
                                <li className="spacer"></li>
                                <li>
                                    Während deiner Ausbildung musst du als Ausbildungsnachweis ein Berichtsheft über deine Aufgaben und Tätigkeiten führen. Dein Ausbilder überprüft dein Berichtsheft regelmäßig.
                                </li>
                                <li className="spacer"></li>
                                <li>
                                    Nach Ende des 1. Ausbildungsjahres absolvierst du eine Zwischenprüfung. Am Ende der Ausbildung legst du die Abschluss-/Gesellenprüfung ab. Diese besteht aus einem praktischen und einem schriftlichen Teil.
                                </li>
                                <li className="spacer"></li>
                                <li className="anzeige">
                                    <div>
                                        <i className="fa-solid fa-trowel"></i>
                                        <p>Duale Ausbildung </p>
                                    </div>
                                    <div>
                                        <i className="fa-solid fa-clock"></i>
                                        <p>3 Jahre, Verkürzung auf 2-2,5 Jahre möglich</p>
                                    </div>
                                    <div>
                                        <i className="fa-solid fa-sack-dollar"></i>
                                        <p>840-1450 €</p>
                                    </div>
                                </li>
                                <li className="spacer"></li>
                            </ul>
                            <ul className="azubiText full">
                                <h2>Was lernt man in der Ausbildung?</h2>
                                <li>
                                    Die duale Ausbildung zum Fliesen-, Platten- und Mosaikleger ist vielseitig und bereitet dich auf den anspruchsvollen Berufsalltag vor. Im Ausbildungsbetrieb lernst du, wie du die Baustelle richtig vorbereitest und einrichtest, wie du korrekt mit Werkzeugen und Baumaschinen umgehst und wie du Mörtel oder Estrich richtig anmischst. Außerdem lernst du natürlich, wie du Wand- und Bodenfliesen verlegst. 
                                </li>
                                <li className="spacer"></li>
                                <li>
                                    Die Berufsschule umfasst allgemeinbildende Fächer wie Deutsch, Religion oder Sport, aber auch berufsspezifische Lernfelder. Hier lernst du auch, wie Schwimmbäder gefliest und Terrassenplatten verlegt werden. Außerdem gehören Dämmungen und das Belegen von speziellen Konstruktionen wie Treppen, Säulen oder Bögen zu den Unterrichtsinhalten.
                                </li>
                            </ul>
                            <div className="full">
                                <h2>Voraussetzungen für die Ausbildung!</h2>
                                <div className="skillBox">
                                    <div className="skills">
                                        <h3>Schulfächer</h3>
                                        <p>
                                            Physik
                                        </p>
                                        <p>
                                            Mathe
                                        </p>
                                        <p>
                                            Werken & Technik
                                        </p>
                                    </div>
                                    <div className="skills">
                                        <h3>Deine Stärken</h3>
                                        <p>
                                            Handwerkliches- & technisches Geschick
                                        </p>
                                        <p>
                                            Selbstständiges Arbeiten
                                        </p>
                                        <p>
                                            Sorgfalt & Genauigkeit
                                        </p>
                                    </div>
                                    <div className="skills">
                                        <h3>Arbeitsbedingungen</h3>
                                        <p>
                                            Feste Arbeitszeiten
                                        </p>
                                        <p>
                                            Umfeld: Baustelle
                                        </p>
                                        <p>
                                            Körperliche Tätigkeit
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>}
                </div>
            </article>
        </section>
        
        
    )
}