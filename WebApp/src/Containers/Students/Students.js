import React, {useEffect, useState} from 'react'
import {connect} from 'react-redux';
import { Col, Row, message, Collapse, Button, Table, Modal } from 'antd';
import { CaretRightOutlined } from '@ant-design/icons';
import SConfig from '../../config.json';
import { useHttpClient } from '../../Hooks/http-hook';

import AddNewStudent from '../../Components/AddNewStudent/AddNewStudent';
import ButtonWithLoading from '../../Components/ButtonWithLoading/ButtonWithLoading'



const Students = (props) => {
    const { Panel } = Collapse;
    const { sendRequest } = useHttpClient();
    const [isLoading, setIsLoading] = useState(false);
    const [studentData, setStudentData] = useState([]);


    

    const sleeper = (ms) => {
        return function(x) {
          return new Promise(resolve => setTimeout(() => resolve(x), ms));
        };
    }

    const requestGetAllStudent = () => {
        setIsLoading(true);
        let urlRequest = `${SConfig.SERVER_URL}:${SConfig.SERVER_PORT}${SConfig.Student.GetAllStudents}`;
        sendRequest(urlRequest, "GET")
        .then((response) => {
            return response.json();
        })

        .then(sleeper(500))

        .then((data) => {
            
            let dataWithKey = [];
            let index = 1110;
            data.forEach(e => {
                dataWithKey.push({
                    ...e,
                    key : index,
                    gender : e["gender"] === 1 ? "Male" : "Female"
                })
                index ++;
            });

            console.log(dataWithKey);
            setStudentData(dataWithKey);
            setIsLoading(false);
            message.success(`Get all students successfully !`);

        })
        
        .catch((error) => {
            console.log(error);
            message.error(`Cannot get list of students !`);
            setStudentData([])
            setIsLoading(false);
        });
    }

    useEffect(()=>{
        requestGetAllStudent();
    },[]);
    const columns = [
        {
            title: 'MSSV',
            width: 100,
            dataIndex: 'id',
            key: 'id',
            fixed: 'left',
        },
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
            width: 150,
        },
        {
            title: 'Gender',
            dataIndex: 'gender',
            key: 'gender',
            width: 150,
        },
        {
            title: 'DOB',
            dataIndex: 'dob',
            key: 'dob',
            width: 150,
        },
        {
            title: 'Email',
            dataIndex: 'email',
            key: 'email',
            width: 150,
        },
        {
            title: 'Address',
            dataIndex: 'address',
            key: 'address',
            width: 150,
        },
        
        {
            title: 'Action',
            key: 'operation',
            fixed: 'right',
            width: 100,
            render: (val) => <a onClick={()=>console.log(val)}>action</a>,
        },
    ];


    // Begin Update Student Modal 

    const [modalVisible, setModalVisible] = useState(false);
    const [confirmLoading, setConfirmLoading] = useState(false);
    const [modalText, setModalText] = useState(false);

    const showModal = () => {
        setModalVisible(true);
    };
    
    const handleOk = () => {
        setModalText('The modal will be closed after two seconds');
        setConfirmLoading(true);

        setTimeout(() => {
            setModalVisible(false);
            setConfirmLoading(false);
        }, 2000);
    };

    const handleCancel = () => {
        console.log('Clicked cancel button');
        setModalVisible(false);
    };
    // End Update Student Modal

    return (
        <>
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
                
            </Col>
            
            
            </Row>
            
            <ButtonWithLoading label="Reload" isLoading={isLoading} onClick={requestGetAllStudent} maxTimeLoading={10000} />
                
            <Button type="primary" onClick={showModal}>
                Open Modal with async logic
            </Button>
            <Modal
            title="Title"
            visible={modalVisible}
            onOk={handleOk}
            confirmLoading={confirmLoading}
            onCancel={handleCancel}
            >
                <p>{modalText}</p>
            </Modal>
            <AddNewStudent 
                    //disabled={isFetchingClassDetailsData} 
                    classData={props.classData.classData} 
                    style={{marginLeft : "5px", marginRight : "5px", backgroundColor : "#52c41a", borderColor: "#52c41a"}} 
                    optionName="name" optionKey="id" 
                    callbackSuccess={requestGetAllStudent}
                    
            />
            </Panel>
        </Collapse>

        <Table bordered loading={isLoading} 
            columns={columns} dataSource={studentData}  scroll={{ x: 50, y: 500 }} />
        </>
    )
}


const mapStateToProps = (state) => {
    return {
        classData : state.classData,
        yearid : state.yearid
    };
}


export default connect(mapStateToProps)(Students);
