const get = require('../../../src/socket');
const { socketToken: url } = require('../../../src/utils/urls');

jest.mock('../../../src/credentials', () => ({
  setSocketToken: jest.fn(),
}));

const resultMock = {
  data: {
    socket_token: 'socket_token',
  },
};

jest.mock('../../../src/utils/request', () => ({
  get: jest.fn().mockResolvedValue({
    data: {
      socket_token: 'socket_token',
    },
  }),
}));

const { setSocketToken } = require('../../../src/credentials');
const { get: requestGet } = require('../../../src/utils/request');

describe('Socket', () => {
  it('Should get socket token and save it', (done) => {
    get().then((result) => {
      expect(result).toEqual(resultMock);
      expect(setSocketToken).toBeCalled();
      expect(setSocketToken).toBeCalledWith(resultMock.data.socket_token);
      expect(requestGet).toBeCalled();
      expect(requestGet).toBeCalledWith(url);
      done();
    });
  });
});
