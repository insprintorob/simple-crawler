A simple crawler using fetch, cheerio. Supports async await support using Promises.

Example (see also example.ts):
```
import { SimpleCrawler } from "./src/simple-crawler";

(async function() {
    const simpleCrawler = new SimpleCrawler();
    const $ = await simpleCrawler.crawl('https://www.google.com/search?q=funny+cat+gifs');
    const links = $('a');
    console.log(links);
})();
````