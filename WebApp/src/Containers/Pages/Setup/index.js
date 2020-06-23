import React, {lazy, useEffect, useState} from "react";
import SetupPageWrapper, {StepWrapper} from "./styles";
import SetupStep1 from '../../../Components/Setup/Step1';
import SetupStep2 from '../../../Components/Setup/Step2';
import {Progress} from "antd";
import ParticleConfig from "./config";
import Particles from "react-particles-js";

const steps = {
    1: {
        id: 1,
        name: "Database",
        title: "Step 1",
        component: <SetupStep1/>
    },
    2: {
        id: 2,
        name: "Account",
        title: "Step 2",
        component: <SetupStep2/>
    }
}

export default function SetupPage(props) {

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
                    <h1 className="title">{steps[1].title}</h1>
                    <StepWrapper>
                        {steps[1].component}
                    </StepWrapper>
                </div>
            </div>
        </SetupPageWrapper>
    )
}