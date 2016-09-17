import { delay } from '../utils/delay';
import usersMock from '../mocks/users.mock.json';
import {loadCustomUsers, saveCustomUsers} from '../persistence';

/*
 * It is assumed that pagination, filtering, ordering etc. are server-side (pros: caching)
 */
let customUsers = loadCustomUsers() || [];
const comparator = (lookup) => (user) => user?user.username.includes(lookup):false;
const dir = (order) => order === 'asc' ? -1 : 1;
const sort = (column, order) =>
    (a, b) => a[column] < b[column] ? dir(order) : a[column] === b[column] ? 0 : -dir(order);

export const fetchUsers = metadata => {
    const { column, order } = metadata.sorting;
    const { filter, page, page_size } = metadata;
    const firstElement = (page - 1) * page_size;
    return delay(3000)
        .then(
            () => {
                const data = (usersMock.concat(customUsers))
                    .filter(comparator(filter))
                    .sort(sort(column, order));
                return {
                    data: data.slice(firstElement, firstElement + page_size),
                    count: data.length,
                    status_code: 200
                }
            }
        );
};

export const createUser = user => {
    const id = Math.max.apply(null, usersMock.concat(customUsers).map(user => user.id)) + 1;
    const userData = {
        ...user,
        id: id>0?id:1,
    };
    customUsers = [userData, ...customUsers];
    saveCustomUsers(customUsers);
    return delay(1500)
        .then(() => ({
            data: userData,
            status_code: 201,
        }));
};