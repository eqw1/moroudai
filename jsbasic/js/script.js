"use strict";

const numberOfFilms = +prompt("Сколько фильмов вы посмотрели?", "");

const personalMovieDatabase = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false
};

const a = prompt("Один из последних просмотренных фильмов?", ""),
      b = +prompt("На сколько его оцените по 10 балльной школе", ""),
      c = prompt("Один из последних просмотренных фильмов?", ""),
      d = +prompt("На сколько его оцените по 10 балльной школе", "");

personalMovieDatabase.movies[a] = b;
personalMovieDatabase.movies[c] = d;

