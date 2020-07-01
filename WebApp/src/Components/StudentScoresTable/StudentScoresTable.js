import React, {useEffect, useState} from 'react';
import { Table, InputNumber } from 'antd';
import TextTranslation from '../TextTranslation/TextTranslation';
import ScoreCoefficient from '../../Containers/ClassDetails/SubjectCoefficient.json';
import './StudentScoresTable.css';
import { useSSR } from 'react-i18next';




const columnsOfSubjectDetails = [
  {
    title: 
        <div>
            <TextTranslation textName="ClassInfo-Table-No.1" kClass="pcview"/>
            <TextTranslation textName="ClassInfo-Table-No.2" kClass="mbview"/>
        </div>,
    dataIndex: 'studentID',
    key: 'studentID',
    width: 8,
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


const columnsOfStudentDetails = [
    {
        title: 
            <div>
                <TextTranslation textName="ClassInfo-Table-No.1" kClass="pcview"/>
                <TextTranslation textName="ClassInfo-Table-No.2" kClass="mbview"/>
            </div>,
        dataIndex: 'studentID',
        key: 'studentID',
        width: 8,
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
            <TextTranslation textName="ClassInfo-Table-Sex.1" kClass="pcview"/>
            <TextTranslation textName="ClassInfo-Table-Sex.2" kClass="mbview"/>
        </div>,
    dataIndex: 'Sex',
    key: 'Sex',
    width: 12,
    },
    {
    title: 
        <div>
            <TextTranslation textName="ClassInfo-Table-DOB.1" kClass="pcview"/>
            <TextTranslation textName="ClassInfo-Table-DOB.2" kClass="mbview"/>
        </div>,
    dataIndex: 'DOB',
    key: 'DOB',
    width: 12,
    },
    {
    title: 
        <div>
            <TextTranslation textName="ClassInfo-Table-Address.1" kClass="pcview"/>
            <TextTranslation textName="ClassInfo-Table-Address.2" kClass="mbview"/>
        </div>,
    dataIndex: 'Address',
    key: 'Address',
    width: 12,
    }    
      
];

const listOfColumnType = {
    subjectscores : columnsOfSubjectDetails,
    studentdetails : columnsOfStudentDetails
}

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


// Map of changed row to push


const StudentScoresTable = (props) => {
    

    const [classDetailsData, setClassDetailsData] = useState([{}]);
    const [tableData, setTableData] = useState([]);
    const [tableEditable, setTableEditable] = useState(false);
    
    const [listOfChangedRows, setListOfChangedRows] = useState({});

    useEffect(()=>{
        if(props.tableEditable !== tableEditable){
            if(props.tableEditable === false){
                setListOfChangedRows({});
            }
            setTableEditable(props.tableEditable);
        }
    });


    const updateListChangedRow = (kRow, key, value) => {
        setListOfChangedRows(listOfChangedRows =>({
            ...listOfChangedRows,
            [kRow.studentID] : (listOfChangedRows[kRow.studentID] !== undefined) ?
            {
                ...listOfChangedRows[kRow.studentID],
                [key] : value
            }:{
                ...kRow,
                [key] : value
            }
        }));
    } 


    const renderClassDetailsData = () => {
        setTableData([]);
        let data = []; // clear data
        let i=0;

        console.log(classDetailsData);

        if(classDetailsData){
            for(let e of classDetailsData){
                
                //e["key"] = i;
                e["final"] = calculateFinalScore(e);
                /*e["final"] = (
                <Input
                    disabled={true}
                    value={calculateFinalScore(e)}
                    placeholder="Input a number"
                    maxLength={25}
                />);*/

                let a = {};
                Object.keys(e).forEach((key)=>{ 
                    
                    a[key] = (key === 'k15mins' || key === 'k45mins' || key === 'kmidterm' || key === 'kendterm' || key === 'final' ) ? 
                    <InputNumber
                            style={{width: "100%"}}
                            min={1} max={10}
                            disabled={(key==="final")?true:!tableEditable}
                            defaultValue={e[key] || 0}
                            onChange={(value)=> updateListChangedRow(e, key, value)}
                            step={0.5}
                        /> : e[key]
                    a["key"] = i;
                });
                data.push(a);
                i++;
            }
        }
        setTableData(data);
        
    }

    

    
    useEffect(()=>{

        if(props.classDetailsData !== classDetailsData) setClassDetailsData(props.classDetailsData || []);
       
    },[props.classDetailsData]);

    useEffect(()=>{
        renderClassDetailsData();
    },[classDetailsData, tableEditable]);

    

    console.log(listOfChangedRows);
    
    return (
        <Table 
            loading={props.isLoading || false}
            columns={listOfColumnType[props.columnType]}
            dataSource={tableData}
            bordered
            size="middle"
            scroll={{ x: 'calc(500px + 50%)', y: 240 }}
            expandable={true}
            onRow={(record, rowIndex) => {
                return {
                    className : (listOfChangedRows[record.studentID]) ? 'editedRow' : ''
                };
            }}
        />
    )
}

export default StudentScoresTable;