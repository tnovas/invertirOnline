const { empty } = require('../../../src/jar');
const { jar: urlJar } = require('../../../src/utils/urls');

jest.mock('../../../src/utils/request', () => ({
  post: jest.fn(),
}));
const { post: requestPost } = require('../../../src/utils/request');

describe('Jar', () => {
  describe('Should call to request with de some url', () => {
    it('When call empty', () => {
      const url = `${urlJar}/empty`;

      empty();

      expect(requestPost).toBeCalled();
      expect(requestPost).toBeCalledWith(url);
    });
  });
});
