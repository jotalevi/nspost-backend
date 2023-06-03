import { Controller, Get } from '@nestjs/common';
import { Game } from 'src/game/game.entity';
import { FeaturedService } from './featured.service';

@Controller('featured')
export class FeaturedController {
  constructor(private readonly featuredService: FeaturedService) {}

  @Get()
  async getGame(): Promise<Game[]> {
    return await this.featuredService.getFeatured();
  }
}
