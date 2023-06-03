export class ScrapedData {
  splash: string;
  size: string;
  category: string;

  constructor(splash: string, size: string, category: string) {
    this.splash = splash;
    this.size = size;
    this.category = category;
  }

  static fromJson(json: any): ScrapedData {
    return new ScrapedData(json.splash, json.size, json.category);
  }

  static fromJsonString(jsonStr: string): ScrapedData {
    return ScrapedData.fromJson(JSON.parse(jsonStr));
  }
}
