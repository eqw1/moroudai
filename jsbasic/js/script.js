"use strict";

const numberOfFilms = +prompt("Сколько фильмов вы посмотрели?", "");

const personalMovieDatabase = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false
};

for (let i = 0; i < 2; ++i) {
    let a = prompt("Один из последних просмотренных фильмов?", ""),
        b = +prompt("На сколько его оцените по 10 балльной школе", "");
    if (a === "" || !a || a.length > 50) {
        alert("Некорректное название фильма, повторите");
        --i;
        continue;
    }
    personalMovieDatabase.movies[a] = b;
}

if (personalMovieDatabase.count < 10) {
    alert("Просмотрено мало фильмов");
} else if (personalMovieDatabase.count >= 10 && 
           personalMovieDatabase.count < 30) {
    alert("Вы классический зритель");
} else {
    alert("Вы киноман");
}

