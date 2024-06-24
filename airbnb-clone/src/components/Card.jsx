import starImg from "../assets/star.png"
export default function Card(props) {

    let badgeText;
    if(props.openSpots===0){
       badgeText="SOLD OUT";
    }else if(props.openSpots==="Online"){
        badgeText="Online";
    }else{
        badgeText="";
    }

  console.log("OpenSpots: " + props.openSpots);
  console.log("badgeText: " + badgeText);

    return (
        <>
            <section className="card-section">


                <div className="katie-card">
                    <img src={`../images/${props.img}`} alt="kaite zaferes" width="176px" height="235px " className="katieImg" />
                    {badgeText && <div className="card-badge">{badgeText}</div>}
                    <div className="card-body">
                        <div className="card-description">
                            <img src={starImg} alt="star" id="starImage" />
                            <span className="rating gray-text">{props.rating}</span>
                            <span className="reviewCount gray-text">({props.reviewCount})-</span>
                            <span className="Country gray-text">{props.country}</span>
                        </div>
                        <p>{props.title}</p>
                        <p><strong>from ${props.price}</strong>/person</p>
                    </div>



                </div>
            </section>

        </>
    )

}