import React from 'react';
import {connect} from 'react-redux';
import SelectWithTyping from '../../Components/SelectWithTyping/SelectWithTyping';
import SubmitWithLoading from '../../Components/ButtonWithLoading/ButtonWithLoading';

import { Card, Col, Row } from 'antd';
import Subjectslist from './SubjectsList.json';


const ClassDetails = (props) => {
    console.log(props.match.params.classCode);

    console.log(props);
    return (

        <div className="site-card-wrapper">
            <Row gutter={16}>
            <Col span={8}>
                <Card size={300} title="Classes" bordered={false}>
                    <SelectWithTyping options={props.classData.classData} optionName="className" optionKey="classID" placeholder="Select class"/>
                </Card>
            </Col>
            <Col span={8}>
                <Card title="Subjects" bordered={false}>
                    <SelectWithTyping options={Subjectslist} optionName="subjectName" optionKey="sid" placeholder="Select subject"/>
                </Card>
            </Col>
            <Col span={8}>
                <Card title="Classinfo" bordered={false}>
                Card content
                </Card>
            </Col>
            </Row>
            <SubmitWithLoading/>
        </div>
    );
}




const mapStateToProps = (state) => {
    return {
        classData : state.classData
    };
}


export default connect(mapStateToProps)(ClassDetails);
