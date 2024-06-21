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
                this.src = 'icons/achievement/achievement243.svg';
            }
            element.innerHTML = `
                <img src=${this.src} alt="achievement-image">
                <div>
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
            src: 'icons/achievement/awardOscar.svg',
            achievement: 'Оскар',
            nomination: 'Лучшая мужская роль',
            year: '2020'
        }).AchievementSpumerMechanism();

        new AchievementSpumer({
            src: 'icons/achievement/awardGoldenGlobe.svg',
            achievement: 'Золотой глобус',
            nomination: 'Лучшая мужская роль',
            year: '2020'
        }).AchievementSpumerMechanism();

        new AchievementSpumer({
            achievement: 'Премия Гильдии актеров',
            nomination: 'Лучший актерский состав',
            year: '2020'
        }).AchievementSpumerMechanism();

        new AchievementSpumer({
            achievement: 'Британская академия',
            nomination: 'Лучшая мужская роль',
            year: '2020'
        }).AchievementSpumerMechanism();
        
    } 
});