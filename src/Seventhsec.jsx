import mary from './images/testimonial-1.jpg'
import rightcard from "./images/team-3.jpg"
function Seventhsec()
{
    return(
        <div className="container mg-top">
  <div className="row">
    <div className="col-12 col-sm-6 ">
      <h2 className="fw-bold">Testimonials</h2>
      <p>
        Here are some examples that our exiting customers say about our
        service.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </p>
      <div className="row ceo">
        <div className="col team">
          <p className="fw-bold">
            <span className="theme-txt d-quote">"</span> Duis aute irure dolor
            in reprehenderit in voluptate velit Lorem ipsum dolor sit amet,
            consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua.
            <span className="theme-txt d-quote">"</span>
          </p>
          <img src={mary} height="50px" width="50px" />
          <h6 className="t fw-bold theme-txt">Mary rose</h6>
          <p className="t-title ">Ceo,Delos inc</p>
        </div>
      </div>
    </div>
    <div className="col-12 col-sm-6 ">
      {/* <img src="./images/airplane.jpg" class="obj-"> */}
      <div
        id="carouselExampleControls"
        className="carousel slide"
        data-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={rightcard} alt="First slide" />
          </div>
          <div className="carousel-item">
            <img src="./images/airplane1.jpg" alt="Second slide" />
          </div>
        </div>
        <a
          className="carousel-control-prev"
          href="#carouselExampleControls"
          role="button"
          data-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="sr-only">Previous</span>
        </a>
        <a
          className="carousel-control-next"
          href="#carouselExampleControls"
          role="button"
          data-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="sr-only">Next</span>
        </a>
      </div>
    </div>
  </div>
</div>


    );
}

export default Seventhsec;