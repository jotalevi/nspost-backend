import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Game } from './game.entity';
import { GameRepository } from './game.repository';
import { GameDto } from './game.dto';

@Injectable()
export class GameService {
  constructor(
    @InjectRepository(GameRepository)
    private gameRepository: GameRepository,
  ) {}

  async getGameById(id: string): Promise<Game> {
    return this.gameRepository.getGameById(id);
  }

  async getGamesBySearch(query: string): Promise<Game[]> {
    return this.gameRepository.getGamesBySearch(query);
  }

  async getAllGames(): Promise<Game[]> {
    return this.gameRepository.getAllGames();
  }

  async postGame(data: GameDto): Promise<Game> {
    return this.gameRepository.postGame(data);
  }
}
