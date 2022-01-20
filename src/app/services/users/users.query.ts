import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';
import { UserState, UserStore } from './user.store';

@Injectable({ providedIn: 'root' })
// @QueryConfig({
//   sortBy: 'name',
//   sortByOrder: Order.ASC
// })
export class UsersQuery extends QueryEntity<UserState> {
  constructor(store: UserStore) {
    super(store);
  }
}
