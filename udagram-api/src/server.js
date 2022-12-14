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
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var dotenv = require("dotenv");
var cors_1 = require("cors");
var express_1 = require("express");
var sequelize_1 = require("./sequelize");
var index_router_1 = require("./controllers/v0/index.router");
var body_parser_1 = require("body-parser");
var model_index_1 = require("./controllers/v0/model.index");
(function () { return __awaiter(void 0, void 0, void 0, function () {
    var error_1, app, port;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                dotenv.config();
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                return [4 /*yield*/, sequelize_1.sequelize.authenticate()];
            case 2:
                _a.sent();
                console.log("Connection has been established successfully.");
                return [3 /*break*/, 4];
            case 3:
                error_1 = _a.sent();
                console.error("Unable to connect to the database:", error_1);
                return [3 /*break*/, 4];
            case 4: return [4 /*yield*/, sequelize_1.sequelize.addModels(model_index_1.V0_FEED_MODELS)];
            case 5:
                _a.sent();
                return [4 /*yield*/, sequelize_1.sequelize.addModels(model_index_1.V0_USER_MODELS)];
            case 6:
                _a.sent();
                return [4 /*yield*/, sequelize_1.sequelize.sync()];
            case 7:
                _a.sent();
                console.log("Database Connected");
                app = (0, express_1.default)();
                port = 8080;
                app.use(body_parser_1.default.json());
                // app.use(cors());
                // We set the CORS origin to * so that we don't need to
                // worry about the complexities of CORS. 
                app.use((0, cors_1.default)({
                    "allowedHeaders": [
                        'Origin', 'X-Requested-With',
                        'Content-Type', 'Accept',
                        'X-Access-Token', 'Authorization', 'Access-Control-Allow-Origin',
                        'Access-Control-Allow-Headers',
                        'Access-Control-Allow-Methods'
                    ],
                    "methods": 'GET,HEAD,OPTIONS,PUT,PATCH,POST,DELETE',
                    "preflightContinue": true,
                    "origin": '*',
                }));
                app.use("/api/v0/", index_router_1.IndexRouter);
                // Root URI call
                app.get("/", function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
                    return __generator(this, function (_a) {
                        res.send("/api/v0/");
                        return [2 /*return*/];
                    });
                }); });
                // Start the Server
                app.listen(port, function () {
                    console.log("Backend server is listening on port ".concat(port, "...."));
                    console.log("Frontent server running ".concat(process.env.URL));
                    console.log("press CTRL+C to stop server");
                });
                return [2 /*return*/];
        }
    });
}); })();
//# sourceMappingURL=server.js.map