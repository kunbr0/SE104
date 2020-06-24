import React, {useEffect, useState} from "react";
import SetupPageWrapper, {StepWrapper} from "./styles";
import SetupStep1 from '../../../Components/Setup/Step1';
import SetupStep2 from '../../../Components/Setup/Step2';
import {Steps} from "antd";
import ParticleConfig from "./config";
import Particles from "react-particles-js";
import Helmet from "react-helmet";

const { Step } = Steps;

export default function SetupPage(props) {
    const [current, setCurrent] = useState(0);

    const CurrentStep = steps[current].component;

    useEffect(() => {

    }, [])

    return (
        <SetupPageWrapper>
            <Helmet>
                <meta charSet="utf-8" />
                <title>{`QLHS - ${steps[current].title}`}</title>
            </Helmet>
            <div className="setup-container">
                <div className="left-side">
                    <div className="header">
                    </div>
                    <div className="content">
                        <Steps direction="vertical" current={current}>
                            {steps.map((step, index) => (
                                <Step key={index} title={step.name} description={step.description} />
                            ))}
                        </Steps>
                    </div>
                    <div className="footer">
                        <span>T9 Team ©2020</span>
                    </div>
                    <Particles params={ParticleConfig} className="particle"/>
                </div>
                <div className="right-side">
                    <h1 className="title">{steps[current].title}</h1>
                    <StepWrapper>
                        <CurrentStep step={current} onNext={(value) => setCurrent(value)}/>
                    </StepWrapper>
                </div>
            </div>
        </SetupPageWrapper>
    )
}

const steps = [
    {
        name: "Database",
        title: "Database Setup",
        component: SetupStep1,
        description: "Database setup"
    },
    {
        name: "Account",
        title: "Account Setup",
        component: SetupStep2,
        description: "Admin account setup"
    },
    {
        name: "Finish",
        title: "Finish",
        component: SetupStep2,
        description: null
    }
];