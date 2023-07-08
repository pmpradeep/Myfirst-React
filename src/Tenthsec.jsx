import twitter from './icons/104501_twitter_bird_icon.png';
import youtube from './icons/8666536_youtube_icon.png';
import fb from './icons/216078_facebook_social_icon.png'

function Tenthsec()
{
    return(
        <div className="container-fluid mt-2">
  <div className="row bg-gr">
    <div className="col-12 text-center">
      <div className="row mt-1">
        <h6 className="fw-bold">Treact</h6>
      </div>
      <div className="row mt-1">
        <div className="col f-nav">
          <a href="">Home</a>
          <a href="">Contact</a>
          <a href="">About</a>
          <a href="">Blog</a>
        </div>
      </div>
      <div className="row mt-1 ft-icon">
        <div className="col">
          <img src={twitter} />
          <img src={fb}/>
          <img src={youtube} />
        </div>
      </div>
      <div className="cp mt-2">
        <h6>@ copyright 2023.Treact inc,All rights reserved</h6>
      </div>
    </div>
  </div>
</div>

    );
}

export default Tenthsec;