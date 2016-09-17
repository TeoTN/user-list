import { combineReducers } from 'redux';
import * as types from '../actions/users.types';

export const defaultPreprocessing = {
    sorting: {
        column: 'username',
        order: 'asc',
    },
    page: 1,
    page_size: 10,
    filter: '',
};

const preprocessing = (state = defaultPreprocessing, action) => {
    switch (action.type) {
        case types.SORT:
            return {
                ...state,
                sorting: {
                    column: action.column,
                    order: action.order
                }
            };
        default:
            return state;
    }
};

const list = (state = [], action) => {
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
};

const users = combineReducers({
    list,
    preprocessing,
});
export default users;
