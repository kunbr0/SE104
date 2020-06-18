import React, { useState } from 'react';
import './TestLogin.css';

export default function TestLogin() {

    const [pwClass, setPwClass] = useState('');
    
    const onFocus = () => {
        setPwClass("password");
    }

    const onLostFocus = () => {
        setPwClass("");
    }

    return (
        <div>
            <div className={`owl ${pwClass}`}>
                <div className={`hand ${pwClass}`} ></div>
                <div className={`hand hand-r ${pwClass}`}></div>
                <div className={`arms ${pwClass}`}>
                    <div className={`arm ${pwClass}`}></div>
                    <div className={`arm arm-r ${pwClass}`}></div>
                </div>
            </div>
            <div className="form">
                <div className="control">
                    <label for="email" className="fa fa-envelope"></label>
                    <input id="email" placeholder="Email" type="email" onFocus={() => onLostFocus()}></input>
                </div>
                <div className="control">
                    <label for="password" className="fa fa-asterisk"></label>
                    <input id="password" 
                    placeholder="Password" 
                    type="password" 
                    onFocus={() => onFocus()}></input>
                    
                </div>
            </div>
        </div>
    )
}