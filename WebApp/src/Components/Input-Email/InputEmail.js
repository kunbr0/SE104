import React from 'react';

import { Input, Form } from 'antd';

const InputEmail = () => {
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
    
    return(
        <Form.Item name={['Email']}  rules={[{ type: 'email' }]} style={{marginBottom: "0px"}}>
            <Input placeholder="Enter email address"/>
        </Form.Item>
    )
}

export default InputEmail;