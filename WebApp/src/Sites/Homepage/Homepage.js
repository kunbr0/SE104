import React  from 'react';
import { Space,Card } from 'antd';
import './Homepage.css';


const Homepage = () => {
    
    const mainSpaceStyle = {
        width : "500px",
        
    }

    return(

        <div className="site-card-border-less-wrapper">
            <Space direction="horizontal" style={mainSpaceStyle}>
                <Card title="Card" style={{ width: 300 }}>
                    <p>Card content</p>
                    <p>Card content</p>
                </Card>
                <Card title="Card" style={{ width: 300 }}>
                    <p>Card content</p>
                    <p>Card content</p>
                </Card>
                
            </Space>
        </div>

    )

}

export default Homepage;
