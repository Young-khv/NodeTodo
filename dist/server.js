"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const chalk_1 = __importDefault(require("chalk"));
const app_1 = __importDefault(require("./http/app"));
const server = app_1.default();
const PORT = 3001;
server.listen(PORT, (err) => {
    if (err) {
        return console.error(chalk_1.default.stderr(err));
    }
    return console.log(`server is listening on ${chalk_1.default.green(PORT)}`);
});
//# sourceMappingURL=server.js.map