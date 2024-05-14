window.addEventListener('DOMContentLoaded', () => {
    class boxOfficeCard {
        constructor(src, title, boxOffice, boxOfficeForWeeks, parentSelector, ...classes) {
            this.src = src;
            this.boxOffice = boxOffice;
            this.title = title;
            this.boxOfficeForWeeks = boxOfficeForWeeks;
            this.classes = classes;
            this.parent = document.querySelector(parentSelector);
        }
        render() {
            const element = document.createElement('div');
            if (this.classes.length === 0) {
                element.classList.add('filmBoxOffice__item');
            } else {
                this.classes.forEach(className => element.classList.add(className));
            }
            element.innerHTML = `
                <img src=${this.src}>
                <div class="filmBoxOffice__info">
                    <h6 class="title">
                        ${this.title}
                    </h6>
                    <div class="boxOffice">
                        ${this.boxOffice}
                    </div>
                    <div class="boxOfficeOnWeek">
                        ${this.boxOfficeForWeeks}
                    </div>
                </div>
            `;
            this.parent.append(element);
        }
    }

    // первый слайд

    new boxOfficeCard(
        'images/filmBoxOffice/holop.png',
        '1. Холоп',
        '$10.8 млн',
        '$13.2 млн за 4 недели',
        '.expected .firstBoxOffice'
    ).render();

    new boxOfficeCard(
        'images/filmBoxOffice/sonic.png',
        '2. Соник в кино',
        '$5.1 млн',
        '$15.1 млн за 4 недели',
        '.expected .firstBoxOffice'
    ).render();

    new boxOfficeCard(
        'images/filmBoxOffice/bad-guys.png',
        '3. Плохие парни навсегда',
        '$4.9 млн',
        '$6.2 млн за 3 недели',
        '.expected .firstBoxOffice'
    ).render();

    new boxOfficeCard(
        'images/filmBoxOffice/forward.png',
        '4. Вперёд',
        '$3.7 млн',
        '$21.4 млн за 4 недели',
        '.expected .firstBoxOffice'
    ).render();

    new boxOfficeCard(
        'images/filmBoxOffice/ice.png',
        '5. Лёд 2',
        '$1.5 млн',
        '$37.1 млн за 4 недели',
        '.expected .firstBoxOffice'
    ).render();

    // второй слайд

    new boxOfficeCard(
        'images/filmBoxOffice/bloodShot.png',
        '1. Бладшот',
        '$13 млн',
        '$15.1 млн за 4 недели',
        '.expected .secondBoxOffice'
    ).render();

    new boxOfficeCard(
        'images/filmBoxOffice/forward.png',
        '2. Вперёд',
        '$6.8 млн',
        '$41.4 млн за 4 недели',
        '.expected .secondBoxOffice'
    ).render();

    new boxOfficeCard(
        'images/filmBoxOffice/invisibleMan.png',
        '3. Человек -невидимка',
        '$6.2 млн',
        '$58.3 млн за 3 недели',
        '.expected .secondBoxOffice'
    ).render();

    new boxOfficeCard(
        'images/filmBoxOffice/sonic.png',
        '4. Соник в кино',
        '$2.9 млн',
        '$15.1 млн за 4 недели',
        '.expected .secondBoxOffice'
    ).render();

    new boxOfficeCard(
        'images/filmBoxOffice/gents.png',
        '5. Джентльмены',
        '$1.8 млн',
        '$78.7 млн за 11 недель',
        '.expected .secondBoxOffice'
    ).render();

    // третий слайд

    new boxOfficeCard(
        'images/filmBoxOffice/joker.png',
        '1. Джокер',
        '$17.2 млн',
        '$91.5 млн за 4 недели',
        '.expected .thirdBoxOffice'
    ).render();

    new boxOfficeCard(
        'images/filmBoxOffice/star-wars.png',
        '2. Звёздные войны...',
        '$13.4 млн',
        '$71.6 млн за 4 недели',
        '.expected .thirdBoxOffice'
    ).render();

    new boxOfficeCard(
        'images/filmBoxOffice/bloodShot.png',
        '3. Бладшот',
        '$12 млн',
        '$18.1 млн за 4 недели',
        '.expected .thirdBoxOffice'
    ).render();

    new boxOfficeCard(
        'images/filmBoxOffice/sonic.png',
        '4. Соник в кино',
        '$10.9 млн',
        '$45.1 млн за 4 недели',
        '.expected .thirdBoxOffice'
    ).render();

    new boxOfficeCard(
        'images/filmBoxOffice/forward.png',
        '5. Вперёд',
        '$8.4 млн',
        '$31.4 млн за 3 недели',
        '.expected .thirdBoxOffice'
    ).render();
});