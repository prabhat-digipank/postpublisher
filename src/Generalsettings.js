import React from 'react';
import './Generalsettings.scss';
import first from './images/first.svg';
import second from './images/second.svg';
import third from './images/third.svg';
import four from './images/four.svg';
import five from './images/five.svg';
import six from './images/six.svg';
import seven from './images/seven.svg';
import downarr from './images/downarr.png';
import Profile from './images/Profile.png';

const Generalsettings = () => {
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

        <div className="ac"><input type="text" placeholder="Asia/Calcutta"></input></div>
        <div className="drr"><img src={downarr} alt=""></img></div>

        <div className="buff"><input type="text" placeholder="buff.ly"></input></div>
        <div className="drr1"><img src={downarr} alt=""></img></div>


        <div className="mdy"><input type="text" placeholder="mm/dd/yyyy"></input></div>
        <div className="drr2"><img src={downarr} alt=""></img></div>


        <div className="lm"><input type="text" placeholder="Light Mode"></input></div>
        <div className="drr3"><img src={downarr} alt=""></img></div>

        <button className="btn1"><span className="btntxt1">Discard</span></button>
        <button className="btn2"><span className="btntxt2">Save</span></button>
        </div>
    )
}
export default Generalsettings;
    
