import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GameModule } from './game/game.module';
import { FeaturedModule } from './featured/featured.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from './configs/typeorm.config';
import { TypeOrmExModule } from './database/typeorm-ex.module';
import { GameRepository } from './game/game.repository';
import { EshopModule } from './eshop/eshop.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(typeOrmConfig),
    TypeOrmExModule.forCustomRepository([GameRepository]),
    GameModule,
    FeaturedModule,
    EshopModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
