import React from 'react';
import './TopBar.css';
import { Avatar, Badge, Menu, Dropdown } from 'antd';
import { UserOutlined } from '@ant-design/icons';


const TopBar = () => {

    const menu = (
        <Menu>
          <Menu.Item key="0">
            <a href="/logout">Profile</a>
          </Menu.Item>
          <Menu.Item key="1">
            <a href="/settings">Settings</a>
          </Menu.Item>
          <Menu.Item key="2">
            <a href="/settings">Activity Log</a>
          </Menu.Item>
          <Menu.Divider />
          <Menu.Item key="3">Logout</Menu.Item>
        </Menu>
    );
      

    const logout = () => {
        localStorage.removeItem("userData");
        window.location.reload();
    }

    return(
        
        <div id="topbar-wrapper">
            <Dropdown overlay={menu} trigger={['click']}>
                <span className="avatar-item" id="topbar-avatar" >
                    <Badge count={1}>
                    <Avatar shape="square" icon={<UserOutlined />} />
                    </Badge>
                </span>
            </Dropdown>
        </div>
    );
    
}

export default TopBar;
