"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fetch = require('node-fetch');
const cheerio = require('cheerio');
class SimpleCrawler {
    /**
     * @throws Error
     */
    async crawl(url) {
        let data = await fetch(url);
        let text = await data.text();
        let $ = cheerio.load(text);
        return Promise.resolve($);
    }
}
exports.SimpleCrawler = SimpleCrawler;
//# sourceMappingURL=simple-crawler.js.map