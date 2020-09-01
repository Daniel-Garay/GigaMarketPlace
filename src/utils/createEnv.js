const fs = require('fs');

fs.writeFileSync('./.env', `API_KEY_TOKEN=${process.env.API_KEY_TOKEN}\n`);
fs.writeFileSync('./.env', `ROWS_PER_PAGE=${process.env.ROWS_PER_PAGE}\n`);
fs.writeFileSync('./.env', `URL_API=${process.env.URL_API}\n`);
