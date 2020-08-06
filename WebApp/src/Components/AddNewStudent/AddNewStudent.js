import React, {useState} from 'react';
import { Drawer, Form, Button, Col, Row, Input, Select, DatePicker } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import SelectWithTyping from '../../Components/SelectWithTyping/SelectWithTyping';
import LocationPicker from '../LocationPicker/LocationPicker';
import InputEmail from '../Input-Email/InputEmail';

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
              <Button onClick={onClose} type="primary">
                Submit
              </Button>
            </div>
          }
        >
          <Form layout="vertical" hideRequiredMark>
            <Row gutter={16}>
                <Col span={10}>
                <Form.Item
                    name="name"
                    label="Name"
                    rules={[{ required: true, message: 'Please enter user name' }]}
                >
                    <Input placeholder="Enter student's name" />
                </Form.Item>
                </Col>
                <Col span={6}>
                <Form.Item
                    name="gender"
                    label="Gender"
                    rules={[{ required: true, message: 'Please select an owner' }]}
                    >
                    <Select placeholder="Select gender" style={{width: "100%"}}>
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
                    />
                    </Form.Item>
                </Col>
            </Row>
            <Row gutter={16}>
                <Col span={12}>
                    <Form.Item
                        name="email"
                        label="Email"
                        rules={[{ required: true, message: 'Please input email' }]}
                        >
                        <InputEmail  />
                        
                    </Form.Item>
                </Col>
                <Col span={12}>
                    <Form.Item
                    name="class"
                    label="Class"
                    rules={[{ required: true, message: 'Email address' }]}
                    >
                        <SelectWithTyping 
                            options={props.classData} 
                            optionName="name" 
                            optionKey="id" 
                            placeholder="Please choose the class"
                            callbackSelection={()=>{}}
                        />
                    </Form.Item>
                </Col>
            </Row>
            <Row gutter={16}>
                <Col span={24}>
                    <Form.Item
                    name="address"
                    label="Address"
                    rules={[{ required: true, message: 'Please choose the dateTime' }]}
                    >
                    
                    <LocationPicker />
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