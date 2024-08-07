const { uploadPhoto, createUser } = require('./utils');

test('uploadPhoto returns correct response', () => {
  expect(uploadPhoto()).toEqual({
    status: 200,
    body: 'photo-profile-1',
  });
});

test('createUser returns correct user', () => {
  expect(createUser()).toEqual({
    firstName: 'Guillaume',
    lastName: 'Salva',
  });
});

