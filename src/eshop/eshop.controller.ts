import { Controller, Get, Query } from '@nestjs/common';
import { EshopService } from './eshop.service';
import { SearchResult } from 'src/utils/searchResult.dto';

@Controller('eshop')
export class EshopController {
  constructor(private readonly eshopService: EshopService) {}

  @Get()
  async getGamesFromSearch(@Query('q') query: string): Promise<SearchResult> {
    return await this.eshopService.getGamesFromSearch(query);
  }
}
