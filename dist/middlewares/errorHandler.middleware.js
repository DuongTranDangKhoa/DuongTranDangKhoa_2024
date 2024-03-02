"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorHandler = void 0;
function errorHandler(err, req, res, next) {
    console.log(err);
    res.send({
        err: err.name,
        message: err.message
    });
    return;
}
exports.errorHandler = errorHandler;
//# sourceMappingURL=errorHandler.middleware.js.map