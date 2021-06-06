import React from 'react';
import "./Password.scss";
import Icons from './images/Icons.png';
import img from './images/img.png';
import Patten_Bottom from './images/Patten_Bottom.png';
import Patten_Top from './images/Patten_Top.png';
import less from './images/less.png';

const Password = () => {
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
                <div className="t1">Forgot password</div>
                <div className="t2">Enter your registered email address to continue</div>

                <div className="t4">
                <div className="t41"><input className="colo" type="text" placeholder="Email"></input></div>
                <div className="t42"><img src={Icons} alt="email"></img></div>
                </div>

                <div><button className="btn"><div className="lo">Submit</div></button></div>

                <div className="txt"><img src={less} alt="less"></img></div><div className="txt1">Back to login</div>

            </div>

            <div className="img3">
        <img src={Patten_Top} alt=""/>
        </div>
        </div>
        

        </div>
    )
}

export default Password;
