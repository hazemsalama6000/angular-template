import { Action } from "@ngrx/store";
import { CounterActions } from "./counter.actions";

export interface IAction {
  type: string,
  payload:number
}

const initailState: number = 2;

export function counterReducer(state: number = initailState, action:Action | IAction) {
  switch (action.type) {
    case CounterActions.Increment:
      state+=(action as IAction).payload;
      break;

    case CounterActions.Decreament:
      state+=(action as IAction) .payload;
      break;
  }
  return state;
}
