import { ConnectionOptions } from 'typeorm';

export const connection = (entities): ConnectionOptions => {
  return {
    type: 'sqlite',
    entities,
    database: `development.sqlite`,
    synchronize: true,
    logging: true,
  };
};
