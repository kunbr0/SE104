import React, { useState } from 'react';
import {Button} from 'antd'
import './TestLogin.css';
import { useHttpClient } from '../../Hooks/http-hook';
import agent from "../../utilities/agent";


export default function TestLogin() {

    const [username, setUsername] = useState();
    const [password, setPassword] = useState();

    const [pwClass, setPwClass] = useState('');
    const { sendRequest } = useHttpClient();

    const login = (e) => {
        if(e) e.preventDefault();
        // sendLoginRequest(username, password);
        agent.Auth.login(username, password).then(res => {
            console.log(res);
        })
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
            <div className={`owl`}>
                <div className={`hand ${pwClass}`} ></div>
                <div className={`hand hand-r ${pwClass}`}></div>
                <div className={`arms ${pwClass}`}>
                    <div className={`arm ${pwClass}`}></div>
                    <div className={`arm arm-r ${pwClass}`}></div>
                </div>
            </div>
            <div className="form">
                <div className="control" >
                    <label className="fa fa-envelope"></label>
                    <input style={{width : '100%'}} id="user" placeholder="Email" type="email" onChange={(evt) => setUsername(evt.target.value)}></input>
                </div>
                <div className="control">
                    <label className="fa fa-lock"></label>
                    <input
                        style={{width : '100%'}}
                        id="pass"
                        placeholder="Password"
                        type="password"
                        onFocus={() => onFocus()}
                        onBlur={() => onLostFocus()}
                        onChange={(evt) => setPassword(evt.target.value)}>
                    </input>
                </div>
                <div>
                    <Button id="login-button" type="primary" onClick={() => login()}>Login</Button>
                    <p id="signup-text">Not a member? <a href="#">Sign up Here</a></p>
                    <p className="login-bottom-text">
                    
                    <a href="#">Terms & Conditions</a> and 
                    <a href="#"> Privacy Policy</a>
                </p>
                </div>
            </div>
        </div>
    )
}
