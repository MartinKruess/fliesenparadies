//import feedbacks from feedbacks.json

export const FeedbackContainer = () => {

    const [reviews, setReviews] = ([])

    // IS working!

    // const reviews = "https://serpapi.com/search?engine=google_maps_reviews"
    // const engine = "google_maps_reviews"
    // const data_id = "6406e5661988e5f6f5a46587" Meine -> austauschen
    // const url = `${reviews}&data_id=${data_id}`
    // console.log("URL", url)

    // //console.log(feedbacks)

    // const fetchData = async (url) => {
    //     const res = await fetch(url)
    //     const data = await res.json()
    //     console.log(data)
    // }

    //fetchData(url)

    // setInterval(() => {
    //     fetchData(reviews)
    // }, 86400000);

    // fetch Data from backend ip/googlereviews_fleisenparadies
    const fetchURL = "localshost:5000/grv_fp"

    const fetchReviews = async (fetchURL) => {
        const res = await fetch(fetchURL)
        const fetchedReviews = await res.json()
        setReviews(fetchedReviews)
    }

   // data
    


    return(
        <article>
           <div id="google-reviews"></div>
        </article>
    )
}