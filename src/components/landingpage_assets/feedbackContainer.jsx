//import feedbacks from feedbacks.json

export const FeedbackContainer = () => {

    const reviews = "https://serpapi.com/search?engine=google_maps_reviews"
    const api_key = "7f643e5e2dc4e0c3c486cfec2f97f98abbc1d09eedf511bce7a55444ecd462f0"
    const engine = "google_maps_reviews"
    const search_id = "6406e5661988e5f6f5a46587"
    const data_id = ""

    //console.log(feedbacks)

    const fetchData = async (url, engine, api_key) => {
        const res = await fetch(url, engine, api_key)
        const data = await res.json()
        console.log(data)
    }

    //fetchData(reviews)

    // setInterval(() => {
    //     fetchData(reviews)
    // }, 86400000);
    


    return(
        <article>
           <div id="google-reviews"></div>
        </article>
    )
}