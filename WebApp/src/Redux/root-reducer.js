import { combineReducers } from 'redux';
import classData from './Reducers/classData';
import themeSwitcher from './ThemeSwitcher/reducers'
import setup from "./Setup/reducer";

export default combineReducers({
    classData,
    themeSwitcher,
    setup
});