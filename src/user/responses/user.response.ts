import { Provider, User } from '@prisma/client';
import { Exclude } from 'class-transformer';

export class UserResponse implements User {
  id: string;
  email: string;

  @Exclude()
  password: string;

  @Exclude()
  createdAt: Date;

  @Exclude()
  provider: Provider;

  @Exclude()
  isBlocked: boolean;

  updatedAt: Date;

  constructor(user: User) {
    Object.assign(this, user);
  }
}
