import { describe, it } from 'mocha';
import { expect } from 'chai';

import * as userApi from './api';

describe('users', () => {
  describe('users: [User!]!', () => {
    it('returns user list when users can be found', async () => {
      const result = await userApi.users();
      expect(result.data).to.be.not.null;
    });
  });

  describe('user(id: String1): User', () => {
    it('returns a user when user can be found', async () => {
      const expectedResult = {
        data: {
          user: {
            id: '1',
            username: 'user1',
            email: 'user1@myemail.com',
          },
        },
      };
      const result = await userApi.user({ id: '1' });
      expect(result.data).to.be.eql(expectedResult);
    });

    it('returns null when user cannot be found', async () => {
      const expectedResult = {
        data: {
          user: null,
        },
      };

      const result = await userApi.user({ id: '-1' });
      expect(result.data).to.be.eql(expectedResult);
    });
  });
});
