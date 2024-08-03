# KinoArea

## Сайт онлайн-кинотеатра

Данный веб-сайт был разработан в качестве курсового проекта. Я поставил себе следующие основные задачи при написании кода:

- Отточить навыки работы с контекстом вызова в JavaScript 
- Научиться динамически формировать вёрску с помощью JavaScript и изменять её по средствам функций-конструкторов
- Отточить навыки работы с ES6 классами и другими штуками в JavaScript, необходимыми мне для дальнейшего освоения библиотеки React
- Реализовать на нативном JavaScript (для закрепления навыков написания кода на таковом) максимально разнообразное множество интерактивных элементов (слайдеры, табы, поиск, фильтры, видеоплеер т.п.)

## ! Особенности версии для GitHub !

Важно помнить, что GitHub допускает **только статическое содержимое**! Поэтому в версии кода, представленной в данном репозитории, **отсутствует** как **БД**, так и код для взаимодействия с таковой. **Все данные о контенте записаны напрямую в js-файлы** =(
####
Cуществует также версия KinoArea, код которой написан с использованием [ES6 modules](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules) и собран с помощью [Webpack](https://webpack.js.org/). В данной версии JavaScript загружает контент на страницу по средствам [fetchAPI](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API), получая его в формате json.
####
#### Пример конструктора достижений:
~~~JavaScript
import constructComponent from "../services/request";

function achievements() {

    class AchievementSpumer {
        constructor(data) {
            this.src = data.src;
            this.achievement = data.achievement;
            this.nomination = data.nomination;
            this.year = data.year;
            this.parent = document.querySelector('.achievement .achievement__contant');
        }
        render() {
            const element = document.createElement('div');
            element.classList.add('achievement__item');
            if (this.src == undefined) {
                this.src = 'icons/avards/none-award.png';
            }
            element.innerHTML = `
                <img src=${this.src} alt="achievement-image">
                <div class="achievementBOX">
                    <div class="position__nameRus">
                        ${this.achievement}
                    </div>
                    <div class="position__position">
                        ${this.nomination}
                    </div>
                    <div class="position__nameEng">
                        ${this.year}
                    </div>
                </div>
            `;
            this.parent.append(element);
        }
    };
    constructComponent('http://******/achievementsData', AchievementSpumer);
};

export default achievements;
~~~
#### Функция *constructComponent* для получения данных:
~~~JavaScript
const constructComponent = function(url, constructorName) {

    const pageSelector = document.querySelector('.body').classList[2];

    if(document.querySelector('.body').classList.contains(${pageSelector})) {

        const getData = async (url) => {
            const res = await fetch(url);
            if(!res.ok) {
                alert('не удалось загрузить контент');
            }
            return await res.json();
        };

        getData(url).then(data => {
            for (let film in data) {
                if (film === ${pageSelector}) {
                    data[film].forEach((dataObj) => {
                        new constructorName (dataObj).render();
                    });
                }
            }
        });
    }
}

export default constructComponent;
~~~
