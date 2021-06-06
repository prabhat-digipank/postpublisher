import React from 'react';
import "./AddProfile.scss";
import first from './images/first.svg';
import second from './images/second.svg';
import third from './images/third.svg';
import four from './images/four.svg';
import five from './images/five.svg';
import six from './images/six.svg';
import seven from './images/seven.svg';
import Profile from './images/Profile.png';
import plus from './images/plus.png';
import face from './images/face.png';
import linkedin from './images/linkedin.png';
import twitter from './images/twitter.png';

const AddProfile = () => {
    return (
        <div className="mainmenu">

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
                <div className="img7"><img src={seven} alt="first"></img></div>

            </div>
        </div>

        <div className="txt1">Add your social profile</div>

        <div className="txt2">Connect social profile you'd like to manage.</div>
        
        <div className="rect1"></div>
        <div className="rect2"></div>
        <div className="txt3">You can add upto 3 social profile in free plan</div>
        
            <div className="box1">

            <div className="mainface">    
            <div className="face"><img src={face} alt="face"></img></div>
            <div className="facebook">Facebook</div>
            </div>

            <div className="cnct">connect to your facebook account's page</div>
            <div className="cnct1">connect to your facebook account's group</div>
            
                <div className="plus"><img src={plus} alt="plus"></img></div>
                <div className="plus1"><img src={plus} alt="plus1"></img></div>
            </div>

            <div className="box2">
            
            <div className="mainlinked">    
            <div className="link"><img src={linkedin} alt="linkedin"></img></div>
            <div className="linked">Linkedin</div>
            </div>

            <div className="cnct2">connect to your linkedin account's page</div>
            <div className="cnct3">connect to your linkedin account's group</div>
            

            <div className="plus"><img src={plus} alt="plus"></img></div>
            <div className="plus1"><img src={plus} alt="plus1"></img></div>

            </div>

            <div className="box3">

            <div className="maintwitter">    
            <div className="twit"><img src={twitter} alt="twitter"></img></div>
            <div className="twitter">Twitter</div>
            </div>

            <div className="cnct2">connect to your twitter account's page</div>
            <div className="cnct3">connect to your twitter account's group</div>
            

            <div className="plus"><img src={plus} alt="plus"></img></div>
            <div className="plus1"><img src={plus} alt="plus1"></img></div>


            </div>

        </div>
    )
}

export default AddProfile;
