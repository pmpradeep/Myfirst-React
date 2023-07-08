import { Link } from 'react-router-dom';
import Secondsec from '../Secondsec';
import Thirdsec from '../Thirdsec';
import homeimg from '../images/mike-swigunski-yERyCOOT8i8-unsplash.jpg'


function Home() {
    return (
    
     
      <div className="container-fluid height">  
        <div className="row">
        <div className="col-12 col-sm-6 bg-aw ">
         
          <div className="main-head p-0">
            <h2>Find Perfect Hotels</h2>
            <h2 style={{fontWeight: 'bold'}}><span className="themecol mb-3">anywhere you go.</span></h2>
            <div className="para">
              <p>We have been in the hotels across the world
                for 5 years now.We assure you that you will always
                enjoy your stay with us.</p>
            </div>
            <div className="btn-bar">
              
               <Link to="Signup">
              <button type="button" className="btn btn-primary btn-1"  >Sign Up</button>
              </Link>
              <Link to="Searchhotels">
              <button type="button" className="btn btn-primary btn-2">Search Hotels</button>
              </Link>
            </div>

          </div>
        </div>
        <div className="col12 col-sm-6 main">
          <img src={homeimg} alt="" />
        </div>
      </div>
      
     <Secondsec/>
     <Thirdsec/>
    </div>
  );

 
    
}


export default Home;

