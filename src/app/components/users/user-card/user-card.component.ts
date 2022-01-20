import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { User } from 'src/app/services/users/user';

@Component({
  selector: 'user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserCardComponent {
  @Input() user!: User;

  get abbreviation() {
    return this.user.firstName[0].toUpperCase() + this.user.lastName[0].toUpperCase();
  }
}
