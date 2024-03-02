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
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const userController = __importStar(require("../controllers/user.controller"));
const productController = __importStar(require("../controllers/product.controller"));
exports.router = (0, express_1.Router)();
exports.router.get('/user', userController.getAllUsers);
exports.router.get('/user/:id', userController.getUserById);
exports.router.post('/user', userController.createUser);
exports.router.put('/user', userController.updateUserById);
exports.router.delete('/user/:id', userController.deleteUserById);
exports.router.get('/product', productController.getAllProduct);
exports.router.get('/product/:id', productController.getProductbyId);
exports.router.post('/product', productController.createProduct);
exports.router.put('/product', productController.updatedProduct);
exports.router.delete('/product', productController.deleteProduct);
/**  controller -> service -> model -> db
                               ^
                              sql

                              schema

  orm -> mapping object from db / create query statement
*/
//# sourceMappingURL=index.js.map