window.addEventListener('DOMContentLoaded', () => {
    
    // Рецензии

    class ReviewCardsConstructor {
        constructor(data) {
            this.avatar = data.avatar;
            this.nickname = data.nickname;
            this.reviewtitle = data.reviewtitle;
            this.date = data.date;
            this.time = data.time;
            this.reviewclass = data.reviewclass;
            this.reviewtext = data.reviewtext;
            this.parent = data.parentSelector;
        }
        ReviewCards() {
            const element = document.createElement('div');
            if (this.avatar === undefined) {
                this.avatar = "images/users-avatars/universal-avatar.svg"
            }
            element.innerHTML = `
                <div class="ReviewElement ${this.reviewclass}">
                    <div class="ReviewElement__header">
                        <div class="UserData">
                            <img src=${this.avatar}>
                            <div class="NickName">${this.nickname}</div>
                        </div>
                        <div class="UserLinks">
                            <a href="#movieReviewID">Рецензии</a>
                            <a href="#movieReviewID">Оценки</a>
                            <a href="#movieReviewID">Друзья</a>
                            <a href="#movieReviewID">Фильмы</a>
                            <a href="#movieReviewID">Звёзды</a>
                        </div>
                        <div class="ReviewElement__title">
                            <h4 class="ThisReviewTitle">
                                ${this.reviewtitle}
                            </h4>
                            <div class="ThisReviewDate">
                                <i class="date">${this.date}</i>
                                <span>ㅤ|ㅤ</span>
                                <i class="time">${this.time}</i>
                            </div>
                        </div>
                    </div>
                    <div class="ThisReviewText">
                        ${this.reviewtext}
                    </div>
                    <div class="ThisReviewmarks">
                        <a href="#up" data-modal class="FastLink comment">
                            <i class="fa-regular fa-comment"></i>
                            <span>Комментировать</span>
                        </a>
                        <div class="markBorderWrapper">
                            <div class="markBorder">
                                <i class="fa-solid fa-thumbs-up"></i>
                            </div>
                            <div class="markBorder">
                                <i class="fa-solid fa-thumbs-down fa-flip-horizontal"></i>
                            </div>
                        </div>
                    </div>
                </div>
            `;
            this.parent.append(element);
        }
    };

    if (document.querySelector('.body').classList.contains('moviePageBody')){
        if (document.querySelector('.body').classList.contains('escape-from-pretoria')) {

            new ReviewCardsConstructor({
                avatar: "images/users-avatars/av1.svg",
                nickname: 'Lerata',
                reviewtitle: 'На пути к цели',
                date: '14 апреля 2020',
                time: '09 : 59',
                reviewclass: 'goodReviews',
                reviewtext: '<p class="paragraph"> Честно скажу, я раньше не особо задумывалась о таком понятии, как апартеид. Он казался чем-то старым, давно ушедшим в небытие и не заслуживающим внимания современного человека, однако хочу признаться, что просмотр фильма «Побег из Претории» заставил меня пересмотреть многие вещи. Сюжет основан на вполне реальных событиях, описанных в книге одного из участников тех жутких событий, и я считаю, что зрителям будет не лишним ознакомиться с тем, что творилось в ЮАР посредством настоящей приключенческой драмы, в которой правды куда больше, чем вымысла. </p><p class="paragraph">Развитие событий происходит в 1979 году, когда апартеид в ЮАР находится на пике своего могущества. Но с подобной политикой дискриминации по расовому признаку согласны совсем не все. Даже многие белые люди не могут воспринимать адекватно политику властей. Среди таких революционеров оказываются Тим Дженкин и Стивен Ли. Молодые люди не были готовы к открытому оружейному противостоянию и считали, что могут принести гораздо больше пользы раздавая листовки.</p><p class="paragraph"> Но власть не дремлет, полиция пристально следит за нарушителями спокойствия вне зависимости от цвета кожи. Даже если ты белый — это ничего не значит. И вот нашим бравым революционерам приходится отправиться в Преторию, страшную тюрьму, откуда можно выйти только при большом везении или помиловании главы государства. Понятное дело, что Дженкин и Ли на подобное рассчитывать не могут и им приходится обдумать план побега. </p><p class="paragraph">Что мне в этом фильме понравилось, так это то, что авторы не слишком сильно нагнетают драму. Они, конечно, показывают все несправедливость апартеида и как много без он принес темнокожему населению, но это скорее фильм о том, как переломить суть событий, изменить себя и окружающих, добиться правды и воли даже тогда, когда на тебя наставлено дуло пистолета.</p><p class="paragraph">Дэниэл Рэдклифф открылся для меня с неожиданно позитивной стороны. В последние пару лет он играет в каких-то очень странных проектах. Например, «Пушки Акимбо», «Человек- швейцарский нож». На каждый такой проект находятся свои любители, но, например, мне интересней видеть Рэдклиффа в образе нормального, простого человека. А когда он еще и бежит из тюрьмы, словно какой-нибудь Вентворт Миллер, тогда это просто шикарно. Во многом мое внимание к фильмы приковал именно Дэниэл, который совсем не подвел и очень даже порадовал.</p><p class="paragraph">8 из 10</p>',
                parentSelector: document.querySelector('.movieReview').querySelector('.ReviewContent')
            }).ReviewCards();

            new ReviewCardsConstructor({
                avatar: "images/users-avatars/av2.svg",
                nickname: 'Качнувшийся',
                reviewtitle: '«Зэка Васильев и Петров-зэка»',
                date: '8 марта 2020',
                time: '14:58',
                reviewclass: 'neutralReviews',
                reviewtext: '<p class="paragraph">- Ипполит Георгиевич, о чем вы думаете?</p> <p class="paragraph">- Я не собираюсь перед вами отчитываться.</p><p class="paragraph">- У вас на лице написано, что обо мне.</p><p class="paragraph">- Да, о вас, искатель приключений. Для вас нет ничего святого. Такие, как вы, всюду суют свой нос. Верят не в разум, а в порыв. Вы неуправляемы! Для вас главное не разум, а чувство, импульс. Вы угроза для общества.</p><p class="paragraph">- Весьма лестный отзыв.</p><p class="paragraph">- А вы о чем думаете?</p><p class="paragraph">- О горячем чае.</p><p class="paragraph">- Ну, о горячем чае я тоже думаю. Но все-таки, откровенность за откровенность…</p><p class="paragraph">«Ирония судьбы или с лёгким паром», 1975, реж. Э. Рязанов</p><p class="paragraph">Декабрьский диалог персонажей А. Мягкова и Ю. Яковлева в новогоднюю ночь, у крыльца ленинградской высотки, известен каждому. Два совершенно разных по темпераменту человека и думают о разном. Хотя что им остаётся? Зима, мороз, темень. Оба выставлены за дверь. Страсти отчаяния кипят в обоих. Москвич на алкоголизм пеняет себе самому, без пяти минут супруг, ревностью обуреваем. Как оно там дальше сложится, ещё не известно никому. И думы, думы, думы в мимике лиц в молчании.</p><p class="paragraph">Но да ладно, с ними, отечественный классик более-менее ситуацию «разрулил». Давно «разрулил». Меж себя они всё решили. И Галя «при своих». И Надя не в накладе. Зачёт.</p><p class="paragraph">А о чём думают, волей обстоятельств, тюрьмой «награждённые»? В бетонном каземате оказавшиеся. Разве диалог советской мелодрамы не может быть здесь озвучен? На мой взгляд, он весьма обтекаемый и универсальный. Вложи в любые уста, перелицуй на иную ситуацию, актуальности не потеряет. Верно? Упрёк фехтующего, блок в отражении противником. Легко и просто нападение провалено. Продолжим? Нападайте-нападайте.</p>',
                parentSelector: document.querySelector('.movieReview').querySelector('.ReviewContent')
            }).ReviewCards();

            new ReviewCardsConstructor({
                nickname: 'mariinna2018',
                reviewtitle: 'Гарри Поттер против апартеида.',
                date: '3 апреля 2020',
                time: '22:00',
                reviewclass: 'badReviews',
                reviewtext: '<p class="paragraph">Действие фильма происходит в ЮАР, в семидесятые годы двадцатого века, в годы безраздельного господства белых, названного апартеидом. Начало фильма наглядно демонстрирует нам прелести системы: белые полицейские прививают чернокожим любовь и уважение с помощью дубинок и слезоточивого газа. Апартеид проявлялся не только в подавлении любого сопротивления, но и в запрете осуществлять гражданские права для чернокожих. Чернокожие составляли большинство населения, и при этом, они не могли получать образование, медицинское обслуживание, участвовать в выборах, и даже выходить на улицу в тёмное время суток, видимо для того, чтобы не отсвечивали в темноте.</p><p class="paragraph">Апартеид был осуждён всем прогрессивным человечеством, что не мешало властям неуклонно осуществлять его и дальше. Южноафриканские борцы за свободу создали АНК, по образцу индийского ИНК, но использовали отнюдь не мирные формы протеста. Один из лидеров АНК, некий Мандела, был осуждён за терроризм, а впоследствии был награждён премией мира за те же самые деяния. Чудны дела твои…</p><p class="paragraph">Из этого фильма я с удивлением узнала, что борьбу с апартеидом вели не только чернокожие. Главные герои фильма — белые члены АНК, распространившие листовки с призывом уничтожить режим апартеида. Южноафриканское законодательство было гуманным, и за столь тяжкое преступление, мерзавцы отделались всего лишь 12 и 8 годами соответственно. Отбывать наказание приятелям предстояло в самой комфортной тюрьме ЮАР, Претории. Но, революционер ныне пошёл жидкий, и не хочет сидеть в тюрьме (даже странно, почему это?), и товарищи решаются на побег. Идея прекрасная, вопрос только в том — как это сделать, учитывая, что Претория была одной из самых охраняемых тюрем?</p>',
                parentSelector: document.querySelector('.movieReview').querySelector('.ReviewContent')
            }).ReviewCards();

        }
    }
});