"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUserById = exports.updateUserById = exports.createUser = exports.getUserById = exports.getAllUsers = void 0;
function getAllUsers() {
    const text = 'SELECT * FROM user_list';
    return { text };
}
exports.getAllUsers = getAllUsers;
function getUserById(id) {
    const text = 'SELECT * FROM user_list WHERE userid = $1';
    const values = [id];
    return { text, values };
}
exports.getUserById = getUserById;
function createUser(userid, username, password, email) {
    const text = `INSERT INTO user_list(userid, username, password, email)
                VALUES ($1, $2, $3, $4)`;
    const values = [userid, username, password, email];
    return { text, values };
}
exports.createUser = createUser;
function updateUserById(userid, username, password, email) {
    const text = `UPDATE user_list
                SET username = $1, password = $2, email = $3
                WHERE userid = $4`;
    const values = [username, password, email, userid];
    return { text, values };
}
exports.updateUserById = updateUserById;
function deleteUserById(id) {
    const text = `DELETE FROM user_list
                WHERE userid = $1`;
    const values = [id];
    return { text, values };
}
exports.deleteUserById = deleteUserById;
//# sourceMappingURL=user.sql.js.map