const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('Hare Rama Hare Rama Rama Rama Hare| Hare Krishna Hare Krishna Krishna Krishna Hare Hare ||'));

app.listen(port);
console.log(`App running on http://localhost:${port}`);
