export class UrlBaser {
  static baseUrl: string = '';

  static base(url: string): string {
    if (!url.startsWith('/')) return url;
    return UrlBaser.baseUrl + url;
  }
}
