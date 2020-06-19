import React from 'react';

import { Select } from 'antd';

const { Option } = Select;



const SelectWithTyping = (props) => {

    function onChange(value) {
        console.log(`selected ${value}`);
    }
    
    function onBlur() {
        console.log('blur');
    }
    
    function onFocus() {
        console.log('focus');
    }
    
    function onSearch(val) {
        console.log('search:', val);
    }

    const renderOptions = () => {
        const classes = props.options;
        if(classes.length){
            return classes.map((e)=>{
                return <Option key={e[props.optionKey]} value={e[props.optionName]}>{e[props.optionName]}</Option>
            });
        }
        return null;
    }

    let optionElms = renderOptions();

    

    return(
        <Select
            showSearch
            style={{ width: 200 }}
            placeholder={props.placeholder}
            optionFilterProp="children"
            onChange={onChange}
            onFocus={onFocus}
            onBlur={onBlur}
            onSearch={onSearch}
            filterOption={(input, option) =>
            option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
            }
        >
            {optionElms}
        </Select>
    )
}

export default SelectWithTyping;