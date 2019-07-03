import { Controller } from '@nestjs/common';
import { Crud, CrudController } from '@nestjsx/crud';
import { User } from '../../entities/user.entity';
import { UserService } from '../../services/user/user.service';

@Crud({ model: { type: User } })
@Controller('users')
export class UserController implements CrudController<User> {
  constructor(public service: UserService) {}
}
