import { Module } from '@nestjs/common';
import { GameController } from './game.controller';
import { GameService } from './game.service';
import { TypeOrmExModule } from 'src/database/typeorm-ex.module';
import { GameRepository } from './game.repository';

@Module({
  imports: [TypeOrmExModule.forCustomRepository([GameRepository])],
  controllers: [GameController],
  providers: [GameService],
})
export class GameModule {}
