import { Injectable } from '@nestjs/common';
import { Scraper } from 'src/utils/scraper';
import { SearchResult } from 'src/utils/searchResult.dto';

@Injectable()
export class EshopService {
  constructor() {}

  async getGamesFromSearch(query: string): Promise<SearchResult> {
    return await Scraper.search(query);
  }
}
