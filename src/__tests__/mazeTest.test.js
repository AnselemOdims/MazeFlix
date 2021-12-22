import mockData from '../__mocks__/mazeMock.js';
import Utils from '../utils.js';

describe('Check count number', () => {
  test('if the function actually does the count', () => {
    // Arrange
    const data = mockData;

    // Act
    const count = Utils.getCount(data);

    // Assert
    expect(count).toEqual(10);
    expect(count === data.length).toBe(true);
    expect(typeof count).toEqual('number');
    expect(count - data.length).toEqual(0);
    expect(typeof data).toEqual('object');
  });
});