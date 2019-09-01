const { spin } = require('../../../src/wheel');
const { wheel: urlWheel } = require('../../../src/utils/urls');

jest.mock('../../../src/utils/request', () => ({
  post: jest.fn(),
}));
const { post: requestPost } = require('../../../src/utils/request');

describe('Wheel', () => {
  describe('Should call to request with de some url', () => {
    it('When call spin', () => {
      const url = `${urlWheel}/spin`;

      spin();

      expect(requestPost).toBeCalled();
      expect(requestPost).toBeCalledWith(url);
    });
  });
});
