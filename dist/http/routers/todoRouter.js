"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const PATH = '/todos';
let todos = [];
const todoRouter = express_1.Router();
todoRouter.use((req, res, next) => { setTimeout(next, 1500); });
todoRouter.get(PATH, (req, res) => {
    const responseDto = {
        data: todos,
    };
    res.send(responseDto);
});
todoRouter.post(PATH, (req, res) => {
    if (!req.body.data) {
        throw new Error('ERROR: body can not be empty');
    }
    todos = req.body.data;
    res.send('Ok');
});
exports.default = todoRouter;
//# sourceMappingURL=todoRouter.js.map