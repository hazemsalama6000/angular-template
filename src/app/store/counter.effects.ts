import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Store } from "@ngrx/store";
import { of, switchMap, tap, withLatestFrom } from "rxjs";
import { selectorForCounter } from "./counter.selector";
import { CounterActions, Init, setInitial } from "./counter.actions";

@Injectable()

export class CounterEffects {


  loadCount = createEffect(
    () =>
      this.action$.pipe(
        ofType(CounterActions.Init),
        switchMap(() => {
          let countvalue: number = +(localStorage.getItem('item')!);
          console.log(countvalue)
          return of(new setInitial(countvalue));
        })
      ),
    { dispatch: true }

  );

  saveEffect = createEffect(
    () =>
      this.action$.pipe(
        ofType(CounterActions.Increment, CounterActions.Decreament),
        withLatestFrom(this.store.select(selectorForCounter)),
        tap(([action, counter]) => {
          console.log(counter)
          localStorage.setItem('item', (+counter).toString());
        })
      )
    ,
    { dispatch: false }
  )


  constructor(private action$: Actions, private store: Store<{ counter: number }>) {

  }


}
