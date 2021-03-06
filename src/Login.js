import React from 'react';
import "./Login.scss";
import Icons from './images/Icons.png';
import img from './images/img.png';
import Patten_Bottom from './images/Patten_Bottom.png';
import Patten_Top from './images/Patten_Top.png';
import Icon from './images/Icon.png';
const Login = () => {
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
            <div className="t1">Glad to see you again</div>
            <div className="t2">Login to start posting!!!</div>
            <div className="t3">Don't have an account? <span className="t31">Sign up</span></div>
            <div className="t4">
            <div className="t41"><input className="colo" type="text" placeholder="Email"></input></div>
            <div className="t42"><img src={Icons} alt="email"></img></div>
            </div>

            <div className="t4">
            <div className="t41"><input type="text" placeholder="6+ character and one capital letter"></input></div>
            <div className="t42"> <img src={Icon} alt="lock"/></div>
            </div>

            <div className="t5">Forgot password?</div>

            <div><button className="btn"><div className="lo">Login</div></button></div>
        </div>

        <div className="img3">
        <img src={Patten_Top} alt=""/>
        </div>
        </div>

     

        </div>
    )
}

export default Login;
