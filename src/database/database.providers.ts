import { createConnection } from 'typeorm';
import { DB_CON_TOKEN } from './database.constants';
import { connection } from './database.config';

export const databaseProviders = [
  {
    provide: DB_CON_TOKEN,
    useFactory: async () => createConnection(connection),
  },
];
