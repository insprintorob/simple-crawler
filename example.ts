import { SimpleCrawler } from "./src/simple-crawler";

(async function() {
    const simpleCrawler = new SimpleCrawler();
    const $ = await simpleCrawler.crawl('https://www.google.com/search?q=funny+cat+gifs');
    const links = $('a');
    console.log(links);
})();
