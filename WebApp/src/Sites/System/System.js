import React from 'react';
import { Menu, Dropdown , message } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import "./System.css"
import {useTranslation} from 'react-i18next';



const SSystem = () => 
{
    const { i18n } = useTranslation();
    const handleChangeLanguage = (lang) => {
    i18n.changeLanguage(lang);
}


const onClick = ({ key }) => {
    //message.info(`Click on item ${key}`);
    handleChangeLanguage(key);
};

const menu = (
    <Menu onClick={onClick}>
      <Menu.Item key="en">
        <a target="_blank" rel="noopener noreferrer">
          English
        </a>
      </Menu.Item>
      <Menu.Item key="vi">
        <a target="_blank" rel="noopener noreferrer">
          Vietnamese
        </a>
      </Menu.Item>
      <Menu.Item key="cn">
        <a target="_blank" rel="noopener noreferrer">
          Chinese
        </a>
      </Menu.Item>
      <Menu.Item>blah</Menu.Item>
    </Menu>
  );



    return (
        <Dropdown overlay={menu}>
            <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
            Language <DownOutlined />
            </a>
        </Dropdown>
    );
}

export default SSystem;