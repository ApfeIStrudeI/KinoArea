window.addEventListener('DOMContentLoaded', () => {
    class FilterMechanism {
        constructor(data) {
            this.tabs = data.tabs;
            this.cardItem = data.cardItem;
            this.tabsParent = data.tabsParent;
            this.tabElement = data.tabElement;
            this.filterAttrib = data.filterAttrib;
        }
        filterMechanism() {
            const cardItem = this.cardItem,
                  tabsParent = this.tabsParent,
                  tabs = this.tabs,
                  tabElement = this.tabElement;
        
            function hideTabContent() {
                tabs.forEach(item => {
                    item.classList.remove(`${tabElement}_active`);
                });
            }
            function showTabContent(i = 0) {
                tabs[i].classList.add(`${tabElement}_active`);
            }
            showTabContent();

            tabsParent.addEventListener('click', (event) => {
                const target = event.target;
                if (target.tagName !== 'LI') {
                    return false;
                } else {
                    tabs.forEach((item, i) => {
                        if (target == item) {
                            hideTabContent();
                            showTabContent(i);
                        }
                    });
                }
                let filterAttrib = target.dataset[`${this.filterAttrib}`];
                
                cardItem.forEach( item => {
                    item.parentElement.classList.remove('hide');
                    if (!item.classList.contains(filterAttrib) && filterAttrib !== 'all') {
                        item.parentElement.classList.add('hide');
                    }
                });
            });
        }
    };

    if(!document.querySelector('.body').classList.contains('moviePageBody')) {

            // cinemaNow section
        new FilterMechanism({
            cardItem: document.querySelector('.cinemaNow').querySelectorAll('.cardItem__movieGanre'),
            tabs: document.querySelector('.cinemaNow').querySelectorAll('.subheader__item'),
            tabsParent: document.querySelector('.cinemaNow').querySelector('.subheader__list'),
            tabElement: 'subheader__item',
            filterAttrib: 'filter'
        }).filterMechanism();

        // Popular movie section 
        new FilterMechanism({
            cardItem: document.querySelector('.popular').querySelectorAll('.cardItem__movieTitle'),
            tabs: document.querySelector('.popular').querySelectorAll('.subheader__item'),
            tabsParent: document.querySelector('.popular').querySelector('.subheader__list'),
            tabElement: 'subheader__item',
            filterAttrib: 'df'
        }).filterMechanism(); 
    } else if(document.querySelector('.body').classList.contains('moviePageBody')) {
        
        // movieReviews section 
        new FilterMechanism({
            cardItem: document.querySelector('.movieReview').querySelectorAll('.ReviewElement'),
            tabs: document.querySelector('.movieReview').querySelectorAll('.ReviewFilterTabs__item'),
            tabsParent: document.querySelector('.movieReview').querySelector('.ReviewFilterTabs__tabsList'),
            tabElement: 'ReviewFilterTabs__item',
            filterAttrib: 'rf'
        }).filterMechanism(); 
    }
});