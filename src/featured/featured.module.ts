import { Module } from '@nestjs/common';
import { FeaturedController } from './featured.controller';
import { FeaturedService } from './featured.service';
import { TypeOrmExModule } from 'src/database/typeorm-ex.module';
import { GameRepository } from 'src/game/game.repository';

@Module({
  imports: [TypeOrmExModule.forCustomRepository([GameRepository])],
  controllers: [FeaturedController],
  providers: [FeaturedService],
})
export class FeaturedModule {}
