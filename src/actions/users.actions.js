import * as types from './users.types';

export const add = (data) => ({
    type: types.ADD,
    userData: {
        ...data,
    },
});

export const sort = (column, order) => ({
    type: types.SORT,
    column,
    order
});

export const filter = (lookup) => ({
    type: types.FILTER,
    lookup
});

export const changePage = (page) => ({
    type: types.CHANGE_PAGE,
    page
});

export const changePageSize = (size) => ({
    type: types.CHANGE_PAGE_SIZE,
    size
});

export const receiveList = (response) => ({
    type: types.GET_LIST,
    response
});

export const fetchDone = () => ({
    type: types.FETCH_DONE,
});