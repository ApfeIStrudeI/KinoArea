window.addEventListener('DOMContentLoaded', () => {
    
    // Последние новости (табы)
    class TabItem {
        constructor(src, data, title, parentSelector, ...classes) {
            this.src = src;
            this.data = data;
            this.title = title;
            this.classes = classes;
            this.parent = document.querySelector(parentSelector);
        }
        convert() {
            const element = document.createElement('div');
            if (this.classes.length === 0) {
                this.element = 'tabItem';
                element.classList.add(this.element);
            } else {
                this.classes.forEach(className => element.classList.add(className));
            }
            
            element.innerHTML = `
                <div class="tabItem__pseudoButton">
                    <div>
                        <b class="read">Читать</b>
                        <b class="active">Текущая</b>
                            новость
                    </div>
                </div>
                <img src=${this.src}>
                <div class="box">
                    <div class="box__data">
                        ${this.data}
                    </div>
                    <div class="box__descr">
                        ${this.title} 
                    </div>
                </div>
            `;
            this.parent.append(element);
        }
    }

    new TabItem(
        'images/tabs/s-tab.png',
        '15 Апр 2020',
        'Как изменили Соника с последнего анонса',
        '.lastNews .tabcontainer'
    ).convert();

    new TabItem(
        'images/tabs/007-tab.png',
        '15 Апр 2020',
        'Не время умирать. Перенос релиза фильма',
        '.lastNews .tabcontainer'
    ).convert();

    new TabItem(
        'images/tabs/third-tab.png',
        '15 Апр 2020',
        'От этой новости вы будете шокированы до завтра',
        '.lastNews .tabcontainer'
    ).convert();

    new TabItem(
        'images/tabs/d-tab.png',
        '13 Апр 2020',
        'Вот это, конечно, да!',
        '.lastNews .tabcontainer'
    ).convert();

    // Последние новости (контент табов)
    class TabActive extends TabItem {
        constructor(src, data, view, comments, title, descr, parentSelector, ...classes) {
            super(src, data, title, parentSelector, ...classes);
            this.view = view;
            this.comments = comments;
            this.descr = descr;
        }
        render() {
            const element = document.createElement('div');
            if (this.classes.length === 0) {
                this.element = 'tabcontent';
                element.classList.add(this.element);
            } else {
                this.classes.forEach(className => element.classList.add(className));
            }
            
            element.innerHTML = `
                <img class="tabActiveImg" src=${this.src}>
                <div class="box">
                    <div class="box__data">
                        <span>${this.data}</span>
                        <div class="i"><i class="fa-regular fa-eye"></i></div>
                        <span>${this.view}</span>
                        <div class="i"><i class="fa-regular fa-comment"></i></div>
                        <span>${this.comments}</span>
                    </div>
                    <div class="box__descr">
                        <div class="title">
                            ${this.title} 
                        </div>
                        <div class="descr">
                            ${this.descr}
                        </div>
                    </div>
                </div>
            `;
            this.parent.append(element);
        }
    }

    new TabActive(
        'images/tabs/tab-active1.png',
        '15 Апр 2020',
        '152',
        '12',
        'Как изменили Соника с последнего анонса',
        'В мае этого года вышел первый трейлер фильма «Соник в кино». И зрителей слегка испугал внешний вид главного персонажа. А кого-то и вовсе поверг в ужас. Потому что далее поднялась бурная волна негодования и критики в адрес героя киноленты.',
        '.lastNews .lastNewsTabs'
    ).render();

    new TabActive(
        'images/tabs/tab-active2.png',
        '15 Апр 2020',
        '242',
        '14',
        'Не время умирать. Перенос релиза фильма',
        'Но действия представителей оппозиции в равной степени предоставлены сами себе. В рамках спецификации современных стандартов, стремящиеся вытеснить традиционное производство, нанотехнологии указаны как претенденты на роль ключевых факторов.',
        '.lastNews .lastNewsTabs'
    ).render();

    new TabActive(
        'images/tabs/tab-active3.png',
        '13 Апр 2020',
        '98',
        '5',
        'От этой новости вы будете шокированы до завтра',
        'Создатель лучших игр в виртуальной реальности уверен, что контролирует всё в своей жизни. Но случайная встреча с молодой активисткой открывает ему глаза на то, что мир намного шире и сложнее его представлений.',
        '.lastNews .lastNewsTabs'
    ).render();

    new TabActive(
        'images/tabs/tab-active4.png',
        '13 Апр 2020',
        '54',
        '6',
        'Вот это, конечно, да!',
        'Наследник знаменитого дома Атрейдесов Пол отправляется вместе с семьей на одну из самых опасных планет во Вселенной — Арракис. Здесь нет ничего, кроме песка, палящего солнца, гигантских чудовищ и основной причины межгалактических конфликтов — невероятно ценного ресурса, который называется меланж. В результате захвата власти Пол вынужден бежать и скрываться, и это становится началом его эпического путешествия. Враждебный мир Арракиса приготовил для него множество тяжелых испытаний, но только тот, кто готов взглянуть в глаза своему страху, достоин стать избранным.',
        '.lastNews .lastNewsTabs'
    ).render();
});