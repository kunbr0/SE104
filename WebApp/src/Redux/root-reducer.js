import { combineReducers } from 'redux';
import classData from './Reducers/classData';
import themeSwitcher from './ThemeSwitcher/reducers'

export default combineReducers({
    classData,
    themeSwitcher,
});