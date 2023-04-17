import { TopCarousel } from "../landingpage_assets/carousel"
import { Team } from "../company_assets/team"
import { History } from "../company_assets/history"
import { useEffect, useState } from "react"

export const Company = () => {

    const [menu, setMenu] = useState(true)
    const activeStyle = {backgroundColor: "var(--company)", color: "var(--primary)"}
    const inactiveStyle = {backgroundColor: "transparent", color: "var(--secondary)"}

    useEffect(() => {
    
    }, [menu])

    return(
        <section>
             <TopCarousel id={2} />
             <article className="teamSinglePreview">
                <div className="switchMenu">
                    <div onClick={() => setMenu(true)}
                    style={menu ? activeStyle : inactiveStyle} >
                        Unser Team
                    </div>
                    <div onClick={() => setMenu(false)}
                    style={!menu ? activeStyle : inactiveStyle} >
                        Unsere Geschichte
                    </div>
                </div>
                {menu ? <Team /> : <History />}
            </article>
        </section>
    )
}