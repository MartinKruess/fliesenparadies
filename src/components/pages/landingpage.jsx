import { TopCarousel } from "../landingpage_assets/carousel"
import { FeedbackContainer } from "../landingpage_assets/feedbackContainer"
import { FirstArticle } from "../landingpage_assets/firstArticle"
import { SecondArticle } from "../landingpage_assets/secondArticle"

export const Landingpage = () => {
    return(
        <section>
            <TopCarousel id={0}/>
            <FeedbackContainer />
            <FirstArticle />
            <SecondArticle />
        </section>
    )
}