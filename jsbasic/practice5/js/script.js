/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};

// 1
document.querySelector('.promo__adv').remove();

// 2
document.querySelector('.promo__genre').textContent = "ДРАМА";

// 3
document.querySelector('.promo__bg').style.backgroundImage = 'url(../practice5/img/bg.jpg)';

// 4-5
let moviesList = document.querySelector('.promo__interactive-list');
moviesList.innerHTML = "";
movieDB.movies.sort();
movieDB.movies.forEach((item, i) => {
    moviesList.insertAdjacentHTML('beforeend', 
                                  `<li class="promo__interactive-item">${i+1}. ${item}
                                      <div class="delete"></div>
                                   </li>`);
});
