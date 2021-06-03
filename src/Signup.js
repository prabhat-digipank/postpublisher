import React from 'react';
import img from './images/img.png';
import Patten_Bottom from './images/Patten_Bottom.png';
import Patten_Top from './images/Patten_Top.png';
import "./Signup.scss";
import Icons from './images/Icons.png';
import Icon from './images/Icon.png';

const Signup =() => {
    return(

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
            <div className="b1">Welcome to Post Publisher</div>
            <div className="b2">Let's get your account set up</div>

            <div className="b3">
                <div className="b31">Already member?</div>
                <div className="b32">Sign in</div>
            </div>

            <div className="b4">
                <div>Email</div>
                <div><img src={Icons} alt="mail"></img></div>
            </div>

            <div className="b4">
                <div>6+ Character & 1 Capital letter</div>
                <div><img src={Icon} alt="lock"></img></div>
            </div>

            <div className="b4">
                <div>Confirm Password</div>
                <div><img src={Icon} alt="lock"></img></div>
            </div>

            <div>
            <span>By Clicking</span>
            <span className="or">'create account',</span>
            <span>i agree to post publisher</span>
            <span className="ul">terms of use</span>
            and
            <span className="ul">privacy policy</span>
            </div>

            <div className="b5">Create account</div>
        </div>

        <div className="img3">
        <img src={Patten_Top} alt=""/>
        </div>

        </div>
        </div>
    )
}

export default Signup;