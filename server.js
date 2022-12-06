const express = require('express');

const termData = require('./terms.json');
const PORT = 3001;

const app = express();

app.get('/', (req, res) => res.send('Visit http://localhost:3001/api'));

app.get('/api', (req, res) => res.json(termData));

app.listen(PORT, () =>
  console.log(`Example app listening at http://localhost:${PORT}`)
);
