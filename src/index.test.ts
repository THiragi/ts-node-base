import { baseState, nextState } from './index';

test('baseState is immutable', () => {
  expect(baseState.length).toBe(2);
  expect(nextState.length).toBe(3);
  
  expect(baseState[1].done).toBeFalsy;
  expect(baseState[1].done).toBeTruthy;
  
  expect(nextState[0]).toBe(baseState[0]);
  expect(nextState[1]).not.toBe(baseState[1]);
});

