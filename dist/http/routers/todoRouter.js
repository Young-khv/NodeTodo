"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
let todos = [];
const todoRouter = express_1.default.Router();
todoRouter.use((req, res, next) => { setTimeout(next, 1500); });
todoRouter.get('/todos', (req, res) => {
    const responseDto = {
        data: todos
    };
    res.send(responseDto);
});
todoRouter.post('/todos', (req, res) => {
    if (!req.body.data) {
        throw new Error('ERROR: bady can not be empty');
    }
    todos = req.body.data;
    res.send(req.body.data);
});
exports.default = todoRouter;
//# sourceMappingURL=todoRouter.js.map