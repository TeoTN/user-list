import * as types from '../actions/users.types';

export default function (state = [], action) {
    switch (action.type) {
        case types.ADD:
            return [
                action.userData,
                ...state
            ];
        case types.DELETE:
            return state.filter(u => u.id !== action.id);
        default:
            return state;
    }
}