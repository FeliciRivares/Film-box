
'use strict';

const movieDB = {
    movies: [
        "Logan",
        "Justice League",
        "La la land",
        "Obsession",
        "Scott Pilgrim vs..."
    ]
};


const adv = document.querySelectorAll('.promo__adv img'),
    promoBG = document.querySelector('.promo__bg'),
    genre = promoBG.querySelector('.promo__genre'),
    movieList = document.querySelector('.promo__interactive-list') ;


adv.forEach(item => {
    item.remove();
});

genre.textContent = "DRAMA";
promoBG.style.background = "url(./img/bg.jpg) center center/cover no-repeat";

movieList.innerHTML = "";
movieDB.movies.sort();
movieDB.movies.forEach((film, i) => {
    movieList.innerHTML += `
        <li class="promo__interactive-item">${i + 1} ${film}
            <div class="delete"></div>
        </li>
    `;
});