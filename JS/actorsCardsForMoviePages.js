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
    }
});