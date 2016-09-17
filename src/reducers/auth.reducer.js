import * as types from '../actions/auth.types';
import {loadAuth} from '../persistence';

const auth = (state = loadAuth() || {loggedIn: false}, action) => {
    switch (action.type) {
        case types.SIGN_IN:
            return {
                loggedIn: true,
                username: 'abaker5h',
            };
        case types.SIGN_OUT:
            return {
                loggedIn: false
            };
        default:
            return state;
    }
};
export default auth;