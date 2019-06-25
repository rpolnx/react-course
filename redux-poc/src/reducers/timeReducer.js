import { TICK_CLOCK, UP_TIME, DOWN_TIME } from '../actions/actionTypes';

const initialState = {
    current: 0
};
export const timeReducer = (state = initialState, action) => {
    switch (action.type) {
        case TICK_CLOCK:
            return {
                ...state,
                current: action.newValue
            };
        case UP_TIME:
            initialState.current = state.current++;
            return {
                ...state
            };
        case DOWN_TIME:
            initialState.current = state.current--;
            return {
                ...state
            };
        default:
            return state;
    }
};