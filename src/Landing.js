import React from 'react';
import './Landing.scss';
import land1 from './images/land1.png';
import land2 from './images/land2.png';
import landnew from './images/landnew.png';
import vector2 from './images/vector2.png';
import vector1 from './images/vector1.png';
import image1 from './images/image1.png';
import image2 from './images/image2.png';
import next from './images/next.png';
import prev from './images/prev.png';
import rec1 from './images/rec1.png';
import rec2 from './images/rec2.png';
import rec3 from './images/rec3.png';
import arr1 from './images/arr1.png';
import land4 from './images/land4.png';
import contact from './images/contact.png';
import email from './images/email.png';
import pub from './images/pub.png';
import small from './images/small.png';
import Frame0 from './images/Frame0.png';
import Frame1 from './images/Frame1.png';
import Frame2 from './images/Frame2.png';
import Frame3 from './images/Frame3.png';
import Frame4 from './images/Frame4.png';
import dot from './images/dot.png';

const Landing = () => {
    return (
        <div className="maincontainer">

            <div className="navbar">
                <div className="f1"><img src={pub} alt=""></img></div>
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
                    <button className="btn3"><span className="btntxt3">Yearly</span></button>
                    <button className="btn4"><span className="btntxt4">Monthly</span></button>
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
                    <div className="dollar2">$30</div>
                    <div className="lorem4">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</div>
                    <button className="btn7"><span className="btntxt7">Getstarted</span></button>
                </div>

            </div>

            <div className="land2"><img src={land2} alt=""></img></div>
            <div className="vector1"><img src={vector1} alt=""></img></div>
            <div className="learn">Learn to makes finding, scheduling, managing, and reporting on social media content easier</div>
            <div className="lorem5"> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</div>

            
            <div className="box3">
                <div className="find">Learn to makes finding, scheduling, managing, and reporting on social media content easier</div>
                <div className="lorem6">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</div>
                <div className="land3"><img src={landnew} alt=""></img></div>
                <div className="vector2"><img src={vector2} alt=""></img></div>
            </div>
            <div className="dot"><img src={dot} alt=""></img></div>

            <div className="box4">
                <div className="image1"><img src={image1} alt=""></img></div>
                <div className="media">The best way to manage social media account</div>
                <div className="lorem7">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</div>
                <button className="btn8"><span className="btntxt8">Get started</span></button>
                <div className="image2"><img src={image2} alt=""></img></div>
            </div>

            <div className="read">Read our latest stories</div>

            <div className="nxt"><img src={next} alt=""></img></div>
            <div className="prev"><img src={prev} alt=""></img></div>


            <div className="rec1"><img src={rec1} alt=""></img></div>
            <div className="ipsum1">Lorem Ipsum is text</div>
            <div className="lorem8">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</div>
            <div className="rm">Read more</div>
            <div className="arr1"><img src={arr1} alt=""></img></div>

            <div className="rec2"><img src={rec2} alt=""></img></div>
            <div className="ipsum2">Lorem Ipsum is text</div>
            <div className="lorem9">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</div>
            <div className="rm1">Read more</div>
            <div className="arr2"><img src={arr1} alt=""></img></div>

            <div className="rec3"><img src={rec3} alt=""></img></div>
            <div className="ipsum3">Lorem Ipsum is text</div>
            <div className="lorem10">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</div>
            <div className="rm2">Read more</div>
            <div className="arr3"><img src={arr1} alt=""></img></div>

            <div className="touch">Get in touch with us</div>
            <div className="land4"><img src={land4} alt=""></img></div>

            <div className="submitbox">

                <div className="yrname"><input type="text" placeholder="your name"></input></div>
                <div className="contact"><img src={contact} alt=""></img></div>

                <div className="email"><input type="text" placeholder="Email"></input></div>
                <div className="em"><img src={email} alt=""></img></div>

                <div className="share"><textarea type="text" placeholder="Share your thoughts"></textarea></div>

                <button className="btn9"><span className="btntxt9">Submit</span></button>
            </div>

            <div className="box5">
            <div className="small"><img src={small} alt=""></img></div>
            <div className="postxt">Postpublisher</div>
            <div className="lorem11">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</div>
            <div className="copy">Copyright @ 2021 postpublisher</div>
            <div className="postxt1">Postpublisher</div>
            <div className="abt">About us</div>
            <div className="cnct">Contact us</div>
            <div className="market">Marketing videos</div>
            <div className="free">Free consultation</div>
            <div className="legal">Legal</div>
            <div className="privacy">Privacy policy</div>
            <div className="terms">Terms of use</div>
            <div className="follow">Follow us on</div>
            
            <div className="frames">
            <div className="Frame0"><img src={Frame0} alt=""></img></div>
            <div className="Frame1"><img src={Frame1} alt=""></img></div>
            <div className="Frame2"><img src={Frame2} alt=""></img></div>
            <div className="Frame3"><img src={Frame3} alt=""></img></div>
            <div className="Frame4"><img src={Frame4} alt=""></img></div>
            </div>

            <div className="line"></div>
            </div>
        </div>
    )
}

export default Landing
