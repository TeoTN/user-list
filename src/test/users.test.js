import { expect } from 'chai';
import * as actions from '../actions/users.actions';
import deepFreeze from 'deep-freeze';
import users, { getDefaultMetadata } from '../reducers/users.reducer';
import usersMock from '../mocks/users.mock.json';

describe('User list reducer', function() {
    const mockUser = {
        "username":"smithsson",
        "title":"Virtual dynamic concept",
        "views":3058,
        "likes":68,
        "date_created":"2016-08-11"
    };
    it('should add user', function() {
        const stateBefore = [];
        const action = actions.add(mockUser);
        const stateAfter = [{
            id: 0,
            ...mockUser
        }];

        deepFreeze(stateBefore);
        deepFreeze(action);

        expect(users(stateBefore, action).list).to.deep.equal(stateAfter);
    });
});

describe('Users settings reducer', function() {
    it('should change sorting param', function() {
        const stateBefore = {
            ...getDefaultMetadata()
        };
        const action = actions.sort('likes', 'desc');
        const stateAfter = {
            sorting: {
                column: 'likes',
                order: 'desc',
            },
            page: 1,
            page_size: 10,
            filter: '',
        };

        deepFreeze(stateBefore);
        deepFreeze(action);

        expect(users(stateBefore, action).metadata).to.deep.equal(stateAfter);
    });
    it('should actually sort users', function() {
        const stateBefore = [
            {"id":1,"username":"mwatson0","likes":143,},
            {"id":2,"username":"lhoward1","likes":82,},
        ];
        const action = actions.sort('likes', 'asc');
        const stateAfter = [
            {"id":2,"username":"lhoward1","likes":82,},
            {"id":1,"username":"mwatson0","likes":143,},
        ];

        deepFreeze(stateBefore);
        deepFreeze(action);

        expect(users(stateBefore, action).list).to.deep.equal(stateAfter);
    });
});
