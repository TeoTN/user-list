import chai, { expect } from 'chai';
import chaiAsPromised from 'chai-as-promised';
import { fetchUsers } from '../api/users.api';
import { getDefaultMetadata } from '../reducers/users.reducer';
chai.use(chaiAsPromised);

describe('Users API', function() {
    it('should fetch users', function() {
        const fetch = fetchUsers(getDefaultMetadata);
        expect(fetch).to.be.a('promise');
        expect(fetch).to.eventually.have.lengthOf(10);
    });
});