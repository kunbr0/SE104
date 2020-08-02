import React, {useState, useEffect} from 'react';
import {connect} from 'react-redux';
import SelectWithTyping from '../../Components/SelectWithTyping/SelectWithTyping';
import SubmitWithLoading from '../../Components/ButtonWithLoading/ButtonWithLoading';
import AddNewStudent from '../../Components/AddNewStudent/AddNewStudent';
import StatisticScore from '../../Components/Statistic/Statistic';


import { Card, Col, Row, message, Space, Collapse, Button } from 'antd';
import { CaretRightOutlined } from '@ant-design/icons';

import Subjectslist from './SubjectsList.json';
import StudentScoreTable from '../../Components/StudentScoresTable/StudentScoresTable';

import { useHttpClient } from '../../Hooks/http-hook';
import {useHistory} from 'react-router-dom';

const ClassDetails = (props) => {
    console.log(props.match.params.classCode);

    console.log(props);

    const [selectedClass, setSelectedClass] = useState();
    
    const [selectedSubject, setSelectedSubject] = useState();

    const { sendRequest } = useHttpClient();

    const { Panel } = Collapse;

    // Fetch data
    const [selectedClassDetailsData, setSelectedClassDetailsData] = useState({});
    const [isFetchingClassDetailsData, setIsFetchingClassDetailsData] = useState(false);

    const [tableEditable, setTableEditable] = useState(false);

    // Redirect 
    const rHistory = useHistory();

    const onSelectClass = (kClass) => {
        console.log("kClass" + kClass);
        setSelectedClass(kClass);
        //rHistory.push(`/class/${selectedClass}`);
    }


    console.log(selectedClass);
    console.log(selectedSubject);

    const sleeper = (ms) => {
        return function(x) {
          return new Promise(resolve => setTimeout(() => resolve(x), ms));
        };
    }

    
    useEffect(()=>{

    },[]);

    const fetchClassDetailsData = () => {
        setIsFetchingClassDetailsData(true);

        let urlRequest = "";
        if(selectedSubject === "Student Details"){
            urlRequest = `https://api.kunbr0.com/se104/class/${selectedClass}.php`
        }else{
            urlRequest = `https://api.kunbr0.com/se104/subjects/${selectedClass}/${selectedSubject}.php`;
        }

        sendRequest(urlRequest)
            .then((response) => {
                return response.json();
            })

            .then(sleeper(500))

            .then((data) => {
                console.log(data);
                setSelectedClassDetailsData(data);
                setIsFetchingClassDetailsData(false);
                message.success(`${selectedSubject} data of ${selectedClass} loaded successfully !`);
            })
            
            .catch((error) => {
                console.log(error);
                message.error(`Cannot get ${selectedSubject} data of ${selectedClass} !`);
                setSelectedClassDetailsData([])
                setIsFetchingClassDetailsData(false);
            });
    }

    return (

        <div className="site-card-wrapper">
            <Collapse
                bordered={false}
                defaultActiveKey={['1']}
                expandIcon={({ isActive }) => <CaretRightOutlined rotate={isActive ? 90 : 0} />}
                className="site-collapse-custom-collapse"
                style={{marginBottom : "10px"}}
            >
                <Panel header="Class data selection" key="1" className="site-collapse-custom-panel">
                <Row gutter={16}>
                <Col span={8}>
                    <Card loading={props.classData.classData.length > 0 ? false : true} size={300} title="Classes" bordered={false}>
                        <SelectWithTyping 
                            value={props.match.params.classCode} 
                            callbackSelection={setSelectedClass} 
                            options={props.classData.classData} 
                            optionName="name" optionKey="id" 
                            placeholder="Select class"
                            disabled={isFetchingClassDetailsData}/>
                    </Card>
                </Col>
                <Col span={8}>
                    <Card loading={props.classData.classData.length > 0 ? false : true} title="Subjects" bordered={false}>
                        <SelectWithTyping 
                            callbackSelection={setSelectedSubject} 
                            options={Subjectslist} 
                            optionName="subjectName" optionKey="sid" 
                            placeholder="Select subject"
                            disabled={isFetchingClassDetailsData}/>
                    </Card>
                </Col>
                <Col span={8}>
                    <Card loading={isFetchingClassDetailsData} title="Classinfo" bordered={false}>
                        <Space direction="vertical">
                            <Space>Lecture : Le Thi Van a</Space>
                            <Space>Enrolled Student  : 46</Space>
                            
                        </Space>
                    </Card>
                </Col>
                </Row>
                <SubmitWithLoading isLoading={isFetchingClassDetailsData} onClick={fetchClassDetailsData} maxTimeLoading={1000} />
                <AddNewStudent disabled={isFetchingClassDetailsData} classData={props.classData.classData} style={{marginLeft : "5px", marginRight : "5px", backgroundColor : "#52c41a", borderColor: "#52c41a"}} />
                <StatisticScore 
                    pClassName={selectedClass} 
                    pSubject={selectedSubject}
                    disabled={!selectedClassDetailsData}
                    />
                <Button type="primary" danger={tableEditable} onClick={()=>setTableEditable(!tableEditable)}>
                    {!tableEditable ? "Edit":"Save"} 
                </Button>
                </Panel>
            </Collapse>
            <StudentScoreTable tableEditable={tableEditable} classDetailsData={selectedClassDetailsData.data} columnType={selectedClassDetailsData.type} isLoading={isFetchingClassDetailsData} />
        </div>
    );
}




const mapStateToProps = (state) => {
    return {
        classData : state.classData
    };
}


export default connect(mapStateToProps)(ClassDetails);
