import { DataSource, DataSourceOptions } from 'typeorm';
import { env } from '../config/env';

const AppDataSourceOptions: DataSourceOptions = {
  type: 'postgres',
  host: env.DB_HOST,
  port: env.DB_PORT,
  username: env.DB_USER,
  password: env.DB_PASSWORD,
  database: env.DEFAULT_DB,
  logging: true,
  entities: ['dist/**/*.entity.js'],
  subscribers: [],
  migrations: [__dirname + '/migration/**/*{.js,.ts}'],
};

export const dataSource = new DataSource(AppDataSourceOptions);

export default AppDataSourceOptions;
