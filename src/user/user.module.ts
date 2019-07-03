import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';

import { UserService } from './services/user/user.service';
import { UserController } from './controllers/user/user.controller';
import { userProviders } from './user.providers';

@Module({
  imports: [DatabaseModule],
  providers: [...userProviders, UserService],
  controllers: [UserController],
})
export class UserModule {}
