import React, {useEffect, useState} from 'react';
import { Table, Input } from 'antd';
import TextTranslation from '../TextTranslation/TextTranslation';
import ScoreCoefficient from '../../Containers/ClassDetails/SubjectCoefficient.json';
import './StudentScoresTable.css';
import { useSSR } from 'react-i18next';
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
    
];


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
    
    const [tableData, setTableData] = useState([]);
    const [tableEditable, setTableEditable] = useState(false);
    useEffect(()=>{
        setTableEditable(props.tableEditable);
    });

    const setClassDetailsData = () => {
        let data = []; // clear data
        let i=0;
        if(props.classDetailsData){
            for(let e of props.classDetailsData){
                e["key"] = i;
                e["final"] = calculateFinalScore(e);
                /*e["final"] = (
                <Input
                    disabled={true}
                    value={calculateFinalScore(e)}
                    placeholder="Input a number"
                    maxLength={25}
                />);*/
                console.log(props.tableEditable);
                Object.keys(e).forEach((key)=>{ e[key] =  
                    <Input
                        disabled={!tableEditable}
                        value={e[key]}
                        placeholder="Input a number"
                        maxLength={25}
                    />});
                data.push(e);
                i++;
            }
            setTableData(data);
        }
        
    }

    useEffect(()=>{
        console.log("Set data in table");
        setClassDetailsData();
    },[props.classDetailsData]);

    return (
        <Table loading={props.isLoading || false}
            columns={columns}
            dataSource={tableData}
            bordered
            size="middle"
            scroll={{ x: 'calc(500px + 50%)', y: 240 }}
            expandable={true}
        />
    )
}

export default StudentScoresTable;