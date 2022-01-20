import { Expose } from 'class-transformer';

export class User {
  @Expose()
  id!: string;

  @Expose()
  email!: string;

  @Expose({ name: 'first_name' })
  firstName!: string;

  @Expose({ name: 'last_name' })
  lastName!: string;

  @Expose()
  avatar!: string;
}
