import getResponseFromAPI from './0-promise';

test('getResponseFromAPI returns a Promise', () => {
  const response = getResponseFromAPI();
  expect(response).toBeInstanceOf(Promise);
});
