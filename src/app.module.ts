import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import AppDataSourceOptions from './db/config';

@Module({
  imports: [TypeOrmModule.forRoot(AppDataSourceOptions)],
})
export class AppModule {}
