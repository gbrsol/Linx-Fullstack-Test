# Linx-Fullstack-Test
 
Practical test submitted to © Linx 2021 for a Junior Developer position.

## Dependencies
package.json

```sh
"dependencies": {
    "body-parser": "^1.19.0",
    "consign": "^0.1.6",
    "ejs": "^3.1.6",
    "express": "^4.17.1",
    "express-session": "^1.17.1",
    "express-validator": "^6.10.0",
    "jquery": "^3.5.1",
    "jsdom": "^16.4.0",
    "line-reader": "^0.4.0",
    "mongodb": "^2.2.9",
    "node-fetch": "^2.6.1"
  }
```
| Plugin            | README                                                                      |
| ------            | ------                                                                      |
| body-parser       | [body-parser/README](https://www.npmjs.com/package/body-parser)             | 
| consign           | [consign/README](https://www.npmjs.com/package/consign)                     |
| ejs               | [ejs/README](https://www.npmjs.com/package/ejs)                             |
| express           | [express/README](https://www.npmjs.com/package/express)                     |
| express-session   | [express-session/README](https://www.npmjs.com/package/express-session)     |
| express-validator | [express-validator/README](https://www.npmjs.com/package/express-validator) |
| jquery            | [jquery/README](https://www.npmjs.com/package/jquery)                       |
| jsdom             | [jsdom/README](https://www.npmjs.com/package/jsdom)                         |
| line-reader       | [line-reader/README](https://www.npmjs.com/package/line-reader)             |
| mongodb           | [mongodb/README](https://www.npmjs.com/package/mongodb)                     |
| node-fetch        | [node-fetch/README](https://www.npmjs.com/package/node-fetch)               |


## Instructions
- Download the repository;
- Download MongoDB on your computer (preferably with MongoDB compass);
- Connect to MongoDB on localhost, port 27017 (the default one);
- Run the script on 'Script_PopulateDB' named 'populateDB.js';
- Run 'npm install' on root directory to install the dependencies;
- Run Node.js command 'node app' on root directory;
- Access 'localhost:3000' to use the app.

## About the code

- Many of the codes here could be optimized(looking at you timeouts), but unfortunately I'm not very knowledgeable with async and promises;
- The only js and css used together with my own is [Flickity](https://flickity.metafizzy.co/), an API used for carousels;
- The MVC architecture was respected and used in most of the project.
- The project is not 100% functional due to a problem in the catalog controller while calling a model method and other mongodb connection object issues;
- The data to be used in the APIs(popularity and % of prices) were not found in the database, therefore the queries used were similar to the 'get' method.

## APIs Documentation

- [CatalogAPI](https://github.com/gbrsol/Linx-Fullstack-Test/blob/main/docs/documentation/pdf/CatalogAPI.pdf)
- [RecommendationAPI](https://github.com/gbrsol/Linx-Fullstack-Test/blob/main/docs/documentation/pdf/RecommendationAPI.pdf)

## License
GNU General Public License v3.0
