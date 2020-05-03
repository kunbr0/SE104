import React from 'react';
import './RowInTable.css';
import TextTranslation from './../../../Components/TextTranslation/TextTranslation';
const RowInTable = ({studentID, studentName, sex, DOB, address}) => {
    return (
        <div className="row">
            <div className="cell w10pcM13px" >
            {studentID}
            </div>
            <div className="cell w30pcP8px" >
            {studentName}
            </div>
            <div className="cell w10pc" >
            {sex}
            </div>
            <div className="cell w20pc">
            {DOB}
            </div>
            <div className="cell w20pc">
            {address}
            </div>
            <div className="cell w10pc">
            <TextTranslation textName="ClassInfo-Table-Edit.1"/>
            </div>

        </div>
    )
}

export default RowInTable;