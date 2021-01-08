"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.nextState = exports.baseState = void 0;
const immer_1 = __importDefault(require("immer"));
exports.baseState = [
    {
        todo: "Learn typescript",
        done: true,
    },
    {
        todo: "Try immer",
        done: false,
    }
];
exports.nextState = immer_1.default(exports.baseState, draftState => {
    draftState.push({ todo: "Tweet about it", done: false });
    draftState[1].done = true;
});
//# sourceMappingURL=index.js.map