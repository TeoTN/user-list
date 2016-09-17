import { delay } from '../utils/delay';
import usersMock from '../mocks/users.mock.json';

/*
 * It is assumed that pagination, filtering, ordering etc. are server-side (pros: caching)
 */

const comparator = (lookup) => (user) => {
    return user.username.startsWith(lookup); //TODO some clever matching
};

const dir = (order) => order === 'asc' ? -1 : 1;
const sort = (column, order) =>
    (a, b) => a[column] < b[column] ? dir(order) : a[column] === b[column] ? 0 : -dir(order);

export const fetchUsers = preprocessing => {
    const { column, order } = preprocessing.sorting;
    const { filter, page, page_size } = preprocessing;
    const firstElement = (page - 1) * page_size;
    return delay(3000)
        .then(
            () => usersMock
                .filter(comparator(filter))
                .sort(sort(column, order))
                .slice(firstElement, firstElement + page_size)
        );
};