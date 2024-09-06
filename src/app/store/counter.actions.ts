import { Action } from "@ngrx/store";

export enum CounterActions {
  Increment = 'increment',
  Decreament = 'decreament',
  Init = 'initial',
  Set = 'setinitial'

}

export class Init implements Action {
  type: string = CounterActions.Init;
}


export class setInitial implements Action {
  type: string = CounterActions.Set;
  payload: number = 0;
  constructor(payload: number) {
    this.payload = payload;
  }
}


export class IncrementAction implements Action {
  type: string = CounterActions.Increment;
  payload: number = 0;
  constructor(payload: number) {
    this.payload = payload;
  }
}


export class DecreaseAction implements Action {
  type: string = CounterActions.Decreament;
  payload: number = 0;
  constructor(payload: number) {
    this.payload = payload;
  }
}
