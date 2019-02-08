let users = new Array(20).fill(0).map((_, i) => {
  return {
    id: i,
    createdAt: Date.now() + i,
    email: `readycoder${i}@gmail.com`,
  };
});

// simulate async db call with promise
const findUser = id =>
  new Promise((resolve, reject) => {
    const user = users.find(user => user.id === id);

    if (!user) return reject(new Error(`No user with id "${id}"`));

    resolve(user);
  });

// simulate async db call with promise
const deleteUser = id =>
  new Promise((resolve, reject) => {
    const user = users.find(user => user.id === id);

    if (!user) return reject(new Error(`No user with id "${id}"`));

    users = users.filter(user => user.id !== id);

    resolve({ id });
  });

module.exports = {
  users,
  findUser,
  deleteUser,
};
