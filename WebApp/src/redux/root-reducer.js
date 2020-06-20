import { combineReducers } from 'redux';
import classData from './Reducers/classData';
import themeSwitcher from './ThemeSwitcher/reducers'
import classDetailsPickedData from './Reducers/classDetailsPickedData';

export default combineReducers({
    classData,
    themeSwitcher
});