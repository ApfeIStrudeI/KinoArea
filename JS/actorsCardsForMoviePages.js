window.addEventListener('DOMContentLoaded', () => {
    class ActorsSpumer {
        constructor(data) {
            this.src = data.src;
            this.RusName = data.RusName;
            this.EngName = data.EngName;
            this.Role = data.Role;
            this.parent = document.querySelector('.actorsWindow .actors-area');
        }
        ActorsSpumerMechanism() {
            const element = document.createElement('div');
            element.classList.add('actor-item');

            element.innerHTML = `
                <img src=${this.src}>
                <div>
                    <div class="position__nameRus">
                        ${this.RusName}
                    </div>
                    <div class="position__nameEng">
                        ${this.EngName}
                    </div>
                    <div class="position__position">
                        ${this.Role}
                    </div>
                </div>
            `;
            this.parent.append(element);
        }
    };

    if(document.querySelector('.body').classList.contains('escape-from-pretoria')) {

        // escape-from-pretoria page

        new ActorsSpumer({
            src: 'images/actors/DanielRadcliffe.png',
            RusName: 'Дэниэл Рэдклифф',
            EngName: 'Daniel Radcliffe',
            Role: 'Тим Дженкин'
        }).ActorsSpumerMechanism();
        new ActorsSpumer({
            src: 'images/actors/DanielWebber.png',
            RusName: 'Даниэль Уэббер',
            EngName: 'Daniel Webber',
            Role: 'Стивен Ли'
        }).ActorsSpumerMechanism();
        new ActorsSpumer({
            src: 'images/actors/IanHart.png',
            RusName: 'Иэн Харт',
            EngName: 'Ian Hart',
            Role: 'Денис Гольдберг'
        }).ActorsSpumerMechanism();
        new ActorsSpumer({
            src: 'images/actors/MarkLeonardWinter.png',
            RusName: 'Марк Леонард Винтер',
            EngName: 'Mark Leonard Winter',
            Role: 'Леонард Фонтейн'
        }).ActorsSpumerMechanism();
        new ActorsSpumer({
            src: 'images/actors/NathanPage.png',
            RusName: 'Нэйтан Пейдж',
            EngName: 'Nathan Page',
            Role: 'Монго'
        }).ActorsSpumerMechanism();
        new ActorsSpumer({
            src: 'images/actors/RatidzoMambo.png',
            RusName: 'Ратидзо Мамбо',
            EngName: 'Ratidzo Mambo',
            Role: 'Женщина'
        }).ActorsSpumerMechanism();
        new ActorsSpumer({
            src: 'images/actors/JeanetteCronin.png',
            RusName: 'Жанетт Кронин',
            EngName: 'Jeanette Cronin',
            Role: 'Женщина'
        }).ActorsSpumerMechanism();
        new ActorsSpumer({
            src: 'images/actors/AdamTuominen.png',
            RusName: 'Адам Туоминен',
            EngName: 'Adam Tuominen',
            Role: 'Джереми Кронин'
        }).ActorsSpumerMechanism();
        new ActorsSpumer({
            src: 'images/actors/AdamOvadia.png',
            RusName: 'Адам Овадия',
            EngName: 'Adam Ovadia',
            Role: 'Ван Задельхофф'
        }).ActorsSpumerMechanism();
        new ActorsSpumer({
            src: 'images/actors/StephenHunter.png',
            RusName: 'Стивен Хантер',
            EngName: 'Stephen Hunter',
            Role: 'Мужчина'
        }).ActorsSpumerMechanism();
    } else if(document.querySelector('.body').classList.contains('joker')) {

        // joker page

        new ActorsSpumer({
            src: 'images/actors/joker/hoakin-fenicks.png',
            RusName: 'Хоакин Феникс',
            EngName: 'Joaquin Phoenix',
            Role: 'Артур Флек'
        }).ActorsSpumerMechanism();
        new ActorsSpumer({
            src: 'images/actors/joker/robert-de-niro.png',
            RusName: 'Роберт Де Ниро',
            EngName: 'Robert De Niro',
            Role: 'Мюррей Франклин'
        }).ActorsSpumerMechanism();
        new ActorsSpumer({
            src: 'images/actors/joker/zazi-bitz.png',
            RusName: 'Зази Битц',
            EngName: 'Zazi Bitz',
            Role: 'Софи Дюмон'
        }).ActorsSpumerMechanism();
        new ActorsSpumer({
            src: 'images/actors/joker/rensis-konroi.png',
            RusName: 'Фрэнсис Конрой',
            EngName: 'Frensis Konroi',
            Role: 'Пенни Флек (мать Артура)'
        }).ActorsSpumerMechanism();
        new ActorsSpumer({
            src: 'images/actors/joker/brett-kallen.png',
            RusName: 'Бретт Каллен',
            EngName: 'Brett Kallen',
            Role: 'Томас Уэйн'
        }).ActorsSpumerMechanism();
        new ActorsSpumer({
            src: 'images/actors/joker/shei-uigem.png',
            RusName: 'Шей Уигэм',
            EngName: 'Shei Uigem',
            Role: 'детектив Берк'
        }).ActorsSpumerMechanism();
        new ActorsSpumer({
            src: 'images/actors/joker/bill-kemp.png',
            RusName: 'Билл Кэмп',
            EngName: 'Bill Kemp',
            Role: 'детектив Гаррити'
        }).ActorsSpumerMechanism();
        new ActorsSpumer({
            src: 'images/actors/joker/glenn-flesher.png',
            RusName: 'Гленн Флешлер',
            EngName: 'Glenn Flesher',
            Role: 'Рэндалл'
        }).ActorsSpumerMechanism();
        new ActorsSpumer({
            src: 'images/actors/joker/josh-peis.png',
            RusName: 'Джош Пэйс',
            EngName: 'Josh Peis',
            Role: 'Хойт Вон'
        }).ActorsSpumerMechanism();
        new ActorsSpumer({
            src: 'images/actors/joker/li-gill.png',
            RusName: 'Ли Гилл',
            EngName: 'Li Gill',
            Role: 'Гари'
        }).ActorsSpumerMechanism();
    } else if(document.querySelector('.body').classList.contains('star-wars')) {

        // star-wars page
        
        new ActorsSpumer({
            src: 'images/actors/star-wars/adam-driver.png',
            RusName: 'Адам Драйвер',
            EngName: 'Adam Driver',
            Role: 'Кайло Рен'
        }).ActorsSpumerMechanism();
        new ActorsSpumer({
            src: 'images/actors/star-wars/daisy-ridly.png',
            RusName: 'Дейзи Ридли',
            EngName: 'Daisy Ridley',
            Role: 'Рей'
        }).ActorsSpumerMechanism();
        new ActorsSpumer({
            src: 'images/actors/star-wars/carrie-fisher.png',
            RusName: 'Кэрри Фишер',
            EngName: 'Carrie Fisher',
            Role: 'Лея Органа'
        }).ActorsSpumerMechanism();
        new ActorsSpumer({
            src: 'images/actors/star-wars/donal-gilson.png',
            RusName: 'Донал Глисон',
            EngName: 'Domhnall Gleeson',
            Role: 'генерал Армитаж Хакс'
        }).ActorsSpumerMechanism();
        new ActorsSpumer({
            src: 'images/actors/star-wars/mark-hamill.png',
            RusName: 'Марк Хэмилл',
            EngName: 'Mark Hamill',
            Role: 'Люк Скайуокер'
        }).ActorsSpumerMechanism();
        new ActorsSpumer({
            src: 'images/actors/star-wars/john-boega.png',
            RusName: 'Джон Бойега',
            EngName: 'John Boyega',
            Role: 'Финн'
        }).ActorsSpumerMechanism();
        new ActorsSpumer({
            src: 'images/actors/star-wars/entony-daniels.png',
            RusName: 'Энтони Дэниелс',
            EngName: 'Anthony Daniels',
            Role: 'C-3PO'
        }).ActorsSpumerMechanism();
        new ActorsSpumer({
            src: 'images/actors/star-wars/naomy-aki.png',
            RusName: 'Наоми Аки',
            EngName: 'Naomi Ackie',
            Role: 'Джанна'
        }).ActorsSpumerMechanism();
        new ActorsSpumer({
            src: 'images/actors/star-wars/oscar-aizek.png',
            RusName: 'Оскар Айзек',
            EngName: 'Oscar Isaac',
            Role: 'По Дэмерон'
        }).ActorsSpumerMechanism();
        new ActorsSpumer({
            src: 'images/actors/star-wars/richard-grand.png',
            RusName: 'Ричард Э. Грант',
            EngName: 'Richard E. Grant',
            Role: 'генерал Энрик Прайд'
        }).ActorsSpumerMechanism();
    }
});