import React from 'react';
import './Setting.scss';
import first from './images/first.svg';
import second from './images/second.svg';
import third from './images/third.svg';
import four from './images/four.svg';
import five from './images/five.svg';
import six from './images/six.svg';
import seven from './images/seven.svg';
import Profile from './images/Profile.png';
import Profile1 from './images/Profile1.png';
import contact from './images/contact.png';
import email from './images/email.png';
import downarr from './images/downarr.png';
import call from './images/call.png';

const Setting = () => {
    return (
        
        <div className="maincontainer">

        <div className="menu">

            <div className="profile">
               <img src={Profile} alt="first"></img>
            </div>

            <div className="submenu">
            
                <div className="img1"><img src={first} alt="first"></img></div>
                <div className="img2"><img src={second} alt="first"></img></div>
                <div className="img3"><img src={third} alt="first"></img></div>
                <div className="img4"><img src={four} alt="first"></img></div>
                <div className="img5"><img src={five} alt="first"></img></div>
                <div className="img6"><img src={six} alt="first"></img></div>

                <div className="rec1"></div>
                <div className="img7"><img src={seven} alt="first"></img></div>
                <div className="rec2"></div>
            </div>
        </div>

        <div className="setting">Settings</div>
        <div className="manage">Manage your profile update name password and other personal information</div>

        <div className="ubg">
        <div className="user">User details</div>
        <div className="billing">Billings</div>
        <div className="general">General</div>

        <div className="line">
        <div className="l1"></div>
        <div className="l2"></div>
        </div>

        </div>

        <div className="profile1"><img src={Profile1} alt=""></img></div>
        <div className="chng">Change profile</div>
        
        <div className="fn"><input type="text" placeholder="john"></input></div>
        <div className="contact"><img src={contact} alt=""></img></div>

        <div className="ln"><input type="text" placeholder="Doe"></input></div>
        <div className="contact1"><img src={contact} alt=""></img></div>

        <div className="email"><input type="text" placeholder="johndoe@gmail.com"></input></div>
        <div className="emailicon"><img src={email} alt=""></img></div>

        <div className="in"><input type="text" placeholder="+91"></input></div>
        <div className="darr"><img src={downarr} alt=""></img></div>


        <div className="num"><input type="text" placeholder="9080728376"></input></div>
        <div className="call"><img src={call} alt=""></img></div>

        <button className="btn1"><span className="btntxt1">Change password</span></button>
        <button className="btn2"><span className="btntxt2">Edit profile</span></button>

        </div>
    )
}

export default Setting
