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
const product_model_1 = require("../models/product.model");
const db_1 = require("../db");
function getAllProduct() {
    return __awaiter(this, void 0, void 0, function* () {
        const productModel = new product_model_1.ProductModel(db_1.pool);
        const productList = yield productModel.getAllProduct();
        return productList;
    });
}
function getProductById(id) {
    return __awaiter(this, void 0, void 0, function* () {
        const productModel = new product_model_1.ProductModel(db_1.pool);
        const productList = yield productModel.getProductById(id);
        return productList;
    });
}
function createProduct(id, name, description, status, category, client) {
    return __awaiter(this, void 0, void 0, function* () {
        const productModel = new product_model_1.ProductModel(client);
        yield productModel.createProducts(id, name, description, status, category);
    });
}
function updateProduct(id, name, description, status, category, client) {
    return __awaiter(this, void 0, void 0, function* () {
        const productModel = new product_model_1.ProductModel(client);
        yield productModel.updateProducts(id, name, description, status, category);
    });
}
function deleteProduct(id, client) {
    return __awaiter(this, void 0, void 0, function* () {
        const productModel = new product_model_1.ProductModel(db_1.pool);
        yield productModel.deleteProducts(id);
    });
}
const ProductService = { getAllProduct, getProductById, createProduct, updateProduct, deleteProduct };
exports.default = ProductService;
//# sourceMappingURL=product.service.js.map