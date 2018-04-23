const express = require('express');
const FilmsData = require('../data/films_data.js');
const filmsData = new FilmsData();

const filmsRouter = new express.Router();

// 1) GET ALL THE FILMS
filmsRouter.get('/', function (req, res) {
  const allFilms = filmsData.all();
  res.json({films: allFilms});
});

filmsRouter.get('/:id', function(req, res){
  res.json({film: filmsData.films[req.params.id]});
});

//NOT RUNNING
filmsRouter.post('/', function (req, res){
  const newFilm = req.body.film;
  filmsData.films.push(newFilm);
  res.json(newFilm);
})

// RUNNING
filmsRouter.put('/:id', function(req, res){
  const newFilm = req.body.film;
  const index = req.params.id;
  filmsData.films[index] = newFilm;
  res.json(filmsData.films);
})

filmsRouter.delete('/:id', function(req, res){
  const index = req.params.id;
  filmsData.films.splice(index, 1);
  res.json(filmsData.films);
})



module.exports = filmsRouter;
