import React, {useState} from 'react';
import { Drawer, Form, Button, Col, Row, Input, Select, DatePicker, message } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import SelectWithTyping from '../../Components/SelectWithTyping/SelectWithTyping';
import LocationPicker from '../LocationPicker/LocationPicker';
import InputEmail from '../Input-Email/InputEmail';
import { useHttpClient } from '../../Hooks/http-hook';
import SConfig from '../../config.json';

const { Option } = Select;

const AddNewStudent = (props) => {


    const [visible, setVisible] = useState(false);

    const showDrawer = () => {
        setVisible(true);
    };

    const onClose = () => {
        setVisible(false);
    };

    // const renderOptions = () => {
    //     const classes = props.classData;
    //     console.log(props.classData);
    //     if(classes.length){
    //         return classes.map((e,i)=>{
    //             return <Option key={`${e[props.optionName]}${e[props.optionKey]}`} value={e[props.optionName]}>{e[props.optionName]}</Option>
    //         });
    //     }
    //     return null;
    // }

    //let optionClassElms = renderOptions();
    const [fName, setFName] = useState();
    const [fGender, setFGender] = useState();
    const [fDOB, setFDOB] = useState();
    const [fEmail, setFEmail] = useState();
    const [fClass, setFClass] = useState();
    const [fAddress, setFAddress] = useState({});
    const [fDescription, setFDescription] = useState();
    const validateMessages = {
        required: '${label} is required!',
        types: {
        email: '${label} is not validate email!',
        number: '${label} is not a validate number!',
        },
        number: {
        range: '${label} must be between ${min} and ${max}',
        },
    };

    const sleeper = (ms) => {
        return function(x) {
          return new Promise(resolve => setTimeout(() => resolve(x), ms));
        };
    }

    const { sendRequest } = useHttpClient();



    return (
      <>
        <Button type="primary" onClick={showDrawer} style={props.style} disabled={props.disabled} >
          <PlusOutlined /> New student
        </Button>
        <Drawer
          title="Create a new student"
          width={720}
          onClose={onClose}
          visible={visible}
          bodyStyle={{ paddingBottom: 80 }}
          footer={
            <div
              style={{
                textAlign: 'right',
              }}
            >
              <Button onClick={onClose} style={{ marginRight: 8 }}>
                Cancel
              </Button>
              <Button 
                disabled={!(fName)} 
                onClick={()=>{
                        let urlRequest = `${SConfig.SERVER_URL}:${SConfig.SERVER_PORT}${SConfig.Student.AddStudent}`;
                        
                        let formatedDate = fDOB;
                        formatedDate = formatedDate.getFullYear()+'/' + (formatedDate.getMonth()+1) + '/'+formatedDate.getDate();
                        sendRequest(urlRequest, "POST", {
                            "name": fName, 
                            "gender": fGender === "male" ? 1 : 0, 
                            "dob": formatedDate, 
                            "addr": `${fAddress.detailsAddress} ${fAddress.district} ${fAddress.city}`, 
                            "mail": fEmail
                        },{
                            'Content-Type': 'application/json'
                        })
                        .then((response) => {
                            return response.json();
                        })

                        .then(sleeper(500))

                        .then((data) => {
                            props.callbackSuccess();
                            console.log(data)
                            message.success(`Add student successfully !`);
                        })
                        
                        .catch((error) => {
                            console.log(error);
                            message.error(`Something wrong !`);
                            
                        });
                    onClose();
                }} 
                type="primary"
            >
                Submit
              </Button>
            </div>
          }
        >
          <Form layout="vertical" hideRequiredMark validateMessages={validateMessages}>
            <Row gutter={16}>
                <Col span={10}>
                <Form.Item
                    name="name"
                    label="Name"
                    rules={[{ required: true, message: 'Please enter user name' }]}
                >
                    <Input onChange={(e)=>setFName(e.target.value)} placeholder="Enter student's name" />
                </Form.Item>
                </Col>
                <Col span={6}>
                <Form.Item
                    name="gender"
                    label="Gender"
                    rules={[{ required: true, message: 'Please select an owner' }]}
                    >
                    <Select onChange={(val)=>setFGender(val)} placeholder="Select gender" style={{width: "100%"}}>
                        <Option value="male">Male</Option>
                        <Option value="female">Female</Option>
                        <Option value="undefied">Undefied</Option>
                    </Select>
                </Form.Item>
                </Col>
                <Col span={8}>
                    <Form.Item
                    name="dob"
                    label="Date of Birth"
                    rules={[{ required: true, message: 'Select birthday' }]}
                    >
                    <DatePicker
                        style={{ width: '100%' }}
                        getPopupContainer={trigger => trigger.parentNode}
                        placeholder = "Select birthday"
                        onChange={(val)=>setFDOB(val._d)}
                    />
                    </Form.Item>
                </Col>
            </Row>
            <Row gutter={16}>
                <Col span={12}>
                    <Form.Item
                        name="email"
                        label="Email"
                        rules={[{ type: "email", required: true }]}
                    >
                        <Input onChange={(val)=>setFEmail(val.target.value)} placeholder="Enter email address"/>
                        
                    </Form.Item>
                </Col>
                <Col span={12}>
                    <Form.Item
                    name="class"
                    label="Class"
                    rules={[{ required: true }]}
                    >
                        <SelectWithTyping 
                            options={props.classData} 
                            optionName="name" 
                            optionKey="id" 
                            placeholder="Please choose the class"
                            callbackSelection={setFClass}
                        />
                    </Form.Item>
                </Col>
            </Row>
            <Row gutter={16}>
                <Col span={24}>
                    <Form.Item
                    name="address"
                    label="Address"
                    rules={[{ required: true}]}
                    >
                    
                    <LocationPicker address={fAddress} callbackChanges={setFAddress} />
                    </Form.Item>
                </Col>
            </Row>
            <Row gutter={16}>
              <Col span={24}>
                <Form.Item
                  name="description"
                  label="Description"
                  rules={[
                    {
                      required: true,
                      message: 'Please enter the description',
                    },
                  ]}
                >
                  <Input.TextArea rows={4} placeholder="Please enter the description" />
                </Form.Item>
              </Col>
            </Row>
          </Form>
        </Drawer>
      </>
    );

}

export default AddNewStudent;