import React from 'react';
import {
    HomeOutlined,
    UserOutlined,
    ApartmentOutlined,
    FolderOutlined,
} from '@ant-design/icons';


const LAMenu_Structure =
[
    {
        "key" : "homepage",
        "displayName" : "Homepage",
        "icon" : <HomeOutlined/>,
        "to" : "/"
    },
    {
        "key" : "personal",
        "displayName" : "Personal",
        "icon" : <UserOutlined/>,
        "children" : [
            {
                "key" : "inbox",
                "displayName" : "Inbox",
                "to" : "/inbox"
            },
            {
                "key" : "sent",
                "displayName" : "Sent",
                "to" : "/sent"
            },
            {
                "key" : "archive",
                "displayName" : "Archive",
                "to" : "/archive"
            }
        ]
    },
    {
        "key" : "usage",
        "displayName" : "Usage",
        "icon" : <ApartmentOutlined/>,
        "children" : [
            {
                "key" : "system",
                "displayName" : "System",
                "to" : "/system"
            },
            {
                "key" : "users",
                "displayName" : "Users",
                "to" : "/users"
            },
            {
                "key" : "visitation",
                "displayName" : "Visitation",
                "to" : "/visitation"
            },
            
        ]
    },
    {
        "key" : "classes",
        "displayName" : "Classes",
        "icon" : <FolderOutlined/>,
        "children" : [
            
        ]
    },
    

];

export default LAMenu_Structure;