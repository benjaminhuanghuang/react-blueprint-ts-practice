export class UrlBaser {
    static baseUrl = '';

    static base(url) {
        if (!url.startsWith('/')) return url;
        return UrlBaser.baseUrl + url;
    }
}
