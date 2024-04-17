import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';

const pg = {
  hostname: 'localhost',
  port: '5432',
  username: 'postgres',
  password: 'admin',
  database: 'test_pagination',
  sslmode: 'disable',
};

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: pg.hostname,
      port: parseInt(pg.port),
      username: pg.username,
      password: pg.password,
      database: pg.database,
      ssl: pg.sslmode !== 'disable',
      autoLoadEntities: true,
      // it is unsafe to use synchronize: true for schema synchronization on production
      synchronize: false, // process.env.NODE_ENV === 'development',
      logging: process.env.NODE_ENV === 'development',
      useUTC: true,
    }),
    UsersModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
