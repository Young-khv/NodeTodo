"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./http/app"));
const server = app_1.default();
const PORT = 3000;
server.listen(PORT, (err) => {
    if (err) {
        return console.error(err);
    }
    return console.log(`server is listening on ${PORT}`);
});
//# sourceMappingURL=server.js.map