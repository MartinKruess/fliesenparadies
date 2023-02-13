import { Link } from "react-router-dom"

export const Footer = () => {
    return(
        <footer>
            <div className="footContainer">
                <div className="footerLeft">
                    <div>
                        Fliesenparadies K.-H. Voß GmbH <br />
                        Werner-von-Siemens-Str. 9 <br />
                        25479 Ellerau <br /> <br />
                    </div>
                    <div>
                        Telefon: 04106 / 7 16 44 <br />
                        Fax: 04106 / 7 49 47 <br />
                        E-Mail: khv@fliesenparadies-voss.de <br />
                    </div>
                </div>
                <div className="footerBottom">
                    <div><img src="/zertifikat_fachverband.jpg" alt="" /></div>
                    <div><img src="/zertifikat_meisterhaft.jpg" alt="" /></div>
                    <div><img src="/zertifikat_partner.png" alt="" /></div>
                </div>
                <div className="footerBottom">
                    <div><Link to="/impressum">Impressum</Link> </div>
                    <div><Link to="/datenschutz">Datenschutz</Link></div>
                    <div></div>
                </div>
            </div>
        </footer>
    )
}