import katiePhoto from "../assets/katie-zaferes.png"
import mountainBike from "../assets/mountain-bike.png"
import starPhoto from "../assets/star.png"
import weddingPhoto from "../assets/wedding-photography.png"


export default function Card() {
    return (
        <>
            <section className="card-section">
                <h1>Card component</h1>
                <div className="card-component">
                    <div className="katie-card">
                      <img src={katiePhoto} alt="kaite zaferes" />
                      <div className="card-body">
                        <div className="card-description">
                        <img src={starPhoto} alt="star" />
                        <span className="">5.0(6)-USA</span>
                        </div>
                        <p>Life lessons with katie zaferes From $136/person</p>
                      </div>
                    </div>
                    <div className="wedding-card">
                    </div>
                    <div className="bike-card"></div>
                </div>
            </section>
        </>
    )
}