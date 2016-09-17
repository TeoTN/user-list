import { delay } from '../utils/delay';
import usersMock from '../mocks/users.mock.json';

/*
 * It is assumed that pagination, filtering, ordering etc. are server-side (pros: caching)
 */

const comparator = (lookup) => (user) => user.username.includes(lookup);

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
                const data = usersMock
                    .filter(comparator(filter))
                    .sort(sort(column, order));
                return {
                    data: data.slice(firstElement, firstElement + page_size),
                    count: data.length,
                }
            }
        );
};