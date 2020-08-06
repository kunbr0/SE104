import React, {useState} from 'react'
import { Cascader } from 'antd';
import SubjectList from '../ClassDetails/SubjectsList.json';
import SemesterList from '../ClassDetails/SemesterList.json'
import { useHttpClient } from '../../Hooks/http-hook';
import {connect} from 'react-redux';
import SConfig from '../../config.json';
import './Analysis.css';


import { Card, Col, Row, message, Space, Collapse, Button } from 'antd';

import SemesterAna from './Semester/SemesterAna';
import SubjectAna from './Subject/SubjectAna';


const mappedSubjectList = SubjectList.map((s)=>{
    return {
        value : s.subjectValue,
        label : s.subjectName
    }
});

const mappedSemesterList = SemesterList.map((s)=>{
    return {
        value : s.semesterName,
        label : s.semesterName,
    }
});

const mappedSemesterListWithSubject = SemesterList.map((s)=>{
    return {
        value : s.semesterName,
        label : s.semesterName,
        children : mappedSubjectList
    }
});

const sleeper = (ms) => {
    return function(x) {
      return new Promise(resolve => setTimeout(() => resolve(x), ms));
    };
}

const Analysis = (props) => {
    const { sendRequest } = useHttpClient();

    const [isLoading, setIsLoading] = useState(false);
    const [reportData, setReportData] = useState({type: -1});

    const options = [
        {
            value: 'ana_subject',
            label: 'Subject Report',
            children: mappedSemesterListWithSubject,
        },
        {
            value: 'ana_semester',
            label: 'Final Semester Report',
            children: mappedSemesterList,
        },
    ];
        
    function onChange(value) {
        setIsLoading(true);
        if(value.length === 3){
            let urlRequest = `${SConfig.SERVER_URL}:${SConfig.SERVER_PORT}${SConfig.Report.SubjectReport}`;
            sendRequest(urlRequest, "POST", {
                sem_name : value[1],
                subj_name : value[2],
                yearid : props.yearData.yearid
            },{
                'Content-Type': 'application/json'
            })
            .then((response) => {
                return response.json();
            })

            .then(sleeper(1000))

            .then((data) => {
                console.log(data);
                setIsLoading(false);
                let resultData = [];
                for(let i=0; i<data.Pass.length; i++){
                    resultData.push({
                        id : data.Pass[i].id,
                        name : data.Pass[i].name,
                        siso : data.NoStudent[i].SiSo,
                        sldat: data.Pass[i].SoLuongDat,
                        tyle : (data.Pass[i].SoLuongDat / data.NoStudent[i].SiSo)*100
                    })  
                }
                console.log(resultData);
                setReportData({
                    type : 1,
                    data: resultData
                });
            })
            
            .catch((error) => {
                console.log(error);
                setIsLoading(false);
            });
        }
    }

    const noticeDiv = <Card loading={isLoading}>Please select options</Card>;

    return (
        <div>
            <Cascader size="large" options={options} onChange={onChange} style={{width : "100%"}}/>
            
            {
                (reportData.type === -1) ?  noticeDiv: 
                (reportData.type === 1) ? 
                    <SubjectAna isLoading={isLoading} 
                        classDetailsData={reportData.data}
                    /> : 
                    <SemesterAna isLoading={isLoading}
                    
                    />
            }
        </div>
    )
}



const mapStateToProps = (state) => {
    return {
        yearData : state.yearData
    };
}


export default connect(mapStateToProps)(Analysis);
