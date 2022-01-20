import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { combineLatest, map } from 'rxjs';
import { User } from 'src/app/services/users/user';
import { UserService } from 'src/app/services/users/user.service';
import { UsersQuery } from 'src/app/services/users/users.query';

@UntilDestroy()
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserComponent implements OnInit {
  user$ = combineLatest([this.usersQuery.selectAll(), this.route.params]).pipe(
    map(([users, params]: [User[], any]) =>
      users.find((x) => x.id == params.id)
    )
  );

  constructor(
    private route: ActivatedRoute,
    userService: UserService,
    private usersQuery: UsersQuery
  ) {
    userService.selectUsers().pipe(untilDestroyed(this)).subscribe();
    // route.params.pipe(untilDestroyed(this), distinctUntilChanged()).subscribe(id => {
    //   usersQuery.selectAll().
    // });
  }

  ngOnInit() {}
}
