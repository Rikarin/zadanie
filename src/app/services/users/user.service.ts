import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { setLoading } from '@datorama/akita';
import { environment } from '../../../environments/environment';
import { plainToInstance } from 'class-transformer';
import { EMPTY } from 'rxjs';
import { map, switchMap, tap } from 'rxjs/operators';
import { UserStore } from './user.store';
import { User } from './user';
import { UsersQuery } from './users.query';

@Injectable({ providedIn: 'root' })
export class UserService {
  constructor(
    private store: UserStore,
    private query: UsersQuery,
    private http: HttpClient
  ) {}

  selectUsers() {
    return this.query.selectHasCache().pipe(
      switchMap(hasCache => {
        const request$ = this.http.get<any>(`${environment.api}/users`).pipe(
          setLoading(this.store),
          map(x => plainToInstance(User, <any[]>x.data, { excludeExtraneousValues: true })),
          tap(x => this.store.set(x))
        );

        return hasCache ? EMPTY : request$;
      })
    );
  }

  refreshCache() {
    this.store.setHasCache(false);
  }
}
