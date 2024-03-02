"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
// src/index.js
const express_1 = __importDefault(require("express"));
const env_config_1 = require("./config/env.config");
const routes_1 = require("./routes");
const body_parser_1 = __importDefault(require("body-parser"));
const errorHandler_middleware_1 = require("./middlewares/errorHandler.middleware");
exports.app = (0, express_1.default)();
exports.app.use(body_parser_1.default.json());
const port = env_config_1.env.PORT;
exports.app.get('/healthcheck', (req, res) => {
    res.status(200).send('Interify server is working fine');
});
exports.app.post('/healthcheck', (req, res) => {
    res.status(200).send('Interify server is received post request');
});
exports.app.use('/', routes_1.router);
exports.app.listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}`);
});
exports.app.use(errorHandler_middleware_1.errorHandler);
//# sourceMappingURL=app.js.map