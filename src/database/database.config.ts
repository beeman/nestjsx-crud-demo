import { connections } from './configs';
import { User } from '../user/entities/user.entity';

const entities = [ User ];
const type = process.env.DB_TYPE || 'sqlite';

export const connection = connections[type](entities);
