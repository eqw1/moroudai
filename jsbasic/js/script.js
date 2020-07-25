/*jshint -W097 */
"use strict";

const personalMovieDB = {
    personalMovieDatabase: {
        count: 0,
        movies: {},
        actors: {},
        genres: [],
        private: false
    },

    start: function() {
        let numberOfFilms;
        // isNaN - is not a number проверка на то, что значение числовое
        while (numberOfFilms == "" || !numberOfFilms || isNaN(numberOfFilms)) {
            numberOfFilms = +prompt("Сколько фильмов вы посмотрели?", "");
        }
        this.personalMovieDatabase.count = numberOfFilms;
    },

    rememberMyFilms: function() {
        for (let i = 0; i < 2; ++i) {
            let a = prompt("Один из последних просмотренных фильмов?", ""),
                b = +prompt("На сколько его оцените по 10 балльной школе", "");
            if (a === "" || !a || a.length > 50) {
                alert("Некорректное название фильма, повторите");
                --i;
                continue;
            }
            this.personalMovieDatabase.movies[a] = b;
        }
    },

    detectPersonalLevel: function() {
        if (this.personalMovieDatabase.count < 10) {
            alert("Просмотрено мало фильмов");
        } else if (this.personalMovieDatabase.count >= 10 && 
                this.personalMovieDatabase.count < 30) {
            alert("Вы классический зритель");
        } else {
            alert("Вы киноман");
        }
    },

    showMyDB: function() {
        if (!this.personalMovieDatabase.private) {
            console.log(this.personalMovieDatabase);
        } else {
            console.log("Данные недоступны");
        }
    },

    writeYourGenres: function() {
        for (let i = 0; i < 3; ++i) {
            let temp;
            while (temp == "" || !temp) {
                temp = prompt(`Ваш любимый жанр номер ${i+1}?`, "");
            }
            this.personalMovieDatabase.genres[i] = temp;
        }
        this.personalMovieDatabase.genres.forEach(function(val, i) {
            console.log(`Любимый жанр №${i+1} - это ${val}`);
        });
    },

    toggleVisibleMyDB: function() {
        this.personalMovieDatabase.private = !this.personalMovieDatabase.private;
    }
};

personalMovieDB.start();
personalMovieDB.rememberMyFilms();
personalMovieDB.detectPersonalLevel();
personalMovieDB.showMyDB();
