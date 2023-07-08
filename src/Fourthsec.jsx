import cardimg from './images/pexels-tomáš-malík-1998439.jpg'

function Fourthsec() {
    return (
        /*fourth sec*/
    <div className="container mg-top">
        <div className="row">
            <div className="col-12  col-md-3 m-coloumn left-con">
                <h2 className="fw-bold">Trending Tours</h2>
                <p>
                    we provide a lot of pacakages and variety of tour plans packages include
                    food and accomadation
                </p>
                <a href="" className="fw-bold">
                    View All Tour plans
                </a>
            </div>
            <div className="col-12 col-md-3 m-coloumn ">
                <div className="card card-br4" style={{ width: "18rem" }}>
                    <img
                        className="card-img-top"
                        src={cardimg}
                        alt="Card image cap"
                    />
                    <div className="card-body p-0">
                        <h5 className="card-title pt-2">Beachfront</h5>
                        <p className="card-text card-head fw-bold">
                            A Trip to hotel Brahamas and to the trip ocean
                        </p>
                        <a href="#" className="btn btn-primary w-100 card-btn-rad">
                            Book now
                        </a>
                    </div>
                </div>
            </div>
            <div className="col-12 col-md-3 m-coloumn">
                <div className="card card-br4" style={{ width: "18rem" }}>
                    <img
                        className="card-img-top"
                        src={cardimg}
                        alt="Card image cap"
                    />
                    <div className="card-body p-0">
                        <h5 className="card-title  pt-2">Cruise</h5>
                        <p className="card-text card-head fw-bold">
                            Cruise to the Marina Trench and Hotel Phillipines{" "}
                        </p>
                        <a href="#" className="btn btn-primary w-100 card-btn-rad">
                            Book Now
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Fourthsec;