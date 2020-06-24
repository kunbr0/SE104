import React, {useEffect} from "react";
import {useSelector} from "react-redux";
import SetupPageWrapper, {StepWrapper} from "./styles";
import SetupStep1 from '../../../Components/Setup/Step1';
import SetupStep2 from '../../../Components/Setup/Step2';
import {Steps} from "antd";
import ParticleConfig from "./config";
import Particles from "react-particles-js";

const { Step } = Steps;

export default function SetupPage(props) {
    let current = useSelector(state => state.setup.current);
    current = current <= steps.length-1 ? current : steps.length-1

    useEffect(() => {

    }, [])

    return (
        <SetupPageWrapper>
            <div className="setup-container">
                <div className="left-side">
                    <div className="header">
                    </div>
                    <div className="content">
                        <Steps direction="vertical" current={current}>
                            {steps.map((step, index) => (
                                <Step title={step.name} description={step.description} />
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
                        {steps[current].component}
                    </StepWrapper>
                </div>
            </div>
        </SetupPageWrapper>
    )
}

const steps = [
    {
        id: 1,
        name: "Database",
        title: "Database Setup",
        component: <SetupStep1/>,
        description: "Database setup"
    },
    {
        id: 2,
        name: "Account",
        title: "Account Setup",
        component: <SetupStep2/>,
        description: "Admin account setup"
    },
    {
        id: 2,
        name: "Finish",
        title: "Finish",
        component: <SetupStep2/>,
        description: null
    }
];