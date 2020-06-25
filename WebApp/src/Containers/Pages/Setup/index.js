import React, {useEffect, useState} from "react";
import SetupPageWrapper, {StepWrapper} from "./styles";
import DBStep from '../../../Components/Setup/Database';
import InfoStep from '../../../Components/Setup/Information';
import FinalStep from '../../../Components/Setup/Finish';
import SystemStep from '../../../Components/Setup/System';
import Loader from '../../../Components/Setup/Loader';
import {Steps} from "antd";
import ParticleConfig from "./config";
import Particles from "react-particles-js";
import Helmet from "react-helmet";

const { Step } = Steps;

export default function SetupPage(props) {
    const [current, setCurrent] = useState(1);
    const [isLoaded, setLoadedState] = useState(false);
    const CurrentStep = steps[current].component;

    useEffect(() => {

    }, [])

    return (
        <SetupPageWrapper>
            <Helmet>
                <meta charSet="utf-8" />
                <title>{`QLHS - ${steps[current].title}`}</title>
            </Helmet>
            {isLoaded ? (
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
            ) : (
                <Loader/>
            )}
        </SetupPageWrapper>
    )
}

const steps = [
    {
        name: "Database",
        title: "Database Setup",
        component: DBStep,
        description: "Database setup"
    },
    {
        name: "System",
        title: "System Information",
        component: SystemStep,
        description: "System config"
    },
    {
        name: "Information",
        title: "Information needed",
        component: InfoStep,
        description: "Admin information setup"
    },
    {
        name: "Finish",
        title: "Finish",
        component: FinalStep,
        description: null
    }
];