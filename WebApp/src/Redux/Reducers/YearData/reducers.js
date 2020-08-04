import {UPDATE_YEAR} from './constants';

const initialState = {
    yearid : 1
}

export default (state = initialState, action) => {
    switch(action.type){
        case UPDATE_YEAR : return {
            ...state,
            year : action.year
        }

        default : return state
    }
}