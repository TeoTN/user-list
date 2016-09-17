import * as types from '../actions/auth.types';

const auth = (state = {}, action) => {
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