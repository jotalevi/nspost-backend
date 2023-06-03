import cheerio from 'cheerio';
import axios from 'axios';
import { ScrapedData } from './scrapedData.dto';
import { SearchResult } from './searchResult.dto';
import { clearConfigCache } from 'prettier';

export class Scraper {
  static async scrape(url: string): Promise<ScrapedData> {
    const scrapedData = {
      splash: '',
      size: '',
      category: '',
    };

    const axiosResponse = await axios(url);
    const html_data = axiosResponse.data;
    const $ = cheerio.load(html_data);

    scrapedData.splash = $(
      '#main > section.Herostyles__HeroSection-sc-1i9d4nw-0.fQixkV > div > div.Herostyles__GallerySide-sc-1i9d4nw-2.fmOvAv > div:nth-child(1) > div.constrained-sc-1d4m5hk-0.Herostyles__MediaGalleryWrapper-sc-1i9d4nw-7.kSloKi.cqFtEX > div > div.slider-container > div.slider-frame.MediaGallerystyles__Carousel-sc-1fakp5g-15.hTtnIA > div > div.slide.slide-current.slide-visible > div > div > div > div > img',
    ).attr('src');

    scrapedData.size = $(
      '#about > div > div.ProductInfostyles__InfoSection-sc-1237z5p-0.lnmhHm > div > div:nth-child(7) > div > div',
    )
      .toString()
      .replace('<div>', '')
      .replace('</div>', '');

    const catArr = [];
    const catLength = $(
      '#about > div > div.ProductInfostyles__InfoSection-sc-1237z5p-0.lnmhHm > div > div:nth-child(3) > div',
    ).children().length;
    for (let i = 1; i <= catLength; i++) {
      catArr.push(
        $(
          `#about > div > div.ProductInfostyles__InfoSection-sc-1237z5p-0.lnmhHm > div > div:nth-child(3) > div > div:nth-child(${i}) > button > span > a`,
        )
          .toString()
          .split('>')[1]
          .replace('</a', ''),
      );
    }
    scrapedData.category = catArr.join(', ');

    return ScrapedData.fromJson(scrapedData);
  }

  static async search(query: string): Promise<SearchResult> {
    const scrapedData = {
      splash: '',
      title: '',
      url: '',
    };

    const axiosResponse = await axios(
      `https://www.nintendo.com/search/#q=${query.split(' ').join('+')}`,
    );
    const html_data = axiosResponse.data;
    const $ = cheerio.load(html_data);

    //TODO: Finish the search scraper

    return SearchResult.fromJson(scrapedData);
  }
}
