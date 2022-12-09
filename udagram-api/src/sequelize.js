"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sequelize = void 0;
var sequelize_typescript_1 = require("sequelize-typescript");
var config_1 = require("./config/config");
var username = config_1.config.username, password = config_1.config.password, rds_db_url = config_1.config.rds_db_url, posgres_port = config_1.config.posgres_port, database = config_1.config.database;
var stringUrl = "postgres://".concat(username, ":").concat(password, "@").concat(rds_db_url, ":").concat(posgres_port, "/postgres");
var options = {
    host: rds_db_url,
    user: username,
    password: password,
    port: posgres_port,
};
exports.sequelize = new sequelize_typescript_1.Sequelize(stringUrl);
//# sourceMappingURL=sequelize.js.map