import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { Game } from 'src/game/game.entity';

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT ?? '5432'),
  username: process.env.DB_USER ?? '',
  password: process.env.DB_PASSWORD ?? '',
  database: 'nspost',
  entities: [Game],
  synchronize: true,
};
