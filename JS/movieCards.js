window.addEventListener('DOMContentLoaded', () => {
    class MovieCard {
        constructor(src, href, mark, title, ganre, parentSelector, ...classes) {
            this.src = src;
            this.href = href;
            this.mark = parseFloat(mark).toFixed(2);
            this.title = title;
            this.ganre = ganre;
            this.classes = classes;
            this.parent = document.querySelector(parentSelector);
        }
        render() {
            const element = document.createElement('div');
            let dateClass = 'noDate';
            this.class = this.classes.pop();
            if (this.class !== undefined) {
                dateClass = this.class
            } else {
                dateClass = 'noDate';
            }
            if (this.classes.length === 0) {
                element.classList.add(`cardItem`);
            } else {
                this.classes.forEach(className => element.classList.add(className));
            }

            // painting items
            if (this.mark <= 5) {
                this.itemColor = 'bad';
            } else if (this.mark > 5 && this.mark <= 6) {
                this.itemColor = 'notbad';
            } else if (this.mark > 6 && this.mark <= 7) {
                this.itemColor = 'good';
            } else if (this.mark > 7) {
                this.itemColor = 'verygood';
            }

            // detection of the genre
            const genres = this.ganre.toLowerCase().split(', '),
                  genreType = [];

            genres.forEach(item => {
                if (item == 'триллер') {
                    genreType.push('thriller');
                } else if (item == 'драма') {
                    genreType.push('drama');
                } else if (item == 'криминал') {
                    genreType.push('crime');
                } else if (item == 'фантастика') {
                    genreType.push('fantastic');
                } else if (item == 'фэнтези') {
                    genreType.push('fantasy');
                } else if (item == 'боевик') {
                    genreType.push('actionmovie');
                } else if (item == 'приключения') {
                    genreType.push('adventures');
                } else if (item == 'комедия') {
                    genreType.push('comedy');
                } else if (item == 'биография') {
                    genreType.push('biography');
                } else if (item == 'спорт') {
                    genreType.push('sport');
                } else if (item == 'мультфильм') {
                    genreType.push('cartoon');
                } else if (item == 'ужасы') {
                    genreType.push('horror');
                } else if (item == 'вестерн') {
                    genreType.push('western');
                }
            })

            this.genreType = genreType.join(' ')
            
            element.innerHTML = `
                <div class="cardItem__imageBox">
                    <img src=${this.src} class="cardItem__image">
                    <a href=${this.href} class="cardItem__rectangle"><div>Узнать больше</div></a>
                </div>
                <div class="cardItem__markItem ${this.itemColor}"><div>${this.mark}</div></div>
                <h4 class="cardItem__movieTitle ${dateClass}">
                    ${this.title}
                </h4>
                <h6 class="cardItem__movieGanre ${this.genreType}">
                    ${this.ganre}
                </h6>
            `;
            this.parent.append(element);

        }
    }

    // cinemaNow

    new MovieCard(
        'images/filmPosters/escape.png',
        'escape-from-pretoria.html',
        '6.7',
        'Побег из Претории',
        'Триллер',
        '.cinemaNow .movieCards',
    ).render();

    new MovieCard(
        'images/filmPosters/joker.png',
        'joker.html',
        '8.5',
        'Джокер',
        'Триллер, драма, криминал',
        '.cinemaNow .movieCards',
    ).render();

    new MovieCard(
        'images/filmPosters/star-wars.png',
        'star-wars.html',
        '6.7',
        'Звёздные войны: Скайуокер. Восход',
        'Фантастика, фэнтези, боевик, приключения',
        '.cinemaNow .movieCards'
    ).render();

    new MovieCard(
        'images/filmPosters/gents.png',
        'gentlemen.html',
        '8',
        'Джентльмены',
        'Боевик, комедия, криминал',
        '.cinemaNow .movieCards'
    ).render();

    new MovieCard(
        'images/filmPosters/ford-vs-ferrari.png',
        '#',
        '8.1',
        'Ford против Ferrari',
        'Биография, спорт, драма, боевик',
        '.cinemaNow .movieCards'
    ).render();

    new MovieCard(
        'images/filmPosters/3022.png',
        '#',
        '4.9',
        '3022',
        'Фантастика, триллер',
        '.cinemaNow .movieCards'
    ).render();

    new MovieCard(
        'images/filmPosters/chickens.png',
        '#',
        '6.2',
        'Хищные птицы: Потрясающая история Харли Квинн',
        'Боевик, криминал, комедия',
        '.cinemaNow .movieCards'
    ).render();

    new MovieCard(
        'images/filmPosters/bad-guys.png',
        '#',
        '6.9',
        'Плохие парни навсегда',
        'Боевик, комедия, криминал',
        '.cinemaNow .movieCards'
    ).render();

    // popular

    new MovieCard(
        'images/popular/forrest-gump.png',
        '#',
        '8.91',
        'Форрест Гамп',
        'Драма, комедия, мелодрама, история, военный',
        '.popular .movieCards',
        '1994'
    ).render();

    new MovieCard(
        'images/popular/onece-upon-a-time-in-Hollywood.png',
        '#',
        '7.7',
        'Однажды в… Голливуде',
        'Драма, комедия',
        '.popular .movieCards',
        '2019'
    ).render();

    new MovieCard(
        'images/popular/hacksaw-ridge.png',
        '#',
        '8.2',
        'По соображениям совести',
        'Биография, драма,  боевик',
        '.popular .movieCards',
        '2016'
    ).render();

    new MovieCard(
        'images/filmPosters/inglouriousbasterds.png',
        '#',
        '8',
        'Бесславные ублюдки',
        'Драма, военный, комедия, боевик',
        '.popular .movieCards',
        '2009'
    ).render();

    new MovieCard(
        'images/popular/jurassic-world.png',
        '#',
        '6.94',
        'Мир Юрского Периода',
        'Фантастика, приключения, боевик',
        '.popular .movieCards',
        '2015'
    ).render();

    new MovieCard(
        'images/popular/it.png',
        '#',
        '7.34',
        'Оно',
        'Детектив, драма, фэнтези, ужасы',
        '.popular .movieCards',
        '2017'
    ).render();

    new MovieCard(
        'images/popular/venom.png',
        '#',
        '6.91',
        'Веном',
        'Ужасы, триллер, боевик, фантастика',
        '.popular .movieCards',
        '2018'
    ).render();

    new MovieCard(
        'images/filmPosters/joker.png',
        'joker.html',
        '8.5',
        'Джокер',
        'Триллер, драма, криминал',
        '.popular .movieCards',
        '2019'
    ).render();

    new MovieCard(
        'images/popular/toy-story.png',
        '#',
        '7.8',
        'История игрушек 4',
        'Мультфильм, фэнтези, комедия, приключения',
        '.popular .movieCards',
        '2019'
    ).render();

    new MovieCard(
        'images/popular/Midsommar.png',
        '#',
        '7.1',
        'Солнцестояние',
        'Ужасы, триллер, драма',
        '.popular .movieCards',
        '2019'
    ).render();

    new MovieCard(
        'images/filmPosters/django.png',
        '#',
        '8.2',
        'Джанго освобождённый',
        'Вестерн, комедия, драма, боевик',
        '.popular .movieCards',
        '2012'
    ).render();

    new MovieCard(
        'images/filmPosters/bonetamagafk.png',
        '#',
        '6.9',
        'Костяной томагавк',
        'Вестерн, ужасы',
        '.popular .movieCards',
        '2015'
    ).render();

    new MovieCard(
        'images/filmPosters/paddington.png',
        '#',
        '8.1',
        'Приключения Паддингтона 2',
        'Фентези, комедия, приключения',
        '.popular .movieCards',
        '2017'
    ).render();

    new MovieCard(
        'images/popular/velikan.png',
        '#',
        '6.1',
        'Большой и добрый великан',
        'Фентези, приключения',
        '.popular .movieCards',
        '2016'
    ).render();

    new MovieCard(
        'images/popular/macdack.png',
        '#',
        '7.6',
        'Основатель',
        'Биография, драма',
        '.popular .movieCards',
        '2016'
    ).render();

    new MovieCard(
        'images/popular/deadpool.png',
        '#',
        '7.6',
        'Дэдпул',
        'Боевик, комедия',
        '.popular .movieCards',
        '2016'
    ).render();

    new MovieCard(
        'images/popular/bro.png',
        '#',
        '8.32',
        'Брат',
        'Драма, боевик',
        '.popular .movieCards',
        '1997'
    ).render();

    new MovieCard(
        'images/popular/visit.png',
        '#',
        '6.21',
        'Визит',
        'Ужасы',
        '.popular .movieCards',
        '2015'
    ).render();

    new MovieCard(
        'images/popular/krampus.png',
        '#',
        '5.8',
        'Крампус',
        'Ужасы, фэнтези, комедия',
        '.popular .movieCards',
        '2015'
    ).render();

    new MovieCard(
        'images/popular/goosebumps.png',
        '#',
        '6.24',
        'Ужастики',
        'Приключения, комедия, фэнтези',
        '.popular .movieCards',
        '2015'
    ).render();

    new MovieCard(
        'images/popular/earth.png',
        '#',
        '8.9',
        'Земля: Один потрясающий день',
        'Документальный, семейный',
        '.popular .movieCards',
        '2017'
    ).render();

    new MovieCard(
        'images/popular/coco.png',
        '#',
        '8.7',
        'Тайна Коко',
        'Фэнтези, комедия, приключения, семейный',
        '.popular .movieCards',
        '2017'
    ).render();

    new MovieCard(
        'images/popular/van-gogh.png',
        '#',
        '8.2',
        'Ван Гог. С любовью Винсент',
        'Биография, драма, преступление',
        '.popular .movieCards',
        '2017'
    ).render();

    new MovieCard(
        'images/popular/goosebumps-2.png',
        '#',
        '6.04',
        'Ужастики 2',
        'Фэнтези, комедия, приключения',
        '.popular .movieCards',
        '2018'
    ).render();

    new MovieCard(
        'images/popular/house-that-jack-built.png',
        '#',
        '7.02',
        'Дом, который построил Джек',
        'Триллер, драма, преступление, ужасы',
        '.popular .movieCards',
        '2018'
    ).render();

    new MovieCard(
        'images/popular/hugo.png',
        '#',
        '8.1',
        'Кузя и семейка троллей',
        'Мультфильм, семейный',
        '.popular .movieCards',
        '2018'
    ).render();

    new MovieCard(
        'images/popular/maigret.png',
        '#',
        '7.12',
        'Мегрэ: Ночь на перекрёстке',
        'Драма, преступление, детектив',
        '.popular .movieCards',
        '2017'
    ).render();

    new MovieCard(
        'images/popular/klaus.png',
        '#',
        '8.72',
        'Клаус',
        'Семейный, приключения',
        '.popular .movieCards',
        '2019'
    ).render();

    new MovieCard(
        'images/popular/lion-the-king.png',
        '#',
        '7.2',
        'Король лев',
        'Семейный, приключения',
        '.popular .movieCards',
        '2019'
    ).render();

    new MovieCard(
        'images/popular/greenland.png',
        '#',
        '6.8',
        'Гренландия',
        'Боевик, драма',
        '.popular .movieCards',
        '2020'
    ).render();

    new MovieCard(
        'images/popular/wolfs-legend.png',
        '#',
        '8.2',
        'Легенда о волках',
        'Приключения, семейный',
        '.popular .movieCards',
        '2020'
    ).render();

    new MovieCard(
        'images/popular/druk.png',
        '#',
        '7.6',
        'Ещё по одной',
        'Драма, комедия',
        '.popular .movieCards',
        '2020'
    ).render();

    new MovieCard(
        'images/popular/alita.png',
        '#',
        '7.22',
        'Алита: боевой ангел',
        'Боевик, фантастика',
        '.popular .movieCards',
        '2019'
    ).render();

    new MovieCard(
        'images/filmPosters/escape.png',
        'escape-from-pretoria.html',
        '6.7',
        'Побег из Претории',
        'Триллер',
        '.popular .movieCards',
        '2020'
    ).render();
});