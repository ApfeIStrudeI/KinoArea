window.addEventListener('DOMContentLoaded', () => {
    class ExpectedMovieCard {
        constructor(src, title, data, parentSelector, ...classes) {
            this.src = src;
            this.title = title;
            this.data = data;
            this.classes = classes;
            this.parent = document.querySelector(parentSelector);
        } 
        render() {
            const element = document.createElement('div');
            if (this.classes.length === 0) {
                element.classList.add('expected__slide', 'widProp', 'cardItem');
            } else {
                this.classes.forEach(className => element.classList.add(className));
            }
            
            element.innerHTML = `
                <img src=${this.src} class="cardItem__image">
                <h4 class="cardItem__movieTitle">
                    ${this.title}
                </h4>
                <h6 class="cardItem__movieGanre">
                    ${this.data}
                </h6>
            `;
            this.parent.append(element);
        }
    }

    new ExpectedMovieCard(
        'images/filmPosters/escape.png',
        'Побег из Претории',
        '14 мая 2020 в России',
        '.expected .movieCards'
    ).render();

    new ExpectedMovieCard(
        'images/expected/adios.png',
        'Прощай',
        '13 мая 2020 в России',
        '.expected .movieCards'
    ).render();

    new ExpectedMovieCard(
        'images/expected/friends.png',
        'Дружить по-русски!',
        '21 мая 2020 в России',
        '.expected .movieCards'
    ).render();

    new ExpectedMovieCard(
        'images/expected/comeToMe.png',
        'Приди ко мне',
        '23 мая 2020 в России',
        '.expected .movieCards'
    ).render();

    new ExpectedMovieCard(
        'images/filmPosters/joker.png',
        'Джокер',
        '25 мая 2020 в России',
        '.expected .movieCards'
    ).render();

    new ExpectedMovieCard(
        'images/filmPosters/star-wars.png',
        'Звёздные войны: Скайуокер. Восход',
        '21 июня 2020 в России',
        '.expected .movieCards'
    ).render();
});