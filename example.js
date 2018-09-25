"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const simple_crawler_1 = require("./src/simple-crawler");
(async function () {
    const simpleCrawler = new simple_crawler_1.SimpleCrawler();
    const $ = await simpleCrawler.crawl('https://www.google.com/search?q=funny+cat+gifs');
    const links = $('a');
    console.log(links);
})();
//# sourceMappingURL=example.js.map