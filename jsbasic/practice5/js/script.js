/*jshint -W097 */
'use strict';

document.addEventListener('DOMContentLoaded', () => {
    const movieDB = {
        movies: [
            "Логан",
            "Лига справедливости",
            "Ла-ла лэнд",
            "Одержимость",
            "Скотт Пилигрим против..."
        ]
    };
    
    let moviesList = document.querySelector('.promo__interactive-list');
    
    function refreshUserFilmList() {
        movieDB.movies.sort();
        moviesList.innerHTML = "";
        movieDB.movies.forEach((item, i) => {
        moviesList.insertAdjacentHTML('beforeend', 
                                      `<li class="promo__interactive-item">${i+1}. ${item}
                                          <div class="delete"></div>
                                       </li>`);
        });
        // Ивент удаления фильма из базы и со страницы при клике навешивается на все кнопки delete
        document.querySelectorAll('.delete').forEach((btn, i) => {
            btn.addEventListener("click", (event) => {
                btn.parentElement.remove();
                movieDB.movies.splice(i, 1);
                refreshUserFilmList();
            });
        });
    }
    
    // Добавление новых просмотренных фильмов через форму без обновления страницы
    // Обрезание фильмов длиннее 21 символа
    let form = document.querySelector('form.add'),
        input = form.querySelector('input'),
        checkbox = form.querySelector('[type="checkbox"]');
    form.addEventListener('submit', (event) => {
        event.preventDefault();
 
        let userFilm;
        userFilm = input.value;
        if (userFilm) {
            if (userFilm.length >21) {
                userFilm = userFilm.substr(0, 21) + "...";
            }
            movieDB.movies.push(userFilm);
            if (checkbox.checked) {
                console.log("Любимый фильм");
            }
            refreshUserFilmList();
            event.target.reset(); 
        }
    });

    document.querySelector('.promo__adv').remove();
    document.querySelector('.promo__genre').textContent = "ДРАМА";
    document.querySelector('.promo__bg').style.backgroundImage = 'url(../practice5/img/bg.jpg)';
    refreshUserFilmList();
});