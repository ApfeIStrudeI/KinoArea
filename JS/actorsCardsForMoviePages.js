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

            if (this.src == undefined) {
                this.src = 'images/actors/universal-actor-icon.png'
            }

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
            src: 'images/actors/escape-from-pretoria/DanielRadcliffe.png',
            RusName: 'Дэниэл Рэдклифф',
            EngName: 'Daniel Radcliffe',
            Role: 'Тим Дженкин'
        }).ActorsSpumerMechanism();
        new ActorsSpumer({
            src: 'images/actors/escape-from-pretoria/DanielWebber.png',
            RusName: 'Даниэль Уэббер',
            EngName: 'Daniel Webber',
            Role: 'Стивен Ли'
        }).ActorsSpumerMechanism();
        new ActorsSpumer({
            src: 'images/actors/escape-from-pretoria/IanHart.png',
            RusName: 'Иэн Харт',
            EngName: 'Ian Hart',
            Role: 'Денис Гольдберг'
        }).ActorsSpumerMechanism();
        new ActorsSpumer({
            src: 'images/actors/escape-from-pretoria/MarkLeonardWinter.png',
            RusName: 'Марк Леонард Винтер',
            EngName: 'Mark Leonard Winter',
            Role: 'Леонард Фонтейн'
        }).ActorsSpumerMechanism();
        new ActorsSpumer({
            src: 'images/actors/escape-from-pretoria/NathanPage.png',
            RusName: 'Нэйтан Пейдж',
            EngName: 'Nathan Page',
            Role: 'Монго'
        }).ActorsSpumerMechanism();
        new ActorsSpumer({
            src: 'images/actors/escape-from-pretoria/RatidzoMambo.png',
            RusName: 'Ратидзо Мамбо',
            EngName: 'Ratidzo Mambo',
            Role: 'Женщина'
        }).ActorsSpumerMechanism();
        new ActorsSpumer({
            src: 'images/actors/escape-from-pretoria/JeanetteCronin.png',
            RusName: 'Жанетт Кронин',
            EngName: 'Jeanette Cronin',
            Role: 'Женщина'
        }).ActorsSpumerMechanism();
        new ActorsSpumer({
            src: 'images/actors/escape-from-pretoria/AdamTuominen.png',
            RusName: 'Адам Туоминен',
            EngName: 'Adam Tuominen',
            Role: 'Джереми Кронин'
        }).ActorsSpumerMechanism();
        new ActorsSpumer({
            src: 'images/actors/escape-from-pretoria/AdamOvadia.png',
            RusName: 'Адам Овадия',
            EngName: 'Adam Ovadia',
            Role: 'Ван Задельхофф'
        }).ActorsSpumerMechanism();
        new ActorsSpumer({
            src: 'images/actors/escape-from-pretoria/StephenHunter.png',
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
    } else if(document.querySelector('.body').classList.contains('gentlemen')) {

        // gentlemen page
        
        new ActorsSpumer({
            src: 'images/actors/gents/matthew-mcconaughey.png',
            RusName: 'Мэттью Макконахи',
            EngName: 'Mattew McConaughey',
            Role: 'Michael Pearson'
        }).ActorsSpumerMechanism();
        new ActorsSpumer({
            src: 'images/actors/gents/charly-hannem.png',
            RusName: 'Чарли Ханнэм',
            EngName: 'Charlie Hunnam',
            Role: 'Raymond Smith'
        }).ActorsSpumerMechanism();
        new ActorsSpumer({
            src: 'images/actors/gents/henry-golding.png',
            RusName: 'Генри Голдинг',
            EngName: 'Henry Golding',
            Role: 'Dry Eye'
        }).ActorsSpumerMechanism();
        new ActorsSpumer({
            src: 'images/actors/gents/hugh-grand.png',
            RusName: 'Хью Грант',
            EngName: 'Hugh Grant',
            Role: 'Fletcher'
        }).ActorsSpumerMechanism();
        new ActorsSpumer({
            src: 'images/actors/gents/mishel-dockery.png',
            RusName: 'Мишель Докери',
            EngName: 'Michelle Dockery',
            Role: 'Rosalind Pearson'
        }).ActorsSpumerMechanism();
        new ActorsSpumer({
            src: 'images/actors/gents/jeremy-strong.png',
            RusName: 'Джереми Стронг',
            EngName: 'Jeremy Strong',
            Role: 'Matthew'
        }).ActorsSpumerMechanism();
        new ActorsSpumer({
            src: 'images/actors/gents/eddy-marsan.png',
            RusName: 'Эдди Марсан',
            EngName: 'Eddie Marsan',
            Role: 'Big Dave'
        }).ActorsSpumerMechanism();
        new ActorsSpumer({
            src: 'images/actors/gents/jeison-vong.png',
            RusName: 'Джейсон Вонг',
            EngName: 'Jason Wong',
            Role: 'Phuc'
        }).ActorsSpumerMechanism();
        new ActorsSpumer({
            src: 'images/actors/gents/kolin-farrell.png',
            RusName: 'Колин Фаррелл',
            EngName: 'Colin Farrell',
            Role: 'Coach'
        }).ActorsSpumerMechanism();
        new ActorsSpumer({
            src: 'images/actors/gents/lain-reny.png',
            RusName: 'Лайн Рени',
            EngName: 'Lyne Renée',
            Role: 'Jackie'
        }).ActorsSpumerMechanism();
    } else if(document.querySelector('.body').classList.contains('ford-vs-ferrari')) {

        // ford-vs-ferrari page
        
        new ActorsSpumer({
            src: 'images/actors/ford-vs-ferrari/caitríona-balfe.png',
            RusName: 'Катрина Балф',
            EngName: 'Caitríona Balfe',
            Role: 'Молли Майлз'
        }).ActorsSpumerMechanism();
        new ActorsSpumer({
            src: 'images/actors/ford-vs-ferrari/christian-bale.png',
            RusName: 'Кристиан Бейл',
            EngName: 'Christian Bale',
            Role: 'Кен Майлз'
        }).ActorsSpumerMechanism();
        new ActorsSpumer({
            src: 'images/actors/ford-vs-ferrari/matt-damon.png',
            RusName: 'Мэтт Дэймон',
            EngName: 'Matt Damon',
            Role: 'Кэрролл Шелби'
        }).ActorsSpumerMechanism();
        new ActorsSpumer({
            src: 'images/actors/ford-vs-ferrari/tracy-letts.png',
            RusName: 'Трэйси Леттс',
            EngName: 'Tracy Letts',
            Role: 'Генри Форд II'
        }).ActorsSpumerMechanism();
        new ActorsSpumer({
            src: 'images/actors/ford-vs-ferrari/jon-bernthal.png',
            RusName: 'Джон Бернтал',
            EngName: 'Jon Bernthal',
            Role: 'Ли Якокка'
        }).ActorsSpumerMechanism();
        new ActorsSpumer({
            src: 'images/actors/ford-vs-ferrari/noah-jupe.png',
            RusName: 'Ноа Джуп',
            EngName: 'Noah Jupe',
            Role: 'Питер Майлз'
        }).ActorsSpumerMechanism();
        new ActorsSpumer({
            src: 'images/actors/ford-vs-ferrari/josh-lucas.png',
            RusName: 'Джош Лукас',
            EngName: 'Josh Lucas',
            Role: 'Лео Биби'
        }).ActorsSpumerMechanism();
        new ActorsSpumer({
            src: 'images/actors/ford-vs-ferrari/remo-girone.png',
            RusName: 'Ремо Джироне',
            EngName: 'Remo Girone',
            Role: 'Энцо Феррари'
        }).ActorsSpumerMechanism();
        new ActorsSpumer({
            src: 'images/actors/ford-vs-ferrari/ray-mckinnon.png',
            RusName: 'Рэй Маккиннон',
            EngName: 'Ray McKinnon',
            Role: 'Фил Ремингтон'
        }).ActorsSpumerMechanism();
        new ActorsSpumer({
            src: 'images/actors/ford-vs-ferrari/jj-fild.png',
            RusName: 'Джей Джей Филд',
            EngName: 'JJ Feild',
            Role: 'Рой Ланн'
        }).ActorsSpumerMechanism();
    }  else if(document.querySelector('.body').classList.contains('3022')) {

        // 3022 page
        
        new ActorsSpumer({
            src: 'images/actors/3022/omar-epps.png',
            RusName: 'Омар Эппс',
            EngName: 'Omar Epps',
            Role: 'John Laine'
        }).ActorsSpumerMechanism();
        new ActorsSpumer({
            src: 'images/actors/3022/kate-walsh.png',
            RusName: 'Кейт Уолш',
            EngName: 'Kate Walsh',
            Role: 'Jackie Miller'
        }).ActorsSpumerMechanism();
        new ActorsSpumer({
            src: 'images/actors/3022/angus-macfadyen.png',
            RusName: 'Энгус Макфадьен',
            EngName: 'Angus Macfadyen',
            Role: 'Richard Valin'
        }).ActorsSpumerMechanism();
        new ActorsSpumer({
            RusName: 'Джорджа Фокс',
            EngName: 'Jorja Fox',
            Role: 'Diane Ures'
        }).ActorsSpumerMechanism();
        new ActorsSpumer({
            src: 'images/actors/3022/miranda-cosgrove.png',
            RusName: 'Миранда Косгров',
            EngName: 'Miranda Cosgrove',
            Role: 'Lisa Brown'
        }).ActorsSpumerMechanism();
        new ActorsSpumer({
            src: 'images/actors/3022/enver-gjokaj.png',
            RusName: 'Энвер Гьокай',
            EngName: 'Enver Gjokaj',
            Role: 'Vincent Bernard'
        }).ActorsSpumerMechanism();
        new ActorsSpumer({
            src: 'images/actors/3022/haaz-sleiman.png',
            RusName: 'Хааз Слейман',
            EngName: 'Haaz Sleiman',
            Role: 'Thomas Dahan'
        }).ActorsSpumerMechanism();
        new ActorsSpumer({
            src: 'images/actors/3022/sara-tomko.png',
            RusName: 'Сара Томко',
            EngName: 'Sara Tomko',
            Role: 'Pangea'
        }).ActorsSpumerMechanism();
    } else if(document.querySelector('.body').classList.contains('inglouriousbasterds')) {

        // inglouriousbasterds page
        
        new ActorsSpumer({
            src: 'images/actors/ing-bast/bred-pitt.png',
            RusName: 'Брэд Питт',
            EngName: 'Brad Pitt',
            Role: 'Альдо Рейн'
        }).ActorsSpumerMechanism();
        new ActorsSpumer({
            src: 'images/actors/ing-bast/christoph-waltz.png',
            RusName: 'Кристоф Вальц',
            EngName: 'Christoph Waltz',
            Role: 'Ганс Ланда'
        }).ActorsSpumerMechanism();
        new ActorsSpumer({
            src: 'images/actors/ing-bast/mellany-loran.png',
            RusName: 'Мелани Лоран',
            EngName: 'Mélanie Laurent',
            Role: 'Шошанна Дрейфюс'
        }).ActorsSpumerMechanism();
        new ActorsSpumer({
            src: 'images/actors/ing-bast/daniel-brule.png',
            RusName: 'Даниэль Брюль',
            EngName: 'Daniel Brühl',
            Role: 'Фредерик Цоллер'
        }).ActorsSpumerMechanism();
        new ActorsSpumer({
            src: 'images/actors/ing-bast/diana-kruger.png',
            RusName: 'Диайан Крюгер',
            EngName: 'Diane Kruger',
            Role: 'Бриджит фон Хаммерсмарк'
        }).ActorsSpumerMechanism();
        new ActorsSpumer({
            src: 'images/actors/ing-bast/maikl-fassbender.png',
            RusName: 'Майкл Фассбендер',
            EngName: 'Michael Fassbender',
            Role: 'Арчи Хикокс'
        }).ActorsSpumerMechanism();
        new ActorsSpumer({
            src: 'images/actors/ing-bast/august-diehl.png',
            RusName: 'Август Диль',
            EngName: 'August Diehl',
            Role: 'Дитер Хельстром'
        }).ActorsSpumerMechanism();
        new ActorsSpumer({
            src: 'images/actors/ing-bast/eli-roth.png',
            RusName: 'Элай Рот',
            EngName: 'Eli Roth',
            Role: 'Донни Доновиц'
        }).ActorsSpumerMechanism();
        new ActorsSpumer({
            src: 'images/actors/ing-bast/till-shwaiger.png',
            RusName: 'Тиль Швайгер',
            EngName: 'Til Schweiger',
            Role: 'Хуго Штиглиц'
        }).ActorsSpumerMechanism();
        new ActorsSpumer({
            src: 'images/actors/ing-bast/omar-doom.png',
            RusName: 'Омар Дум',
            EngName: 'Omar Doom',
            Role: 'Омар Ульмар'
        }).ActorsSpumerMechanism();
    }
});