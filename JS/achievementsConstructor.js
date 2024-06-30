window.addEventListener('DOMContentLoaded', () => {
    class AchievementSpumer {
        constructor(data) {
            this.src = data.src;
            this.achievement = data.achievement;
            this.nomination = data.nomination;
            this.year = data.year;
            this.parent = document.querySelector('.achievement .achievement__contant');
        }
        AchievementSpumerMechanism() {
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

    if(document.querySelector('.body').classList.contains('escape-from-pretoria')) {

        // escape-from-pretoria page
        new AchievementSpumer({
            src: 'icons/avards/awardOscar.png',
            achievement: 'Оскар',
            nomination: 'Лучшая мужская роль',
            year: '2020'
        }).AchievementSpumerMechanism();

        new AchievementSpumer({
            src: 'icons/avards/awardGoldenGlobe.png',
            achievement: 'Золотой глобус',
            nomination: 'Лучшая мужская роль',
            year: '2020'
        }).AchievementSpumerMechanism();

        new AchievementSpumer({
            src: 'icons/avards/achievement243.png',
            achievement: 'Премия Гильдии актеров',
            nomination: 'Лучший актерский состав',
            year: '2020'
        }).AchievementSpumerMechanism();

        new AchievementSpumer({
            src: 'icons/avards/brit-academ.png',
            achievement: 'Британская академия',
            nomination: 'Лучшая мужская роль',
            year: '2020'
        }).AchievementSpumerMechanism();
        
    } if(document.querySelector('.body').classList.contains('joker')) {

        // joker page
        new AchievementSpumer({
            src: 'icons/avards/awardOscar.png',
            achievement: 'Оскар',
            nomination: 'Лучшая мужская роль',
            year: '2020'
        }).AchievementSpumerMechanism();

        new AchievementSpumer({
            src: 'icons/avards/awardGoldenGlobe.png',
            achievement: 'Золотой глобус',
            nomination: 'Лучшая мужская роль',
            year: '2020'
        }).AchievementSpumerMechanism();

        new AchievementSpumer({
            src: 'icons/avards/awardGoldenGlobe.png',
            achievement: 'Золотой глобус',
            nomination: 'Лучший саундтрек',
            year: '2020'
        }).AchievementSpumerMechanism();

        new AchievementSpumer({
            src: 'icons/avards/brit-academ.png',
            achievement: 'Британская академия',
            nomination: 'Лучший кастинг',
            year: '2020'
        }).AchievementSpumerMechanism();
        
    } if(document.querySelector('.body').classList.contains('star-wars')) {

        // star-wars page
        new AchievementSpumer({
            src: 'icons/avards/awardGoldenGlobe.png',
            achievement: 'Золотой глобус',
            nomination: 'Лучшие спецэффекты',
            year: '2020'
        }).AchievementSpumerMechanism();

        new AchievementSpumer({
            src: 'icons/avards/awardGoldenGlobe.png',
            achievement: 'Золотой глобус',
            nomination: 'Лучшая музыка',
            year: '2020'
        }).AchievementSpumerMechanism();

        new AchievementSpumer({
            src: 'icons/avards/brit-academ.png',
            achievement: 'Британская академия',
            nomination: 'Лучший звук',
            year: '2020'
        }).AchievementSpumerMechanism();

        new AchievementSpumer({
            src: 'icons/avards/brit-academ.png',
            achievement: 'Британская академия',
            nomination: 'Лучшие визуальные эффекты',
            year: '2020'
        }).AchievementSpumerMechanism();
        
    } if(document.querySelector('.body').classList.contains('gentlemen')) {

        // gentlemen page
        new AchievementSpumer({
            src: 'icons/avards/saturn-nomination.png',
            achievement: 'номинация на премию Сатурн',
            nomination: 'Лучший приключенческий фильм или боевик',
            year: '2021'
        }).AchievementSpumerMechanism();

        new AchievementSpumer({
            achievement: '--',
            nomination: '--',
            year: '--'
        }).AchievementSpumerMechanism();

        new AchievementSpumer({
            achievement: '--',
            nomination: '--',
            year: '--'
        }).AchievementSpumerMechanism();

        new AchievementSpumer({
            achievement: '--',
            nomination: '--',
            year: '--'
        }).AchievementSpumerMechanism();

    } if(document.querySelector('.body').classList.contains('ford-vs-ferrari')) {

        // ford-vs-ferrari page
        new AchievementSpumer({
            src: 'icons/avards/awardOscar.png',
            achievement: 'Оскар',
            nomination: 'Лучший монтаж',
            year: '2020'
        }).AchievementSpumerMechanism();

        new AchievementSpumer({
            src: 'icons/avards/awardOscar.png',
            achievement: 'Оскар',
            nomination: 'Лучший монтаж звука',
            year: '2020'
        }).AchievementSpumerMechanism();

        new AchievementSpumer({
            src: 'icons/avards/awardGoldenGlobe-nomination.png',
            achievement: 'номинация на премию Золотой глобус',
            nomination: 'Лучшая мужская роль',
            year: '2020'
        }).AchievementSpumerMechanism();

        new AchievementSpumer({
            src: 'icons/avards/brit-academ.png',
            achievement: 'Британская академия',
            nomination: 'Лучший монтаж',
            year: '2020'
        }).AchievementSpumerMechanism();
        
    } if(document.querySelector('.body').classList.contains('3022')) {

        // 3022 page
        new AchievementSpumer({
            achievement: '--',
            nomination: '--',
            year: '--'
        }).AchievementSpumerMechanism();

        new AchievementSpumer({
            achievement: '--',
            nomination: '--',
            year: '--'
        }).AchievementSpumerMechanism();

        new AchievementSpumer({
            achievement: '--',
            nomination: '--',
            year: '--'
        }).AchievementSpumerMechanism();

        new AchievementSpumer({
            achievement: '--',
            nomination: '--',
            year: '--'
        }).AchievementSpumerMechanism();
        
    } 
});