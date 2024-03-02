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
exports.deleteProduct = exports.updatedProduct = exports.createProduct = exports.getProductbyId = exports.getAllProduct = void 0;
const product_service_1 = __importDefault(require("../services/product.service"));
const pg_1 = require("pg");
const db_1 = require("../db");
function getAllProduct(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const productList = yield product_service_1.default.getAllProduct();
            res.send(productList);
        }
        catch (err) {
            if (err instanceof pg_1.DatabaseError) {
                console.log('Database error');
            }
            next(err);
        }
    });
}
exports.getAllProduct = getAllProduct;
function getProductbyId(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { id } = req.params;
            if (id === '0') {
                res.send({ message: 'id invalid' });
                return;
            }
            const product = yield product_service_1.default.getProductById(id);
            res.send(product.length === 0 ? 'Product not found!' : product);
        }
        catch (err) {
            if (err instanceof pg_1.DatabaseError) {
                console.log('Database error');
            }
            next(err);
        }
    });
}
exports.getProductbyId = getProductbyId;
function createProduct(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        const client = yield db_1.pool.connect();
        try {
            yield client.query('BEGIN');
            const productList = req.body;
            yield Promise.all(productList.map((product) => __awaiter(this, void 0, void 0, function* () {
                yield product_service_1.default.createProduct(product.id, product.name, product.description, product.status, product.category, client);
            })));
            yield client.query('COMMIT');
            res.send('Create Products');
        }
        catch (err) {
            if (err instanceof pg_1.DatabaseError) {
                console.log('Database error');
            }
            client.query('ROLLBACK');
            next(err);
        }
        finally {
            yield client.release();
        }
    });
}
exports.createProduct = createProduct;
function updatedProduct(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        const client = yield db_1.pool.connect();
        try {
            yield client.query('BEGIN');
            const productList = req.body;
            yield Promise.all(productList.map((product) => __awaiter(this, void 0, void 0, function* () {
                yield product_service_1.default.updateProduct(product.id, product.name, product.description, product.status, product.category, client);
            })));
            yield client.query('COMMIT');
            res.send('Update Products');
        }
        catch (err) {
            if (err instanceof pg_1.DatabaseError) {
                console.log('Database error');
            }
            client.query('ROLLBACK');
            next(err);
        }
        finally {
            yield client.release();
        }
    });
}
exports.updatedProduct = updatedProduct;
function deleteProduct(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        const client = yield db_1.pool.connect();
        try {
            yield client.query('BEGIN');
            const productList = req.body;
            yield Promise.all(productList.map((product) => __awaiter(this, void 0, void 0, function* () {
                yield product_service_1.default.deleteProduct(product.id, client);
            })));
            yield client.query('COMMIT');
            res.send('Delete Products');
        }
        catch (err) {
            if (err instanceof pg_1.DatabaseError) {
                console.log('Database error');
            }
            client.query('ROLLBACK');
            next(err);
        }
        finally {
            yield client.release();
        }
    });
}
exports.deleteProduct = deleteProduct;
//# sourceMappingURL=product.controller.js.map