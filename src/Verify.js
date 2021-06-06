import React from 'react';
import "./Verify.scss";
import img from './images/img.png';
import Patten_Bottom from './images/Patten_Bottom.png';
import Patten_Top from './images/Patten_Top.png';

const Verify = () => {
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
                <div className="t1">Verify your email</div>
                <div className="t2">Please enter 4 digit code send to <div className="t3">"johndoe@gmail.com"</div></div>
                

                <div className="b"> 
                      <div className="b1"><input type="text" placeholder="0"></input></div>
                      <div className="b1"><input type="text" placeholder="0"></input></div>
                      <div className="b1"><input type="text" placeholder="0"></input></div>
                      <div className="b1"><input type="text" placeholder="0"></input></div> 
                </div>

                <div><button className="btn"><div className="lo">Verify</div></button></div>

            </div>

            <div className="img3">
            <img src={Patten_Top} alt=""/>
            </div>

        </div>

        </div>

    )
}

export default Verify;
