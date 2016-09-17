import { combineReducers } from 'redux';
import * as types from '../actions/users.types';
import { hooks } from '../api/users.api';

export const defaultmetadata = {
    sorting: {
        column: 'username',
        order: 'asc',
    },
    count: 0,
    page: 1,
    page_size: 10,
    filter: '',
    loading: true,
    model: {
        id: 'ID',
        username: 'User name',
        title: 'Title',
        views: '# views',
        likes: '# likes',
        date_created: 'Created on'
    }
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
                page: 1,
                page_size: action.size,
                loading: true,
            };
        case types.FILTER:
            return {
                ...state,
                filter: action.lookup,
                loading: true,
            };
        case types.FETCH_DONE:
            return {
                ...state,
                loading: false,
            };
        case types.GET_LIST:
            return {
                ...state,
                count: action.response.count
            };
        default:
            return state;
    }
};

const list = (state = [], action) => {
    switch (action.type) {
        case types.ADD:
            const id = Math.max.apply(null, state.map(user => user.id)) + 1;
            const userData = {
                ...action.userData,
                id: id>0?id:1,
            };
            hooks.addUser(userData);
            return [
                userData,
                ...state
            ];
        case types.DELETE:
            hooks.deleteUser(action.id);
            return state.filter(u => u.id !== action.id);
        case types.GET_LIST:
            return action.response.data;
        default:
            return state;
    }
};

const users = combineReducers({
    list,
    metadata,
});
export default users;
