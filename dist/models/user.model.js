"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
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
exports.UserModel = void 0;
const base_model_1 = require("./base.model");
// import { User } from './schemas/user.schema';
// import * as userSQL from './sql/user.sql';
const userSQL = __importStar(require("../models/sql/user.sql"));
class UserModel extends base_model_1.BaseModel {
    getAllUsers() {
        return __awaiter(this, void 0, void 0, function* () {
            const queryConfig = userSQL.getAllUsers();
            const queryResult = yield this.query(queryConfig);
            return queryResult;
        });
    }
    getUserById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const queryConfig = userSQL.getUserById(id);
            const queryResult = yield this.query(queryConfig);
            console.log(queryResult);
            return queryResult;
        });
    }
    createUser(userid, username, password, email) {
        return __awaiter(this, void 0, void 0, function* () {
            const queryConfig = userSQL.createUser(userid, username, password, email);
            yield this.query(queryConfig);
        });
    }
    updateUserById(userid, username, password, email) {
        return __awaiter(this, void 0, void 0, function* () {
            const queryConfig = userSQL.updateUserById(userid, username, password, email);
            yield this.query(queryConfig);
        });
    }
    deleteUserById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const queryConfig = userSQL.deleteUserById(id);
            yield this.query(queryConfig);
        });
    }
}
exports.UserModel = UserModel;
//# sourceMappingURL=user.model.js.map