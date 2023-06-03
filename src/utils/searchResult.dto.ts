export class SearchResult {
  splash: string;
  title: string;
  url: string;

  constructor(splash: string, title: string, url: string) {
    this.splash = splash;
    this.title = title;
    this.url = url;
  }

  static fromJson(json: any): SearchResult {
    return new SearchResult(json.splash, json.title, json.url);
  }

  static fromJsonStr(jsonStr): SearchResult {
    return SearchResult.fromJson(JSON.parse(jsonStr));
  }
}
