import { TopCarousel } from "../landingpage_assets/carousel"
import { FirstArticle } from "../landingpage_assets/firstArticle"
import { SecondArticle } from "../landingpage_assets/secondArticle"

export const Landingpage = () => {
    return(
        <section>
            <TopCarousel id={0}/>
            <FirstArticle />
            <SecondArticle />
        </section>
    )
}