import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { DecreaseAction, IncrementAction, Init } from './store/counter.actions';
import { selectorForCounter } from './store/counter.selector';
import { Apollo, gql } from 'apollo-angular';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angular-template';
  counter$: Observable<number>;
  constructor(private store: Store<{ counter: number }>, private apollo: Apollo) {
    this.counter$ = store.select(selectorForCounter);
    store.dispatch(new Init());
  }

  increamentCounter() {
    this.store.dispatch(new IncrementAction(4));
  }

  decrementCounter() {
    this.store.dispatch(new DecreaseAction(2));
  }


  ngOnInit() {

    console.time();

    this.apollo
      .watchQuery({
        query: gql`
          {
  countries {
    name
    code
    emoji
  }
}
        `,
      })
      .valueChanges.subscribe((result: any) => {

        console.group('all countries');
        console.table(result.data.countries);
        console.groupEnd();
        console.timeEnd();
        console.trace();
      });
  }


}
