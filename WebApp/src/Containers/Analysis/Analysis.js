import React from 'react'
import { Cascader } from 'antd';
import SubjectList from '../ClassDetails/SubjectsList.json';
import SemesterList from '../ClassDetails/SemesterList.json'
import './Analysis.css';



const mappedSubjectList = SubjectList.map((s)=>{
    return {
        value : s.subjectName,
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


export default () => {
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
        console.log(value);
    }

    return (
        <div>
             <Cascader size="large" options={options} onChange={onChange} style={{width : "100%"}}/>
            
        </div>
    )
}
