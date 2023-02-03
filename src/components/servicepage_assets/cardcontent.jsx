export const CardContent = () => {
    const images = [
        {
            url: "ABC",
            cat: "bad",
        },
        {
            url: "ABC",
            cat: "bad",
        },
        {
            url: "ABC",
            cat: "wohn",
        },
        {
            url: "ABC",
            cat: "wohn",
        },
    ]

    return(
        <div>
            <div className="imgBigPreview"></div>
            {images.filter(img => img.cat === "bad").map((image, i,) => (
                <div key={i} className="imgSmallPreview">
                    {image.url}
                </div>
            ))
            }
            
        </div>
    )
}