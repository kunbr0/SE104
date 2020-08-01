import React, {useState, useEffect} from 'react';
import { Descriptions, Badge, Card } from 'antd';

const Profile = () => {
    const [isLoading, setIsLoading] = useState(true);
    useEffect(()=>{
        setTimeout(()=>{
            setIsLoading(false);
        }, 1000);
    });
    return(
        <Card loading={isLoading} style={{width : "70%"}}>
        <Descriptions title="User Info" layout="vertical" bordered column={10}>
            <Descriptions.Item label="UserId" span={2}>trungnv</Descriptions.Item>
            <Descriptions.Item label="Name" span={4}>Nguyen Van Trung</Descriptions.Item>
            <Descriptions.Item label="Status" span={4}>
            <Badge status="processing" text="Working" />
            </Descriptions.Item>

            <Descriptions.Item label="Falcuty" span={4}>Software Engineering</Descriptions.Item>
            
            <Descriptions.Item label="Email" span={4}>
            trungnv@uit.edu.vn
            </Descriptions.Item>
            <Descriptions.Item label="National ID" span={2}>07920128123</Descriptions.Item>
            
            <Descriptions.Item label="Address" span={6}>173/22 Nguyen Thi Minh Khai, P6, Q3, TP.HCM</Descriptions.Item>
            <Descriptions.Item label="Date of birth" span={2}>17/08/1972</Descriptions.Item>
            <Descriptions.Item label="Gender" span={2}>Male</Descriptions.Item>
            
            <Descriptions.Item label="Classes">
            SE104.K22.PMCL
            <br />
            IT002.K23.PMCL
            <br />
            IT007.K18.KHCL
            <br />
            SE101.K13.PMCL
            <br />
            PH002.K25
            
            </Descriptions.Item>
        </Descriptions>
        </Card>
    );
}

export default Profile;