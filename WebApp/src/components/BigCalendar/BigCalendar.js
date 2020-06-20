import React , {useState} from 'react';
import { Calendar, Alert, Badge } from 'antd';
import moment from 'moment';
import 'antd/dist/antd.css';
import './BigCalendar.css';

const BigCalendar = ({width = 90}) => {
  
    const [value, setValue] = useState();
    const [selectedValue, setSelectedValue] = useState();
  
    const onSelect = value => {
        setValue(value);
        setSelectedValue(value);
      
    };
  
    const onPanelChange = value => 
    {
      setValue(value);
    };
  
    
  
      //const { value, selectedValue } = this.state;
      return (
        <div id="big-calendar-wrapper" style={{width : `${width}%`, margin: 25}}>
          <Alert
            message={`You selected date: ${selectedValue && selectedValue.format('YYYY-MM-DD')}`}
          />
          <Calendar style={{padding: 25}} dateCellRender={dateCellRender} monthCellRender={monthCellRender} value={value} onSelect={onSelect} onPanelChange={onPanelChange} />
        </div>
      );
  }
  
  function getListData(value) {
    let listData;
    switch (value.date()) {
      case 8:
        listData = [
          { type: 'warning', content: 'Đồ án quan trọng.' },
          { type: 'success', content: 'Đi chơi.' },
        ];
        break;
      case 10:
        listData = [
          { type: 'warning', content: 'Đồ án quan trọng.' },
          { type: 'success', content: 'Đi chơi.' },
          { type: 'error', content: 'This is error event.' },
        ];
        break;
      case 15:
        listData = [
          { type: 'warning', content: 'Đồ án quan trọng' },
          { type: 'success', content: 'This is very long usual event。。....' },
          { type: 'error', content: 'This is error event 1.' },
          { type: 'error', content: 'This is error event 2.' },
          { type: 'error', content: 'This is error event 3.' },
          { type: 'error', content: 'This is error event 4.' },
        ];
        break;
      default:
    }
    return listData || [];
  }
  
  function dateCellRender(value) {
    const listData = getListData(value);
    return (
      <ul className="events">
        {listData.map(item => (
          <li key={item.content}>
            <Badge status={item.type} text={item.content} />
          </li>
        ))}
      </ul>
    );
  }
  
  function getMonthData(value) {
    if (value.month() === 8) {
      return 2000000;
    }
  }
  
  function monthCellRender(value) {
    const num = getMonthData(value);
    return num ? (
      <div className="notes-month">
        <section>{num}</section>
        <span>Even tháng</span>
      </div>
    ) : null;
  }


  export default BigCalendar;