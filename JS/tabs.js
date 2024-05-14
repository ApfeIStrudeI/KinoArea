window.addEventListener('DOMContentLoaded', () => {
    
    // Табы 
    class TabsMechanism {
        constructor(data) {
            this.tabs = data.tabs;
            this.content = data.content;
            this.tabsParent = data.tabsParent;
            this.hover = data.hover;
            this.active = data.active;
            this.tabElement = data.tabElement;
            this.videoLibrary = data.videoLibrary;
            this.button = data.button;
        }
        tabMechanism() {
            const tabs = this.tabs,
                content = this.content,
                tabsParent = this.tabsParent,
                tabElement = this.tabElement;
            let read = this.hover,
                active = this.active,
                videoLibrary = this.videoLibrary,
                playButton = this.button;

            function hideTabContent() {
                content.forEach(item => {
                    item.classList.add('hide');
                    item.classList.remove('show', 'fade');
                });
        
                tabs.forEach(item => {
                    item.classList.remove(`${tabElement}_active`);
                });

                if (active !== undefined) {
                    active.forEach(item => {
                        item.classList.add('hide');
                        item.classList.remove('showInline');
                    });
            
                    read.forEach(item => {
                        item.classList.remove('hide');
                        item.classList.add('showInline');
                    });
                } 

                if (videoLibrary !== undefined) {
                    tabsParent.forEach(() => {
                        document.querySelectorAll(`.trailer__video`).forEach(video => {
                            video.pause();
                        });
                        playButton.forEach(button => {
                            button.innerHTML = '<i class="fa-solid fa-play"></i>';
                        });
                    });
                }
            }
        
            function showTabContent(i = 1) {
                content[i].classList.add('show', 'fade');
                content[i].classList.remove('hide');
                tabs[i].classList.add(`${tabElement}_active`);
                if (active !== undefined) {
                    active[i].classList.add('showInline');
                    active[i].classList.remove('hide');
                    read[i].classList.add('hide');
                    read[i].classList.remove('showInline');
                }
            }
        
            hideTabContent();
            showTabContent();

            function clickOnTab() {
                const target = event.target;
        
                if (target && target.classList.contains(`${tabElement}`)) {
                    tabs.forEach((item, i) => {
                        if (target == item) {
                            hideTabContent();
                            showTabContent(i);
                        }
                    });
                }
            }

            if (videoLibrary !== undefined) {
                tabsParent.forEach(item => {
                    item.addEventListener('click', (event) => {
                        clickOnTab();
                    });
                })
            } else {
                tabsParent.addEventListener('click', (event) => {
                    clickOnTab();
                });
            }
        }
    };

    // lastNews section
    new TabsMechanism({
        content: document.querySelectorAll('.tabcontent'),
        tabs: document.querySelectorAll('.tabItem'),
        tabsParent: document.querySelector('.tabcontainer'),
        active: document.querySelectorAll('.active'),
        hover: document.querySelectorAll('.read'),
        tabElement: 'tabItem'
    }).tabMechanism();

    // Expected section
    new TabsMechanism({
        content: document.querySelectorAll('.filmBoxOffice'),
        tabs: document.querySelector('.expected').querySelectorAll('.subheader__item'),
        tabsParent: document.querySelector('.expected').querySelector('.subheader__list'),
        tabElement: 'subheader__item'
    }).tabMechanism();

    // табы для просмотра трейлеров
    new TabsMechanism({
        content: document.querySelectorAll('.openTrailerWrapper'),
        tabs: document.querySelectorAll('.closeTrailer'),
        tabsParent: document.querySelectorAll('.s-box'),
        tabElement: 'closeTrailer',
        videoLibrary: document.querySelectorAll('.trailer__video'),
        button: document.querySelectorAll('.play-pause')
    }).tabMechanism();

    // табы популярных персон
    new TabsMechanism({
        content: document.querySelectorAll('.personsSubcontainer'),
        tabs: document.querySelector('.persons').querySelectorAll('.subheader__item'),
        tabsParent: document.querySelector('.persons').querySelector('.subheader__list'),
        tabElement: 'subheader__item'
    }).tabMechanism();
});