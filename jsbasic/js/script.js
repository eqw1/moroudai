"use strict";

let numberOfFilms;

function start() {
    // isNaN - is not a number проверка на то, что значение числовое
    while (numberOfFilms == "" || !numberOfFilms || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt("Сколько фильмов вы посмотрели?", "");
    }
}

const personalMovieDatabase = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false
};

function rememberMyFilms() {
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
}

rememberMyFilms();

function detectPersonalLevel() {
    if (personalMovieDatabase.count < 10) {
        alert("Просмотрено мало фильмов");
    } else if (personalMovieDatabase.count >= 10 && 
            personalMovieDatabase.count < 30) {
        alert("Вы классический зритель");
    } else {
        alert("Вы киноман");
    }
}

detectPersonalLevel();


// Доп задания
function showMyDB() {
    if (!personalMovieDatabase.private) {
        console.log(personalMovieDatabase);
    } else {
        console.log("Данные недоступны");
    }
}

function writeYourGenres() {
    for (let i = 0; i < 3; ++i) {
        let temp = prompt(`Ваш любимый жанр номер ${i+1}`);
        personalMovieDatabase.genres[i] = temp;
    }
}