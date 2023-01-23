import { TopCarousel } from "../landingpage_assets/carousel"
import { FirstArticle } from "../landingpage_assets/firstArticle"
import { SecondArticle } from "../landingpage_assets/secondArticle"
import { Footer } from "../reusables/footer"
import { Contact } from "../reusables/contact"

export const Landingpage = () => {
    return(
        <section>
            <TopCarousel />
            <Contact />
            <FirstArticle />
            <SecondArticle />
            <Footer />
        </section>
    )
}