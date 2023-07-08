import boyimg from './images/gerson-repreza-CepDpEiALqM-unsplash.jpg'

function Fifthsec()
{
    return(
        <div className="container mg-top">
        <div className="row">
          <div className="col-12 col-sm-4 cover">
            <img src={boyimg} alt="" />
          </div>
          <div className="col-12 col-sm-8">
            <div className="row head-det">
              <h2 className="fw-bold">We have the best</h2>
              <h2 className="fw-bold">service.</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip ex ea commodo consequat. Duis aute irure dolor in
                reprehenderit in voluptate velit
              </p>
              <div className=" row history">
                <div className="col-6">
                  <h5 className="fw-bold text-start theme-txt">192</h5>
                  <h5 className="text-start">Countries</h5>
                </div>
                <div className="col-6">
                  <h5 className="fw-bold text-start theme-txt">479</h5>
                  <h5 className="text-start">Hotels</h5>
                </div>
              </div>
              <div className=" row history">
                <div className="col-6">
                  <h5 className="fw-bold text-start theme-txt">2093</h5>
                  <h5 className="text-start">Rooms</h5>
                </div>
                <div className="col-6">
                  <h5 className="fw-bold text-start theme-txt">10347</h5>
                  <h5 className="text-start">Workers</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    );
}

export default Fifthsec;