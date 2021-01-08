import produce from "immer"

interface State {
    readonly todo: string,
    readonly done: boolean, 
}

export const baseState: State[] = [
    {
      todo: "Learn typescript",
      done: true,
  },
  {
      todo: "Try immer",
      done: false,
  }
]

export const nextState = produce(baseState, draftState => {
  draftState.push({todo: "Tweet about it", done: false});
  draftState[1].done = true;
}); 