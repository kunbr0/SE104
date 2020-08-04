import React, {useState, useEffect} from 'react';
import {Redirect, Route, Switch} from 'react-router-dom';
import { Layout, Menu, Breadcrumb, message } from 'antd';
import SConfig from '../../config.json';

import './MainLayout.css';

import {updateClassData} from '../../Redux/index';

import {NavLink} from 'react-router-dom';
import LAMenu_Structure from '../../Components/LAMenu/LAMenu_Structure';




import {connect} from 'react-redux';

import TopBar from '../../Components/TopBar/TopBar';

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

const SiderDemo = (props) => {
  
    console.log(props);

    const [resultMenuStructure, setResultMenuStructure] = useState([]);

    const [classes, setClasses] = useState([]);

    useEffect(()=>{
        setResultMenuStructure(renderLAMenuStructure(LAMenu_Structure, false));
    },[classes]);

    useEffect(()=>{
        fetch(`${SConfig.SERVER_URL}:${SConfig.SERVER_PORT}${SConfig.ClassRoutes.GetAllClass}`)
            .then((response) => {
                return response.json();
            })


            .then((classes) => {
                console.log(classes);
                
                message.success('Loaded class data');
                setClasses(classes);
                props.updateClassData(classes);


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
                        <Menu.Item key={e.id}>
                            <NavLink to={`/class/${e.name}`}>{e.name}</NavLink>
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
  
    console.log(props);

    return (
        <Layout style={{ minHeight: '100vh' }}>
        <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
            <div className="logo" />
            <Menu  theme="dark" defaultSelectedKeys={['homepage']} mode="inline" style={
                {
                    paddingTop : "64px"
                }
            }>
            {resultMenuStructure}
            </Menu>
        </Sider>
        <Layout className="site-layout">
            <Header className="site-layout-background" style={{ padding: 0 }}>
                <TopBar />
            </Header>
            <Content style={{ margin: '0 16px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
                <Breadcrumb.Item>QLHS</Breadcrumb.Item>
                <Breadcrumb.Item>Homepage</Breadcrumb.Item>
            </Breadcrumb>
            
            <Switch>
                {props.kRoutes}
                <Route>
                    <Redirect to={{pathname: '/'}}/>
                </Route>
            </Switch>
            
            </Content>
            <Footer style={{ textAlign: 'center' }}>T9 Team ©2020 </Footer>
        </Layout>
        </Layout>
    );
  
}



const mapStateToProps = state => {
    return {
        classData : state.classData
    };
}

const mapDispatchToProps = dispatch => {
    return {
        updateClassData : (payload) => dispatch(updateClassData(payload))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SiderDemo);
