import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { UserService } from 'src/app/services/users/user.service';
import { UsersQuery } from 'src/app/services/users/users.query';

@UntilDestroy()
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UsersComponent implements OnInit {
  users$ = this.usersQuery.selectAll();

  constructor(userService: UserService, private usersQuery: UsersQuery) {
    userService.selectUsers().pipe(untilDestroyed(this)).subscribe();
  }

  ngOnInit() {

  }
}
