const users = []

const joinUser = (id, username, room) => {
    const user = {id, username, room};
    users.push(user);
    return user;
};

const getCurrentUser = (id) => {
    return users.find((user) => user.id === id);
};

const disconnectUser = (id) => {
    const index = users.findIndex((user) => user.id === id);

    if (index !== -1) {
        return users.splice(index, 1)[0];
    }
};

module.exports = {
    joinUser,
    getCurrentUser,
    disconnectUser
};
