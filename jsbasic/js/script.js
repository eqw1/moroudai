/*jshint -W097 */
"use strict";

const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    private: false,

    start: function() {
        // isNaN - is not a number проверка на то, что значение числовое
        do  {
            this.count = +prompt("Сколько фильмов вы посмотрели?", "");
        } while (this.count == "" || !this.count || isNaN(this.count));
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
            this.movies[a] = b;
        }
    },

    detectPersonalLevel: function() {
        if (this.count < 10) {
            alert("Просмотрено мало фильмов");
        } else if (this.count >= 10 && 
                this.count < 30) {
            alert("Вы классический зритель");
        } else {
            alert("Вы киноман");
        }
    },

    showMyDB: function() {
        if (!this.private) {
            console.log(this);
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
            this.genres[i] = temp;
        }
        this.genres.forEach(function(val, i) {
            console.log(`Любимый жанр №${i+1} - это ${val}`);
        });
    },

    toggleVisibleMyDB: function() {
        this.private = !this.private;
    }
};

personalMovieDB.start();
personalMovieDB.rememberMyFilms();
personalMovieDB.detectPersonalLevel();
personalMovieDB.showMyDB();
