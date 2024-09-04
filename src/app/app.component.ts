import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { DecreaseAction, IncrementAction } from './store/counter.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angular-template';
  counter$:Observable<number>;
  constructor(private store:Store<{counter:number}>){
   this.counter$ = store.select('counter');
  }

  increamentCounter(){
    this.store.dispatch(new IncrementAction(4));
  }

  decrementCounter(){
this.store.dispatch(new DecreaseAction(2));
  }
}
