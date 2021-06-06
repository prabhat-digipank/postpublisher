import React, { useState} from 'react';
import "./Subscription.scss";
import sign from './images/sign.png';

function Subscription ()  {

    const [isToggled, setIsToggled] = useState(false);
    const onToggle = () => setIsToggled(!isToggled);

    return (
        <div className="first">

        <div className="t1"> Choose the right plan for you </div>

        <div className="t2"> We have several powerful plans to showcase your business and get discovered as a creative entrepreneurs, everything you need</div>
            
        <div className="forplans">
        <div className="t3"> Monthly plans </div>
        
        <div className="toggle">
        <label className="toggle-switch">
        <input type="checkbox" checked={isToggled} onChange={onToggle} />
        <span className="switch" />
        </label>
        </div>

        <div className="t4"> Annual plans </div>

        </div>

        <div className="box">

            <div className="box1">

            <div className="word1">
            <div className="w1">Basic</div>
            <div className="w2">$5</div>
            </div>

            <div className="sentences">
            <div className="word2">
                <img src={sign} alt="sign"></img>
                <div className="w3">Lorem ipsum is simply text</div>
            </div>

            <div className="word2">
                <img src={sign} alt="sign"></img>
                <div className="w3">Lorem ipsum is simply dummy dummy text text </div>
            </div>

            <div className="word2">
                <img src={sign} alt="sign"></img>
                <div className="w3">Lorem ipsum is simply dummy text</div>
            </div>

            <div className="word2">
                <img src={sign} alt="sign"></img>
                <div className="w3">Lorem ipsum is dummy text</div>
            </div>

            <div className="word2">
                <img src={sign} alt="sign"></img>
                <div className="w3">Lorem ipsum is simply dummy text text</div>
            </div>

            <div className="word2">
                <img src={sign} alt="sign"></img>
                <div className="w3">Lorem ipsum is simply dummy dummy text text</div>
            </div>

            <div className="word2">
                <img src={sign} alt="sign"></img>
                <div className="w3">Lorem ipsum is simply dummy text</div>
            </div>

            </div>

            <div><button className="btn"><div className="lo">Choose</div></button></div>

            </div>


            <div className="box2">

            <div className="word1">
            <div className="w1">Standard</div>
            <div className="w2">$15</div>
            </div>

            <div className="sentences">
            <div className="word2">
                <img src={sign} alt="sign"></img>
                <div className="w3">Lorem ipsum is simply text</div>
            </div>

            <div className="word2">
                <img src={sign} alt="sign"></img>
                <div className="w3">Lorem ipsum is simply dummy dummy text text </div>
            </div>

            <div className="word2">
                <img src={sign} alt="sign"></img>
                <div className="w3">Lorem ipsum is simply dummy text</div>
            </div>

            <div className="word2">
                <img src={sign} alt="sign"></img>
                <div className="w3">Lorem ipsum is dummy text</div>
            </div>

            <div className="word2">
                <img src={sign} alt="sign"></img>
                <div className="w3">Lorem ipsum is simply dummy text text</div>
            </div>

            <div className="word2">
                <img src={sign} alt="sign"></img>
                <div className="w3">Lorem ipsum is simply dummy dummy text text</div>
            </div>

            <div className="word2">
                <img src={sign} alt="sign"></img>
                <div className="w3">Lorem ipsum is simply dummy text</div>
            </div>

            </div>

            <div><button className="btn"><div className="lo">Choose</div></button></div>

            </div>


            <div className="box3">

            <div className="word1">
            <div className="w1">Professional</div>
            <div className="w2">$25</div>
            </div>

            <div className="sentences">
            <div className="word2">
                <img src={sign} alt="sign"></img>
                <div className="w3">Lorem ipsum is simply text</div>
            </div>

            <div className="word2">
                <img src={sign} alt="sign"></img>
                <div className="w3">Lorem ipsum is simply dummy dummy text text </div>
            </div>

            <div className="word2">
                <img src={sign} alt="sign"></img>
                <div className="w3">Lorem ipsum is simply dummy text</div>
            </div>

            <div className="word2">
                <img src={sign} alt="sign"></img>
                <div className="w3">Lorem ipsum is dummy text</div>
            </div>

            <div className="word2">
                <img src={sign} alt="sign"></img>
                <div className="w3">Lorem ipsum is simply dummy text text</div>
            </div>

            <div className="word2">
                <img src={sign} alt="sign"></img>
                <div className="w3">Lorem ipsum is simply dummy dummy text text</div>
            </div>

            <div className="word2">
                <img src={sign} alt="sign"></img>
                <div className="w3">Lorem ipsum is simply dummy text</div>
            </div>

            </div>

            <div><button className="btn"><div className="lo">Choose</div></button></div>

            </div>


        </div>


        </div>
    )
}

export default Subscription;
