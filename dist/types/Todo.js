"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Todo {
    isTodo() {
        return typeof this.id === 'string'
            && typeof this.text === 'string'
            && typeof this.value === 'boolean';
    }
}
exports.default = Todo;
//# sourceMappingURL=Todo.js.map