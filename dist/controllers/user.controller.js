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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUserById = exports.updateUserById = exports.createUser = exports.getUserById = exports.getAllUsers = void 0;
const user_service_1 = __importDefault(require("../services/user.service"));
function getAllUsers(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        const userList = yield user_service_1.default.getAllUsers();
        res.send(userList);
    });
}
exports.getAllUsers = getAllUsers;
function getUserById(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        const { id } = req.params;
        const user = yield user_service_1.default.getUserById(id);
        res.send(user);
    });
}
exports.getUserById = getUserById;
function createUser(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        const { userid, username, password, email } = req.body;
        yield user_service_1.default.createUser(userid, username, password, email);
        res.send('User created!');
    });
}
exports.createUser = createUser;
function updateUserById(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        const { userid, username, password, email } = req.body;
        yield user_service_1.default.updateUserById(userid, username, password, email);
        res.send('User updated!');
    });
}
exports.updateUserById = updateUserById;
function deleteUserById(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        const { id } = req.params;
        yield user_service_1.default.deleteUserById(id);
        res.send('User deleted!');
    });
}
exports.deleteUserById = deleteUserById;
//# sourceMappingURL=user.controller.js.map