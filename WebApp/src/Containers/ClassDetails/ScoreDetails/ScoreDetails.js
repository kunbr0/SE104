import React, {useEffect, useState} from 'react';
import { Table, InputNumber } from 'antd';
import TextTranslation from '../../../Components/TextTranslation/TextTranslation';
import ScoreCoefficient from '../SubjectCoefficient.json';
import './ScoreDetails.css';
import { useSSR } from 'react-i18next';




const columnsOfSubjectDetails = [
  {
    title: 
        <div>
            <TextTranslation textName="ClassInfo-Table-No.1" kClass="pcview"/>
            <TextTranslation textName="ClassInfo-Table-No.2" kClass="mbview"/>
        </div>,
    dataIndex: 'key',
    key: 'key',
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
        dataIndex: 'Name',
        key: 'Name',
        width: 35,
        sorter: (a, b) => a.studentID - b.studentID,
    },
    {
    title: 
        <div>
            <TextTranslation textName="ClassInfo-Table-15mins.1" kClass="pcview"/>
            <TextTranslation textName="ClassInfo-Table-15mins.2" kClass="mbview"/>
        </div>,
    dataIndex: 'exam_1',
    key: 'exam_1',
    width: 12,
    },
    {
    title: 
        <div>
            <TextTranslation textName="ClassInfo-Table-45mins.1" kClass="pcview"/>
            <TextTranslation textName="ClassInfo-Table-45mins.2" kClass="mbview"/>
        </div>,
    dataIndex: 'exam_2',
    key: 'exam_2',
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
    return e.exam_1*1*coef.exam_1 + e.exam_2*1*coef.exam_2;
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
        let i=1;
        

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
                    
                    a[key] = (key === 'exam_1' || key === 'exam_2' || key === 'final' ) ? 
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
        console.log(data);
    }

    

    
    useEffect(()=>{

        if(props.classDetailsData !== classDetailsData) setClassDetailsData(props.classDetailsData || []);
       
    },[props.classDetailsData]);

    useEffect(()=>{
        renderClassDetailsData();
    },[classDetailsData, tableEditable, props.classDetailsData]);

    

    console.log(listOfChangedRows);
    
    return (
        <Table 
            loading={props.isLoading || false}
            columns={columnsOfSubjectDetails}
            dataSource={tableData}
            bordered
            size="middle"
            scroll={{ x: 'calc(300px + 50%)', y: 240 }}
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