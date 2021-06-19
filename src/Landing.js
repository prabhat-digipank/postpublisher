import React from 'react';
import './Landing.scss';
import land1 from './images/land1.png';

const Landing = () => {
    return (
        <div className="maincontainer">

        <div className="navbar">
            <div className="f1">Post Publisher</div>
            <div className="f2">Pricing</div>
            <div className="f3">Features</div>
            <div className="f4">Blog</div>
            <div className="f5">Support</div>
            
            <button className="btn"><span className="btntxt">Sing In</span></button>
            <button className="btn1"><span className="btntxt1">Sing Up</span></button>
        </div>
        <div className="box1">
        <div className="manage">The best way to manage social media account</div>
        <div className="lorem">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</div>
        <button className="btn2"><span className="btntxt2">Get started</span></button>
        </div>

        <div className="land1"><img src={land1} alt="land1"></img></div>

        <div className="box2">
        <div className="best">Choose the best plan that fit best for you</div>
        <div className="lorem1">Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. </div>
        
        <div className="pack">
        <button className="btn3"><span className="btntxt3">Monthly</span></button>
        <button className="btn4"><span className="btntxt4">Verify</span></button>
        </div>

        <div className="basic">
        <div className="num">01</div>
        <div className="rect"></div>
        <div className="text">Basic</div>
        <div className="dollar">$5</div>
        <div className="lorem2">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</div>
        <button className="btn5"><span className="btntxt5">Getstarted</span></button>
        </div>

        <div className="standard">
        <div className="num1">02</div>
        <div className="rect1"></div>
        <div className="text1">Standard</div>
        <div className="dollar1">$15</div>
        <div className="lorem3">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</div>
        <button className="btn6"><span className="btntxt6">Getstarted</span></button>
        </div>

        <div className="professional">
        <div className="num2">03</div>
        <div className="rect2"></div>
        <div className="text2">Professional</div>
        <div className="dollar2">$15</div>
        <div className="lorem4">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</div>
        <button className="btn7"><span className="btntxt7">Getstarted</span></button>
        </div>
        
        </div>

        </div>
    )
}

export default Landing
