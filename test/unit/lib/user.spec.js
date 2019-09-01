const user = require('../../../src/user');
const { user: url } = require('../../../src/utils/urls');

jest.mock('../../../src/utils/request', () => ({
  get: jest.fn(),
}));
const { get: requestGet } = require('../../../src/utils/request');

describe('User', () => {
  describe('Should call to request with de some url', () => {
    it('When call user', () => {
      user();

      expect(requestGet).toBeCalled();
      expect(requestGet).toBeCalledWith(url);
    });
  });
});
