import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Game } from 'src/game/game.entity';
import { GameRepository } from 'src/game/game.repository';

@Injectable()
export class FeaturedService {
  constructor(
    @InjectRepository(GameRepository)
    private gameRepository: GameRepository,
  ) {}

  async getFeatured(): Promise<Game[]> {
    return this.gameRepository.getFeaturedGames();
  }
}
