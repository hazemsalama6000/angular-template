import { Action } from "@ngrx/store";

export enum CounterActions {
  Increment = 'increment',
  Decreament = 'decreament'
}


export class IncrementAction implements Action{
  type: string = CounterActions.Increment;
  payload: number = 0;
  constructor(payload: number) {
    this.payload = payload;
  }
}


export class DecreaseAction implements Action{
  type: string = CounterActions.Decreament;
  payload: number = 0;
  constructor(payload: number) {
    this.payload=payload;
  }
}
