import { combineReducers } from 'redux';
import { loadMetadata } from '../persistence'
import * as types from '../actions/users.types';

export const getDefaultMetadata = () => {
    const stored = loadMetadata();
    return (stored) ?
    {...stored, loading: true} :
    {
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

};

const metadata = (state = getDefaultMetadata(), action) => {
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
                page: 1
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
        case types.ADD:
            return {
                ...state,
                loading: true
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
