import React from 'react';
import "./Login.scss";

import img from './images/img.png';
import Patten_Bottom from './images/Patten_Bottom.png';


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

        </div>
    )
}

export default Login;
