import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';

import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';

import { USER_TOKEN } from '../../user.constants';
import { User } from '../../entities/user.entity';

@Injectable()
export class UserService extends TypeOrmCrudService<User> {
  constructor(@Inject(USER_TOKEN) protected readonly repo: Repository<User>) {
    super(repo);
  }
}
