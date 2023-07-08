import card1 from './images/pexels-tomáš-malík-1998439.jpg'
import leftimg from './images/testimonial-1.jpg'
import rightimg from './images/team-3.jpg'

import rightconimg1 from'./images/edvin-johansson-rlwE8f8anOc-unsplash.jpg'
import rightconimg2 from './images/ciudad-maderas-MXbM1NrRqtI-unsplash.jpg'
function Sixthsec()
{
    return(
        <div className="container mg-top six">
  <div className="row">
    <div className="col-12 col-sm-8">
      <h2 className="fw-bold mb-4">Popular Posts</h2>
      <div className="row ">
        <div className="col-md-6">
          <div className="card" style={{ width: "100%" }}>
            <img
              className="card-img-top"
              src={card1}
              alt="Card image cap"
            />
            <div className="card-body team">
              <h6 className="card-title fw-bold">
                Tips on how to travel safely in forien countries
              </h6>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <img src={leftimg} height="50px" width="50px" />
              <h6 className="t fw-bold">Mary rose</h6>
              <p className="t-title">traveller</p>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="card" style={{ width: "100%" }}>
            <img
              className="card-img-top"
              src={card1}
              alt="Card image cap"
            />
            <div className="card-body team">
              <h6 className="card-title fw-bold">
                Enjoying the beach life while on a vacation
              </h6>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <img src={rightimg}
                height="50px"
                width="50px"
                alt=""
              />
              <h6 className="t fw-bold ">Tom Andrews</h6>
              <p className="t-title">vlogger</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="col-12 col-md-4 ">
      <h2 className="fw-bold mb-4">Recent Posts</h2>
      <div className="row pb-3 ">
        <div className="col-8 s-para ">
          <h6 className="fw-bold">Getting the most out of your vacation</h6>
          <p>tony hawk</p>
        </div>
        <div className="col-4 ">
          <img
            src={rightconimg1}
            height="70px"
            width="70px"
          />
        </div>
      </div>
      <div className="row pb-3">
        <div className="col-8 s-para ">
          <h6 className="fw-bold">
            Choosing the perfect safaris in the africa
          </h6>
          <p>Sam John</p>
        </div>
        <div className="col-4 ">
          <img
            src={rightconimg2}
            height="70px"
            width="70px"
          />
        </div>
      </div>
      <div className="row pb-3">
        <div className="col-8  s-para">
          <h6 className="fw-bold">Hiking during the monsoon in Asia</h6>
          <p>Sam andrews</p>
        </div>
        <div className="col-4">
          <img
            src={rightconimg1}
            height="70px"
            width="70px"
          />
        </div>
      </div>
      <div className="row pb-3">
        <div className="col-8  s-para">
          <h6 className="fw-bold">
            Must carry items while travelling to thailand
          </h6>
          <p>Fretin</p>
        </div>
        <div className="col-4">
          <img
            src={rightconimg2}
            height="70px"
            width="70px"
          />
        </div>
      </div>
      <div className="row pb-3">
        <div className="col-8   s-para ">
          <h6 className="fw-bold">An extremely funny trip to swiss alips</h6>
          <p>Sam andrews</p>
        </div>
        <div className="col-4">
          <img
            src={rightconimg1}
            height="70px"
            width="70px"
          />
        </div>
      </div>
    </div>
  </div>
</div>

    );

}

export default Sixthsec;