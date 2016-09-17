import * as types from './users.types';

export const remove = (id) => ({
    type: types.DELETE,
    id
});

let lastUserId = 0;
export const add = (data) => ({
    type: types.ADD,
    userData: {
        id: lastUserId++,
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
