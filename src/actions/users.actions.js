import * as types from './users.types';

export const userDelete = (id) => ({
    type: types.DELETE,
    id
});

let lastUserId = 0;
export const userNew = (data) => ({
    type: types.ADD,
    userData: {
        id: lastUserId++,
        ...data,
    },
});
