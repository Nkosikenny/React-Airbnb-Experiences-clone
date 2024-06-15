import mountainBike from "../assets/mountain-bike.png"
import starPhoto from "../assets/star.png"
import weddingPhoto from "../assets/wedding-photography.png"


export default function Card(props) {
  /*
 <div className="wedding-card">
                        <img src={weddingPhoto} alt="wedding-photo" />
                        <div className="card-body">
                        <div className="card-description">
                        <img src={starPhoto} alt="star" id="starImage" />
                        <span className="rating">5.0</span>
                        <span className="gray-text">(30)-USA</span>
                        </div>
                        <p>Learn wedding photography From $125/person</p>
                      </div>
                    </div>
                    <div className="bike-card">
                        <img src={mountainBike} alt="mountain-bike" />
                        <div className="card-body">
                        <div className="card-description">
                        <img src={starPhoto} alt="star" id="starImage" />
                        <span className="rating">4.8</span>
                        <span className="gray-text">(3)-USA</span>
                        </div>
                        <p>Group mountian biking From $50/person</p>
                      </div>
                    </div>
                    */

    return (
        <>
            <section className="card-section">
                <h1>Card component</h1>
                <div className="card-component">
                    <div className="katie-card">
                      <img src={`../assets/{props.img}`} alt="kaite zaferes" width="176px" height="235px"  />
                      <div className="card-body">
                        <div className="card-description">
                        <img src={starPhoto} alt="star" id="starImage" />
                        <span className="rating">{props.rating}</span>
                        <span className="reviewCount">{props.reviewCount}</span>
                        <span className="Country">{props.country}</span>
                        </div>
                        <p>{props.title}</p>
                        <p>{props.price}/person</p>
                      </div>
                    </div>
                    
                   
                </div>
            </section>
        </>
    )
}