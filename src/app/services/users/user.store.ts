import { Injectable } from '@angular/core';
import { ActiveState, EntityState, EntityStore, StoreConfig } from '@datorama/akita';
import { User } from './user';

export interface UserState extends EntityState<User, number>, ActiveState<number> {}

@Injectable({ providedIn: 'root' })
@StoreConfig({
  name: 'users',
  cache: {
    ttl: 60 * 1000 // 1 min
  }
})
export class UserStore extends EntityStore<UserState> {
  constructor() {
    super();
  }
}
