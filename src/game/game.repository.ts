import { Like, Repository } from 'typeorm';
import { CustomRepository } from 'src/database/typeorm-ex.decorator';
import { Game } from './game.entity';
import { GameDto } from './game.dto';
import { UnprocessableEntityException } from '@nestjs/common';
import { Scraper } from 'src/utils/scraper';

@CustomRepository(Game)
export class GameRepository extends Repository<Game> {
  async getGameById(id: string): Promise<Game> {
    const game = await Game.findOne({ where: { id: id } });
    if (!game)
      throw new UnprocessableEntityException('NO GAME FOUND WITH THIS ID');

    game.views += 1;
    await game.save();

    return game;
  }

  async getGamesBySearch(query: string): Promise<Game[]> {
    const games = await Game.find({ where: { title: Like(`%${query}%`) } });
    games.forEach((game: Game) => {
      game.views += 1;
      game.save().then();
    });
    return games;
  }

  async getAllGames(): Promise<Game[]> {
    const games = await Game.find();

    games.forEach((game: Game) => {
      game.views += 1;
      game.save().then();
    });

    return games;
  }

  async postGame(data: GameDto): Promise<Game> {
    const game = Game.create();

    const eShopScrapedInfo_promise = Scraper.scrape(data.eShopLink);

    game.title = data.title;
    game.eShopLink = data.eShopLink;
    game.magnet = data.magnet;
    game.views = 1;

    const eShopScrapedInfo = await eShopScrapedInfo_promise;

    game.splash = eShopScrapedInfo.splash;
    game.size = eShopScrapedInfo.size;
    game.category = eShopScrapedInfo.category;

    return await game.save();
  }

  async getFeaturedGames(): Promise<Game[]> {
    return await Game.find({ take: 5, order: { views: 'DESC' } });
  }
}
