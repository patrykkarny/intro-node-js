const { findUser, deleteUser, users } = require('./users');

describe('users', () => {
  test('should get user', async () => {
    const id = 3;
    const expectedUser = await findUser(id);
    const actualUser = users.find(user => user.id === id);

    expect(actualUser).toEqual(expectedUser);
  });

  test('should delete user', async () => {
    const id = 3;
    const { id: deletedId } = await deleteUser(id);
    const user = users.find(user => user.id === id);

    expect(id).toBe(deletedId);
  });
});
