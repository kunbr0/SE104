import React, { useState } from 'react';
import {Button} from 'antd'
import './TestLogin.css';
import { useHttpClient } from '../../Hooks/http-hook';


export default function TestLogin() {

    const [pwClass, setPwClass] = useState('');

    const { sendRequest } = useHttpClient();

    const login = (e) => {
        console.log("login");
        if(e) e.preventDefault();
        let user = document.getElementById("user").value;
        let pass = document.getElementById("pass").value;
        sendLoginRequest(user, pass);
    }

    const loginSuccessfully = (userData) =>{

        userData.then((data)=>{
            
            localStorage.setItem("userData", data.token);
        });
        
        window.location.reload();
    }

    const sendLoginRequest = (user, pass) =>{
        sendRequest(
            "https://api.kunbr0.com/se104/login/index.php", 
            "POST",
            JSON.stringify({
                email : user,
                password: pass
            }),
            {
                'Content-Type' : 'application/json'
            }
        )
        .then((response) => {
            if(response.ok){ 
                console.log("ss");
                loginSuccessfully(response.json())
            }else{
                document.getElementById("login-notification").append("Authentication Failed !!");
            }
            //return response.json();
        })
        .catch((error) => {
            console.log(error);
            
        });
    }

    
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
                <div className="control" >
                    <label for="user" className="fa fa-envelope"></label>
                    <input style={{width : '100%'}} id="user" placeholder="Email" type="email" onFocus={() => onLostFocus()}></input>
                </div>
                <div className="control">
                    <label for="pass" className="fa fa-lock"></label>
                    <input
                        style={{width : '100%'}}
                        id="pass"
                        placeholder="Password"
                        type="password"
                        onFocus={() => onFocus()}
                        onBlur={() => onLostFocus()}>
                    </input>
                </div>
                <div>
                    <Button id="login-button" type="primary" onClick={() => onLostFocus(), login}>Login</Button>
                    <p id="signup-text">Not a member? <a href="#">Sign up Here</a></p>
                    <p class="login-bottom-text">
                    
                    <a href="#">Terms & Conditions</a> and 
                    <a href="#"> Privacy Policy</a>
                </p>
                </div>
            </div>
        </div>
    )
}
