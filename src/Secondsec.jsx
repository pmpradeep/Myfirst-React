import { useParams } from 'react-router-dom';
import icon1 from './icons/2578132_electric_electricity_power_sign_thunder_icon.png'
import icon2 from './icons/5288414_earphone_earphones_headphone_headphones_headset_icon.png'
import icon3 from './icons/3018579_choice_custom_data_general_options_icon.png'
import rarrow from './icons/4829869_arrow_next_right_icon.png'
import { Link } from 'react-router-dom';
function Secondsec() {
    const user =useParams();
    const value = user.id;
  
    // alert(id);
     
   
    return (
         
        <div className="container-fluid sec-2 ">

             <h1 className='text-center'>{value}</h1>

            <div className="row w-75 mx-auto  mx-auto text-center">
               
                <div className=" col-12 col-sm-4 icons">
                    <img src={icon1} />
                    <h6>Secure</h6>
                    <p>
                        we strictly deal with vendors <br />
                        that provide the top notch security
                    </p>
                    {/* <a href="">Learn more</a>{" "} */}
                    <Link to="Learnmore">Learn more</Link>
                    <img src={rarrow} alt="" />
                </div>
                <div className="col-12 col-sm-4 icons">
                    <img
                        src={icon2}
                        alt=""
                    />
                    <h6>24/7 Support</h6>
                    <p>
                        we provide 24 hours support <br />
                        through chat support and voice support
                    </p>
                    <a href="">Learn more</a>{" "}
                    <img src={rarrow} alt="" />
                </div>
                <div className="col-12 col-sm-4 icons">
                    <img
                        src={icon3}
                        alt=""
                    />
                    <h6>Customizeable</h6>
                    <p>
                        we provide customizable products <br />
                        we provide update feautures{" "}
                    </p>
                    <a href="">Learn more</a>{" "}
                    <img src={rarrow} alt="" />
                </div>
            </div>
        </div>

    );
}

export default Secondsec;