import mockData from '../__mocks__/mazeMock.js';
import mocking from '../__mocks__/commentMock.js';
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

describe('Testing the count function for counting the number of comments', () => {
  test('Test if the count is working properly', () => {
    // Arrange
    const next = mocking;

    // Act
    const count2 = Utils.getCount(next);

    // Assert
    expect(next).toHaveLength(count2);
    expect(count2).toBe(7);
    expect(typeof count2).toEqual('number');
  });
});
