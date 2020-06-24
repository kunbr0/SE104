import actions from "./action";

const initState = {
    current: 0
}

export default function setupReducer(state = initState, action) {
    switch (action.type) {
        case actions.SETUP_NEXT_STEP:
            return {current: state.current+1};
        default:
            return state;
    }
}