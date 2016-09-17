import { combineReducers } from 'redux';
import * as types from '../actions/users.types';
import userMock from '../mocks/users.mock.json';

export const defaultmetadata = {
    sorting: {
        column: 'username',
        order: 'asc',
    },
    page: 1,
    page_size: 10,
    pages: Math.ceil(userMock.length / 10),
    filter: '',
    loading: true,
};

const metadata = (state = defaultmetadata, action) => {
    switch (action.type) {
        case types.SORT:
            return {
                ...state,
                sorting: {
                    column: action.column,
                    order: action.order
                },
                loading: true,
            };
        case types.CHANGE_PAGE:
            return {
                ...state,
                page: action.page,
                loading: true,
            };
        case types.CHANGE_PAGE_SIZE:
            return {
                ...state,
                page_size: action.size,
                pages: Math.ceil(userMock.length / action.size),
                loading: true,
            };
        case types.FETCH_DONE:
            return {
                ...state,
                loading: false,
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
        case types.GET_LIST:
            return action.response;
        default:
            return state;
    }
};

const users = combineReducers({
    list,
    metadata,
});
export default users;
