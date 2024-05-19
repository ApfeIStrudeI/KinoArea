window.addEventListener('DOMContentLoaded', () => {
    // Слайдер
    class SliderMechanism {
        constructor(data) {
            this.sliderInner = data.sliderInner;
            this.slides = data.slides;
            this.current = data.current;
            this.total = data.total;
            this.next = data.next;
            this.previous = data.previous;
            this.cardItem = data.cardItem;
            this.tabsParent = data.tabsParent;
        }
        sliderMechanism() {
            const sliderInner = this.sliderInner,
            slides = this.slides,
            next = this.next,
            previous = this.previous,
            current = this.current,
            total = this.total,
            tabsParent = this.tabsParent;

            const itemMarginRight = window.getComputedStyle(this.cardItem).marginRight;

            function createNewSlidesCollection () {
                // проверка ширины экрана устройства пользователя
                let mediaDesctop = window.matchMedia("(min-width: 1690px)");
                let mediaLaptop = window.matchMedia("(min-width: 1000px)");
                let bigTablet = window.matchMedia("(min-width: 768px)");
                let tablet = window.matchMedia("(min-width: 425px)");
                let mediaMobile = window.matchMedia("(min-width: 380px)");
                let mediaMiniMobile = window.matchMedia("(max-width: 380px)");

                let thisSlideIndex = 0, thisItemWidth = 0;
                
                if ( mediaDesctop.matches == true ) {
                    document.querySelectorAll('.current').forEach((item) => {
                        item.textContent = `4`;
                    });
                    thisSlideIndex = 4;
                    thisItemWidth = '340px';
                } else if ( mediaLaptop.matches == true ) {
                    document.querySelectorAll('.current').forEach((item) => {
                        item.textContent = `4`;
                    });
                    thisSlideIndex = 4;
                    thisItemWidth = '202px';
                } else if ( bigTablet.matches == true ) {
                    document.querySelectorAll('.current').forEach((item) => {
                        item.textContent = `3`;
                    });
                    thisSlideIndex = 3;
                    thisItemWidth = '210px';
                } else if ( tablet.matches == true ) {
                    document.querySelectorAll('.current').forEach((item) => {
                        item.textContent = `2`;
                    });
                    thisSlideIndex = 2;
                    thisItemWidth = '178px';
                } else if ( mediaMobile.matches == true ) {
                    document.querySelectorAll('.current').forEach((item) => {
                        item.textContent = `2`;
                    });
                    thisSlideIndex = 2;
                    thisItemWidth = '178px';
                } else if ( mediaMiniMobile.matches == true ) {
                    document.querySelectorAll('.current').forEach((item) => {
                        item.textContent = `2`;
                    });
                    thisSlideIndex = 2;
                    thisItemWidth = '145px';
                }

                let slideIndex = thisSlideIndex;
                let itemWidth = thisItemWidth;

                let slidesCollection = [];
                sliderInner.style.transform = `translateX(-0px)`;

                slides.forEach((slide) => {
                    if (!slide.classList.contains('hide')) {
                        slidesCollection.push('item');
                    }
                });

                total.textContent = `${slidesCollection.length}`;

                sliderInner.style.width = 100 * slidesCollection.length + '%';

                // а - числовое значение ширины карточки
                let a = +itemWidth.slice(0, itemWidth.length - 2);
                // б - числовое значение правого маржина карточки
                let b = +itemMarginRight.slice(0, itemMarginRight.length - 2);
                // итоговая ширина одного элемента
                let c = a + b;
                // "отступ"
                let offset = 0;

                next.addEventListener('click', () => {
                    if (offset.toFixed(0) == (c * (slidesCollection.length - thisSlideIndex)).toFixed(0)) {
                        offset = 0;
                    } else {
                        offset += c;
                        console.log(itemWidth);
                    }
                    sliderInner.style.transform = `translateX(-${offset}px)`;

                    if (slideIndex == slidesCollection.length) {
                        slideIndex = thisSlideIndex;
                    } else {
                        slideIndex++;
                    }
                    current.textContent = `${slideIndex}`;
                });
                previous.addEventListener('click', () => {
                    if (offset.toFixed(0) == 0){
                        offset = c * (slidesCollection.length - thisSlideIndex);
                    } else {
                        offset -= c;
                    }
                    sliderInner.style.transform = `translateX(-${offset}px)`;

                    if (slideIndex == thisSlideIndex) {
                        slideIndex = slidesCollection.length;
                    } else {
                        slideIndex--;
                    }
                    current.textContent = `${slideIndex}`;
                });
            }

            createNewSlidesCollection();

            if (tabsParent !== undefined) {
                tabsParent.addEventListener('click', (event) => {
                    const target = event.target;
                    if (target && target.classList.contains(`subheader__item`)) {
                        createNewSlidesCollection();
                    }
                });
            }
            
        }
    };   

    // Popular movie section
    new SliderMechanism({
        sliderInner: document.querySelector(`.popular__slider-inner`),
        slides: document.querySelector('.popular').querySelectorAll(`.cardItem`),
        current: document.querySelector('#popularCurrent'),
        total: document.querySelector('#popularTotal'),
        next: document.querySelector('.popularNext'),
        previous: document.querySelector('.popularPrevious'),
        tabsParent: document.querySelector('.popular').querySelector('.subheader__list'),
        cardItem: document.querySelector('.popular .cardItem')
    }).sliderMechanism();

    // Expected section
    new SliderMechanism({
        sliderInner: document.querySelector(`.expected__slider-inner`),
        slides: document.querySelectorAll(`.expected__slide`),
        current: document.querySelector('#expectedCurrent'),
        total: document.querySelector('#expectedTotal'),
        next: document.querySelector('.expectedNext'),
        previous: document.querySelector('.expectedPrevious'),
        cardItem: document.querySelector('.widProp')
    }).sliderMechanism();
});