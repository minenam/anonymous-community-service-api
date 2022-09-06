import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { SnakeNamingStrategy } from 'typeorm-naming-strategies';

export const typeOrmAsyncModuleOptions = {
  useFactory: async (): Promise<TypeOrmModuleOptions> => ({
    namingStrategy: new SnakeNamingStrategy(),
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: 'preonboarding-week2',
    entities: [__dirname + '/../**/*.entity.{js,ts}'],
    synchronize: process.env.MODE == 'dev', //! set 'false' in production
    autoLoadEntities: true,
    logging: process.env.MODE == 'dev',
  }),
};
