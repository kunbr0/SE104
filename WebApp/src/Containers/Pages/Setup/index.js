import React, {useEffect, useState} from "react";
import SetupPageWrapper, {StepWrapper} from "./styles";
import SetupStep1 from '../../../Components/Setup/Step1';
import SetupStep2 from '../../../Components/Setup/Step2';
import {Progress} from "antd";
import ParticleConfig from "./config";
import Particles from "react-particles-js";

export default function SetupPage(props) {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        setProgress(60);
    },[]);

    return (
        <SetupPageWrapper>
            <div className="setup-container">
                <div className="left-side">
                    <div className="header">
                    </div>
                    <div className="content">

                        <Particles params={ParticleConfig} className="particle"/>
                    </div>
                    <div className="footer">
                        <span>T9 Team ©2020</span>
                    </div>
                </div>
                <div className="right-side">
                    <h1 className="title">Title</h1>
                    <StepWrapper>
                        <SetupStep1/>
                    </StepWrapper>
                </div>
            </div>
        </SetupPageWrapper>
    )
}