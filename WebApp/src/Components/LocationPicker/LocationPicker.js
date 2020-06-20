import React, {useState} from 'react';
import { Input } from 'antd';
import SelectWithTyping from '../SelectWithTyping/SelectWithTyping';
import LocationVN from './LocationVN.json';


const LocationPicker = () => {

    const [areaInSelectedCity, setAreaInSelectedCity] = useState([]);

    const mapAreasToArray = (areas) => {
        let result = [];
        console.log(areas);
        for (let area of Object.values(areas)) {
            result.push({name : area})
        }
        return result;
    }

    const onSelectCity = (selectedCity) => {
        for (let city of Object.values(LocationVN)) {
            if(city.name === selectedCity) {
                setAreaInSelectedCity(mapAreasToArray(city.cities));
                return true;
            }
            
        }
    }

    let cityOptions = [];
    for (let city of Object.values(LocationVN)) {
        cityOptions.push(city);
    }

    

    return(
        <div>
        <Input placeholder="Details address" style={{width : "40%"}}/>
        
        <SelectWithTyping 
            options={areaInSelectedCity} 
            optionName="name" 
            optionKey="name" 
            placeholder="District"
            callbackSelection={()=>{}}
            width="30%"
            disabled={(areaInSelectedCity.length===0)}
        />
        <SelectWithTyping 
            options={cityOptions} 
            optionName="name" 
            optionKey="name" 
            placeholder="City"
            callbackSelection={onSelectCity}
            width="30%"
            
        />

        </div>

    );
}

export default LocationPicker;