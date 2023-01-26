import { TopCarousel } from "../landingpage_assets/carousel"
import { Footer } from "../reusables/footer"
import { Contact } from "../reusables/contact"
import { Team } from "../company_assets/team"

export const Company = () => {
    return(
        <section>
            <TopCarousel />
            <Contact />
            <Team />
            <Footer />
        </section>
    )
}