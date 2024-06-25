import starImg from "../assets/star.png"
export default function Card(props) {
    
    let badgeText;
    if (props.item.openSpots === 0) {
        badgeText = "SOLD OUT";
    } else if (props.item.openSpots === 27) {
        badgeText = "Online";
    } else {
        badgeText = "";
    }

    console.log(props);

    return (
        <>
            <section className="card-section">


                <div className="katie-card">
                    <img src={`../images/${props.item.coverImg}`} alt="kaite zaferes" width="176px" height="235px " className="katieImg" />
                     {badgeText && <div className="card-badge">{badgeText}</div>}
                    <div className="card-body">
                        <div className="card-description">
                            <img src={starImg} alt="star" id="starImage" />
                            <span className="rating gray-text">{props.item.stats.rating}</span>
                            <span className="reviewCount gray-text">({props.item.stats.reviewCount})-</span>
                            <span className="Country gray-text">{props.item.location}</span>
                        </div>
                        <p>{props.item.title}</p>
                        <p><strong>from ${props.item.price}</strong>/person</p>
                    </div>


                </div>
            </section>

        </>
    )

}