const fetch = require('node-fetch');
const cheerio = require('cheerio');
export class SimpleCrawler {
    /**
     * @throws Error
     */
    async crawl(url : string) {
        let data = await fetch(url);
        let text = await data.text();
        let $ = cheerio.load(text);
        return Promise.resolve($);
    }
}