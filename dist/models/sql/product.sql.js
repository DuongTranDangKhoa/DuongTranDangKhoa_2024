"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteProduct = exports.updateProduct = exports.createProduct = exports.getProductById = exports.getAllProduct = void 0;
function getAllProduct() {
    const text = 'SELECT id, name, description, status, category FROM public."Product" WHERE status = true';
    return { text };
}
exports.getAllProduct = getAllProduct;
function getProductById(id) {
    const text = 'SELECT id, name, description, status, category FROM public."Product" WHERE id = $1 And status = true';
    const values = [id];
    return { text, values };
}
exports.getProductById = getProductById;
function createProduct(id, name, description, status, category) {
    const text = 'INSERT INTO public."Product"( name, description, status, category) VALUES ( $1, $2, $3, $4);';
    const values = [name, description, status, category];
    return { text, values };
}
exports.createProduct = createProduct;
function updateProduct(id, name, description, status, category) {
    const text = 'UPDATE public."Product" SET name= $2, description= $3 , status= $4, category= $5 WHERE id= $1;';
    const values = [id, name, description, status, category];
    return { text, values };
}
exports.updateProduct = updateProduct;
function deleteProduct(id) {
    const text = 'DELETE FROM public."Product" WHERE id= $1;';
    const values = [id];
    return { text, values };
}
exports.deleteProduct = deleteProduct;
//# sourceMappingURL=product.sql.js.map