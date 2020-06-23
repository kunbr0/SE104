import React from 'react';
import { Descriptions } from 'antd';

const Profile = () => {
    return(
        <Descriptions title="User Info" layout="vertical">
            <Descriptions.Item label="UserName">kunbr0</Descriptions.Item>
            <Descriptions.Item label="Telephone">1800 1234</Descriptions.Item>
            <Descriptions.Item label="Live">Phu Yen, VietNam</Descriptions.Item>
            <Descriptions.Item label="Address" span={1}>
            No. 18, LVC, Hangzhou, Zhejiang, China
            </Descriptions.Item>
            <Descriptions.Item label="Remark">Nong Dan</Descriptions.Item>
        </Descriptions>
    );
}

export default Profile;