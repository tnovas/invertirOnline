const { roll } = require('../../../src/credits');
const { credits: urlCredits } = require('../../../src/utils/urls');

jest.mock('../../../src/utils/request', () => ({
  post: jest.fn(),
}));
const { post: requestPost } = require('../../../src/utils/request');

describe('Credits', () => {
  describe('Should call to request with de some url', () => {
    it('When call roll', () => {
      const url = `${urlCredits}/roll`;

      roll();

      expect(requestPost).toBeCalled();
      expect(requestPost).toBeCalledWith(url);
    });
  });
});
