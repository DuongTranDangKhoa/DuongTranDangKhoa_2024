"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pool = void 0;
const pg_1 = require("pg");
const env_config_1 = require("../config/env.config");
exports.pool = new pg_1.Pool({
    connectionString: (env_config_1.env.DB_CONNECTION_STRING + env_config_1.env.DATABASE_NAME)
});
//# sourceMappingURL=index.js.map