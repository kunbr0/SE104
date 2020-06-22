import React, {useEffect} from 'react';
import { Table } from 'antd';
import TextTranslation from '../TextTranslation/TextTranslation';
import ScoreCoefficient from '../../Containers/Pages/ClassDetails/SubjectCoefficient.json';
const columns = [
  {
    title: 
        <div>
            <TextTranslation textName="ClassInfo-Table-No.1" kClass="pcview"/>
            <TextTranslation textName="ClassInfo-Table-No.2" kClass="mbview"/>
        </div>,
    dataIndex: 'studentID',
    key: 'studentID',
    width: 10,
    fixed: 'left',
    filters: [
      {
        text: 'Joe',
        value: 'Joe',
      },
      {
        text: 'John',
        value: 'John',
      },
    ],
        onFilter: (value, record) => record.name.indexOf(value) === 0,
    },
  
    {
        title: 
            <div>
                <TextTranslation textName="ClassInfo-Table-Name.1" kClass="pcview"/>
                <TextTranslation textName="ClassInfo-Table-Name.2" kClass="mbview"/>
            </div>,
        dataIndex: 'studentName',
        key: 'studentName',
        width: 35,
        sorter: (a, b) => a.studentID - b.studentID,
    },
    {
    title: 
        <div>
            <TextTranslation textName="ClassInfo-Table-15mins.1" kClass="pcview"/>
            <TextTranslation textName="ClassInfo-Table-15mins.2" kClass="mbview"/>
        </div>,
    dataIndex: 'k15mins',
    key: 'k15mins',
    width: 12,
    },
    {
    title: 
        <div>
            <TextTranslation textName="ClassInfo-Table-45mins.1" kClass="pcview"/>
            <TextTranslation textName="ClassInfo-Table-45mins.2" kClass="mbview"/>
        </div>,
    dataIndex: 'k45mins',
    key: 'k45mins',
    width: 12,
    },
    {
    title: 
        <div>
            <TextTranslation textName="ClassInfo-Table-midterm.1" kClass="pcview"/>
            <TextTranslation textName="ClassInfo-Table-midterm.2" kClass="mbview"/>
        </div>,
    dataIndex: 'kmidterm',
    key: 'kmidterm',
    width: 12,
    },
    {
        title: 
            <div>
                <TextTranslation textName="ClassInfo-Table-endterm.1" kClass="pcview"/>
                <TextTranslation textName="ClassInfo-Table-endterm.2" kClass="mbview"/>
            </div>,
        dataIndex: 'kendterm',
        key: 'kendterm',
        width: 12,
    }, 
    {
        title: 
            <div>
                <TextTranslation textName="ClassInfo-Table-final.1" kClass="pcview"/>
                <TextTranslation textName="ClassInfo-Table-final.2" kClass="mbview"/>
            </div>,
        dataIndex: 'final',
        key: 'final',
        width: 12,
    },     
    {
        title: 
            <div>
                <TextTranslation textName="ClassInfo-Table-Action.1" kClass="pcview"/>
                <TextTranslation textName="ClassInfo-Table-Action.2" kClass="mbview"/>
            </div>,
        dataIndex: 'action',
        key: 'action',
        width: 10,
        fixed: 'right',
    },
];

let data = [];
// for (let i = 0; i < 100; i++) {
//   data.push({
//     key: i,
//     no: i,
//     name: 'Nguyen Thi Quynh Ngan',
//     age: i + 1,
//     s15mins: '8.50',
//     s45mins: '7.75',
//     smidterm: '8.25',
//     sendterm: '6.50',
//     final: '7.74',
//     action: 'Edit',
//   });
// }


const calculateFinalScore = (e) => {
    let coef = ScoreCoefficient;
    return e.k15mins*coef.k15mins + e.k45mins*coef.k45mins 
        + e.kmidterm*coef.kmidterm + e.kmidterm*coef.kmidterm;
}

const StudentScoresTable = (props) => {
    
    const setClassDetailsData = () => {
        data = []; // clear data
        let i=0;
        if(props.classDetailsData){
            for(let e of props.classDetailsData){
                e["key"] = i;
                e["final"] = calculateFinalScore(e);
                data.push(e);
                i++;
            }
        }
        
    }

    useEffect(()=>{
        console.log("Set data in table");
        setClassDetailsData();
    },[props.classDetailsData]);

    return (
        <Table loading={props.isLoading || false}
            columns={columns}
            dataSource={data}
            bordered
            size="middle"
            scroll={{ x: 'calc(500px + 50%)', y: 240 }}
            expandable={true}
        />
    )
}

export default StudentScoresTable;