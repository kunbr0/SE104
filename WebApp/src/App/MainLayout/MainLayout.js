import React, {useState, useEffect} from 'react';
import {Switch} from 'react-router-dom';
import { Layout, Menu, Breadcrumb, message } from 'antd';
import {
  HomeOutlined,
  PieChartOutlined,
  FileOutlined,
  TeamOutlined,
  UserOutlined,
} from '@ant-design/icons';

import './MainLayout.css';

import {NavLink} from 'react-router-dom';
import LAMenu_Structure from '../../Components/LAMenu/LAMenu_Structure';
import { removeFileItem, T } from 'antd/lib/upload/utils';

import TopBar from '../../Components/TopBar/TopBar';

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

const SiderDemo = ({kRoutes}) => {
  
    

    const [resultMenuStructure, setResultMenuStructure] = useState([]);

    const [classes, setClasses] = useState([]);

    useEffect(()=>{
        setResultMenuStructure(renderLAMenuStructure(LAMenu_Structure, false));
    },[classes]);

    useEffect(()=>{
        fetch('https://api.kunbr0.com/se104/classes.php')
            .then((response) => {
                return response.json();
            })


            .then((classes) => {
                console.log(classes);
                
                message.success('Loaded class data');
                setClasses(classes);


                /*setTimeout(function() {
                    document.body.classList.add("loaded");
                }, 500);*/
            })
            
            .catch((error) => {

            });
            
        }, []);


    const renderLAMenuStructure = (kStruct, isSubMenu, parentMenu) =>{

        let kElm = [];

        for(let str of kStruct){

            if(str.children){
                kElm.push(renderLAMenuStructure(str.children, true, str));
            }else{
                kElm.push(
                    <Menu.Item key={str.key} icon={str.icon}>
                        <NavLink  to={str.to}>{str.displayName}</NavLink>
                    </Menu.Item>);
            }

        }
        if(isSubMenu){
            let classesElm;
            if(parentMenu.key === 'classes' && classes){
                classesElm = classes.map((e)=>{
                    return (
                        <Menu.Item key={e.classID}>
                            <NavLink to={`/class/${e.className}`}>{e.className}</NavLink>
                        </Menu.Item>
                    )
                });
                
            }
            return(
                <SubMenu key={parentMenu.key} icon={parentMenu.icon} title={parentMenu.displayName}>
                    {kElm}
                    {classesElm}
                </SubMenu>
            );
        }
        return kElm;
    }

    const [collapsed, setCollapsed] = useState(false); 

    const onCollapse = collapsed => {
        console.log(collapsed);
        setCollapsed(collapsed);
    };
  
    

    return (
        <Layout style={{ minHeight: '100vh' }}>
        <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
            <div className="logo" />
            <Menu theme="dark" defaultSelectedKeys={['homepage']} mode="inline" style={{paddingTop : "64px"}}>
            {resultMenuStructure}
            </Menu>
        </Sider>
        <Layout className="site-layout">
            <Header className="site-layout-background" style={{ padding: 0 }}>
                <TopBar />
            </Header>
            <Content style={{ margin: '0 16px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
                <Breadcrumb.Item>User</Breadcrumb.Item>
                <Breadcrumb.Item>Bill</Breadcrumb.Item>
            </Breadcrumb>
            
            <Switch>
                {kRoutes}
            </Switch>
            <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
                Bill is a cat.
            </div>
            </Content>
            <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
        </Layout>
        </Layout>
    );
  
}

export default SiderDemo;