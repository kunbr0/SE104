import { combineReducers } from 'redux';
import classData from './Reducers/ClassData/reducers';
import themeSwitcher from './ThemeSwitcher/reducers'

export default combineReducers({
    classData,
    themeSwitcher,
});