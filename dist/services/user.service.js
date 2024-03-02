"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const user_model_1 = require("../models/user.model");
const db_1 = require("../db");
const user_schema_1 = require("../models/schemas/user.schema");
function getAllUsers() {
    return __awaiter(this, void 0, void 0, function* () {
        const userModel = new user_model_1.UserModel(db_1.pool);
        const userListRaw = yield userModel.getAllUsers();
        const userList = userListRaw.map((item) => {
            return new user_schema_1.UserObject(item);
        });
        return userList;
    });
}
function getUserById(id) {
    return __awaiter(this, void 0, void 0, function* () {
        const userModel = new user_model_1.UserModel(db_1.pool);
        const userList = yield userModel.getUserById(id);
        return userList;
    });
}
function createUser(userid, username, password, email) {
    return __awaiter(this, void 0, void 0, function* () {
        const userModel = new user_model_1.UserModel(db_1.pool);
        yield userModel.createUser(userid, username, password, email);
    });
}
function updateUserById(userid, username, password, email) {
    return __awaiter(this, void 0, void 0, function* () {
        const userModel = new user_model_1.UserModel(db_1.pool);
        yield userModel.updateUserById(userid, username, password, email);
    });
}
function deleteUserById(id) {
    return __awaiter(this, void 0, void 0, function* () {
        const userModel = new user_model_1.UserModel(db_1.pool);
        yield userModel.deleteUserById(id);
    });
}
const UserService = { getAllUsers, getUserById, createUser, updateUserById, deleteUserById };
exports.default = UserService;
//# sourceMappingURL=user.service.js.map