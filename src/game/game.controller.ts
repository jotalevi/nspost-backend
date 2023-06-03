import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { GameService } from './game.service';
import { Game } from './game.entity';
import { GameDto } from './game.dto';

@Controller('game')
export class GameController {
  constructor(private readonly gameService: GameService) {}

  @Get()
  async getGame(@Query('id') id?: string): Promise<Game | Game[]> {
    return id
      ? await this.gameService.getGameById(id)
      : await this.gameService.getAllGames();
  }

  @Get('/search')
  async getGameSearch(@Query('query') query: string): Promise<Game[]> {
    return this.gameService.getGamesBySearch(query);
  }

  @Post()
  async postGame(
    @Body('title') title: string,
    @Body('eShopLink') eShopLink: string,
    @Body('magnet') magnet: string,
  ): Promise<Game> {
    return await this.gameService.postGame({
      title: title,
      eShopLink: eShopLink,
      magnet: magnet,
    });
  }
}
