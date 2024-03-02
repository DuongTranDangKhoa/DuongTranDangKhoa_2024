"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserObject = void 0;
class UserObject {
    constructor(user) {
        this.userid = user.userid;
        this.username = user.username;
        this.password = user.password;
        this.email = user.email;
        this.is_enable = user.is_enable;
        this.create_at = user.create_at;
    }
}
exports.UserObject = UserObject;
//# sourceMappingURL=user.schema.js.map