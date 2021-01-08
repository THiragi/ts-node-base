"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("./index");
test('baseState is immutable', () => {
    expect(index_1.baseState.length).toBe(2);
    expect(index_1.nextState.length).toBe(3);
    expect(index_1.baseState[1].done).toBeFalsy;
    expect(index_1.baseState[1].done).toBeTruthy;
    expect(index_1.nextState[0]).toBe(index_1.baseState[0]);
    expect(index_1.nextState[1]).not.toBe(index_1.baseState[1]);
});
//# sourceMappingURL=index.test.js.map