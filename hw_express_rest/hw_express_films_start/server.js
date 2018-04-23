const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

const filmsRouter = require('./controllers/films_controller.js')
app.use('/films', filmsRouter);


app.listen(3000, function () {
  console.log(`App running on port ${this.address().port}`);
});
