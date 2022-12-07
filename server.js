const express = require('express');
// const exphbs = require('express-handlebars');
// const routes = require('./controllers');
// const helpers = require('./utils/helpers');
const sequelize = require('./config/connection');
const path = require('path');

const app = express();
const PORT = 3001;

// Create the Handlebars.js engine object with custom helper functions
// const hbs = exphbs.create({ helpers });

// Inform Express.js which template engine we're using
// app.engine('handlebars', hbs.engine);
// app.set('view engine', 'handlebars');
//app.set('views', './views');

app.use(express.static('public'));

app.get('/', (req, res) => res.send('Navigate to /send or /routes'));

app.get('/send', (req, res) =>
  res.sendFile(path.join(__dirname, 'public/send.html'))
);

// app.use(routes);

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});


app.get('/paths', (req, res) =>
  res.sendFile(path.join(__dirname, 'public/paths.html'))
);

app.listen(PORT, () =>
  console.log(`Example app listening at http://localhost:${PORT}`)
);
