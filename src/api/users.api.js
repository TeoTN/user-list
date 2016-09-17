import { delay } from '../utils/delay';
import usersMock from '../mocks/users.mock.json';

export const fetchUsers = (() => delay(1500).then(() => usersMock));
