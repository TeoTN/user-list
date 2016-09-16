import { expect } from 'chai';
import * as actions from '../actions/users.actions';
import deepFreeze from 'deep-freeze';
import users from '../reducers/users.reducer';
import usersMock from '../mocks/users.mock.json';

describe('Users reducer', function() {
    const mockUser = {
        "username":"smithsson",
        "title":"Virtual dynamic concept",
        "views":3058,
        "likes":68,
        "date_created":"2016-08-11"
    };
    it('should add user', function() {
        const stateBefore = [];
        const action = actions.userNew(mockUser);
        const stateAfter = [{
            id: 0,
            ...mockUser
        }];

        deepFreeze(stateBefore);
        deepFreeze(action);

        expect(users(stateBefore, action)).to.deep.equal(stateAfter);
    });

    it('should delete user', function() {
        const stateBefore = [{
            id: 0,
            ...mockUser
        }];
        const action = actions.userDelete(0);
        const stateAfter = [];

        deepFreeze(stateBefore);
        deepFreeze(action);

        expect(users(stateBefore, action)).to.deep.equal(stateAfter);
    });
});