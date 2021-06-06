import React from 'react';
import "./Resetpass.scss";
import img from './images/img.png';
import Patten_Bottom from './images/Patten_Bottom.png';
import Patten_Top from './images/Patten_Top.png';
import Icon from './images/Icon.png';

const Resetpass = () => {
    return (

        <div className="rectangle">

        <div className="forimage">
        <div className="img1">
            <img src={Patten_Bottom} alt=""/>
        </div>

        <div className="img2">
            <img src={img} alt=""/>
        </div>
        </div>
        <div className="forbox">
          <div className="box">
            <div className="t1">Reset password</div>
            <div className="t2">We have send the link on your registered email address to reset password</div>

            <div className="t4">
            <div className="t41"><input type="text" placeholder="6+ character and one capital letter"></input></div>
            <div className="t42"> <img src={Icon} alt="lock"/></div>
            </div>

            <div className="t4">
            <div className="t41"><input type="text" placeholder="6+ character and one capital letter"></input></div>
            <div className="t42"> <img src={Icon} alt="lock"/></div>
            </div>

            <div><button className="btn"><div className="lo">Reset password</div></button></div>

          </div>

          <div className="img3">
        <img src={Patten_Top} alt=""/>
        </div>

        </div>

        </div>

    )
}

export default Resetpass;
