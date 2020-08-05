import React from 'react'
import {connect} from 'react-redux';
import { Card, Col, Row, message, Space, Collapse, Button } from 'antd';
import { CaretRightOutlined } from '@ant-design/icons';


import AddNewStudent from '../../Components/AddNewStudent/AddNewStudent';

const Students = (props) => {
    const { Panel } = Collapse;
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
            
            <Button type="primary" danger >
                Edit
            </Button>
            <AddNewStudent 
                    //disabled={isFetchingClassDetailsData} 
                    classData={props.classData.classData} 
                    style={{marginLeft : "5px", marginRight : "5px", backgroundColor : "#52c41a", borderColor: "#52c41a"}} 
                    optionName="name" optionKey="id" 
            />
            </Panel>
        </Collapse>
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
