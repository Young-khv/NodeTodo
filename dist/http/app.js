"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const todoRouter_1 = __importDefault(require("./routers/todoRouter"));
exports.default = () => {
    const app = express_1.default();
    app.use(body_parser_1.default.json());
    // app.use(bodyParser.urlencoded({ extended: true }));
    app.use(todoRouter_1.default);
    return app;
};
//# sourceMappingURL=app.js.map