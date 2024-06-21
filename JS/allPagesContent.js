window.addEventListener('DOMContentLoaded', () => {
    class PageSpumer {
        constructor(data) {
            this.movieCardItem = data.movieCardItem;
            this.movieTitleRus = data.movieTitleRus;
            this.movieTitleEng = data.movieTitleEng;
            this.KinoareaMark = parseFloat(data.KinoareaMark).toFixed(2);
            this.IMDbMark = parseFloat(data.IMDbMark).toFixed(2);
            this.shortMovieDescr = data.shortMovieDescr;
            this.expectationsRating = data.expectationsRating;
            this.peopNum = data.peopNum;
            this.yearOfRelease = data.yearOfRelease;
            this.countryOfRelease = data.countryOfRelease;
            this.slogan = data.slogan;
            this.director = data.director;
            this.Screenwriter = data.Screenwriter;
            this.Producer = data.Producer;
            this.Operator = data.Operator;
            this.Composer = data.Composer;
            this.Artist = data.Artist;
            this.Editor = data.Editor;
            this.Genre = data.Genre;
            this.boxOffice = data.boxOffice;
            this.PremiereWrld = data.PremiereWrld;
            this.PremiereRF = data.PremiereRF;
            this.AgeLimit = data.AgeLimit;
            this.TimeLimit = data.TimeLimit;
            this.directorIMG = data.directorIMG;
            this.directorNameRus = data.directorNameRus;
            this.directorNameEng = data.directorNameEng;
            this.ProductionSpanList = data.ProductionSpanList;
            this.SpecialEffectsSpanList = data.SpecialEffectsSpanList;
            this.DubbingStudioSpanList = data.DubbingStudioSpanList;
            this.PostersForMoviePostersSection = data.PostersForMoviePostersSection;
            this.FramesForMovieFramesSection = data.FramesForMovieFramesSection;
            this.firstMovieQuote = data.firstMovieQuote;
            this.firstMovieQuoteAuthor = data.firstMovieQuoteAuthor;
            this.secondMovieQuote = data.secondMovieQuote;
            this.secondMovieQuoteAuthor = data.secondMovieQuoteAuthor;
            this.mainBackgroundImageSRC = data.mainBackgroundImageSRC;
        }
        PageSpumerMechanism() {
            // painting KinoareaMark
            if (this.KinoareaMark <= 2) {
                this.KinoareaMarkBG = '"background-image: url(icons/moviePagesMarks/1.svg);"';
            } else if (this.KinoareaMark > 2 && this.KinoareaMark <= 3) {
                this.KinoareaMarkBG = '"background-image: url(icons/moviePagesMarks/2.svg);"';
            } else if (this.KinoareaMark > 3 && this.KinoareaMark <= 4) {
                this.KinoareaMarkBG = '"background-image: url(icons/moviePagesMarks/3.svg);"';
            } else if (this.KinoareaMark > 4 && this.KinoareaMark <= 5) {
                this.KinoareaMarkBG = '"background-image: url(icons/moviePagesMarks/4.svg);"';
            } else if (this.KinoareaMark > 5 && this.KinoareaMark <= 6) {
                this.KinoareaMarkBG = '"background-image: url(icons/moviePagesMarks/5.svg);"';
            } else if (this.KinoareaMark > 6 && this.KinoareaMark <= 7) {
                this.KinoareaMarkBG = '"background-image: url(icons/moviePagesMarks/6.svg);"';
            } else if (this.KinoareaMark > 7 && this.KinoareaMark <= 8) {
                this.KinoareaMarkBG = '"background-image: url(icons/moviePagesMarks/7.svg);"';
            } else if (this.KinoareaMark > 8 && this.KinoareaMark <= 9) {
                this.KinoareaMarkBG = '"background-image: url(icons/moviePagesMarks/8.svg);"';
            } else if (this.KinoareaMark > 9 && this.KinoareaMark <= 9.5) {
                this.KinoareaMarkBG = '"background-image: url(icons/moviePagesMarks/9.svg);"';
            } else if (this.KinoareaMark > 9.5 && this.KinoareaMark  <= 10) {
                this.KinoareaMarkBG = '"background-image: url(icons/moviePagesMarks/10.svg);"';
            }
            // painting IMDbMark
            if (this.IMDbMark <= 2) {
                this.IMDbMarkBG = '"background-image: url(icons/moviePagesMarks/1.svg);"';
            } else if (this.IMDbMark > 2 && this.IMDbMark <= 3) {
                this.IMDbMarkBG = '"background-image: url(icons/moviePagesMarks/2.svg);"';
            } else if (this.IMDbMark > 3 && this.IMDbMark <= 4) {
                this.IMDbMarkBG = '"background-image: url(icons/moviePagesMarks/3.svg);"';
            } else if (this.IMDbMark > 4 && this.IMDbMark <= 5) {
                this.IMDbMarkBG = '"background-image: url(icons/moviePagesMarks/4.svg);"';
            } else if (this.IMDbMark > 5 && this.IMDbMark <= 6) {
                this.IMDbMarkBG = '"background-image: url(icons/moviePagesMarks/5.svg);"';
            } else if (this.IMDbMark > 6 && this.IMDbMark <= 7) {
                this.IMDbMarkBG = '"background-image: url(icons/moviePagesMarks/6.svg);"';
            } else if (this.IMDbMark > 7 && this.IMDbMark <= 8) {
                this.IMDbMarkBG = '"background-image: url(icons/moviePagesMarks/7.svg);"';
            } else if (this.IMDbMark > 8 && this.IMDbMark <= 9) {
                this.IMDbMarkBG = '"background-image: url(icons/moviePagesMarks/8.svg);"';
            } else if (this.IMDbMark > 9 && this.IMDbMark <= 9.5) {
                this.IMDbMarkBG = '"background-image: url(icons/moviePagesMarks/9.svg);"';
            } else if (this.IMDbMark > 9.5 && this.IMDbMark <= 10) {
                this.IMDbMarkBG = '"background-image: url(icons/moviePagesMarks/10.svg);"';
            }

            // динамический рейтинг ожиданий
            if (this.expectationsRating != undefined) {
                this.procentBAR = this.expectationsRating;
                let n = +this.expectationsRating;
                if (n >= 75) {
                    this.procentBG = '#3be21d62';
                } else if (n < 75 && n >= 60) {
                    this.procentBG = '#88cb3669';
                } else if (n < 60 && n >= 45) {
                    this.procentBG = '#cb6d3673';
                } else if (n < 45) {
                    this.procentBG = '#cb403670';
                }
            } else {
                this.procentBAR = '0'; 
            }
            
            document.querySelector('.body').innerHTML = `
            <nav class="mobile__menu">
                <div class="mobile__menu-item">
                    <a class="mobile__menu-link" href="#up">
                        <div>
                            Описание кинокартины
                        </div>
                    </a>
                </div>
                <div class="mobile__menu-item">
                    <a class="mobile__menu-link" href="#actorsID">
                        <div>
                            Актёры
                        </div>
                    </a>
                </div>
                <div class="mobile__menu-item">
                    <a class="mobile__menu-link" href="#trailerHeaderID">
                        <div>
                            Трейлер
                        </div>
                    </a>
                </div>
                <div class="mobile__menu-item">
                    <a class="mobile__menu-link" href="#achievementID">
                        <div>
                            Награды
                        </div>
                    </a>
                </div>
                <div class="mobile__menu-item">
                    <a class="mobile__menu-link" href="#moviePosters">
                        <div>
                            Постеры 
                        </div>
                    </a>
                </div>
                <div class="mobile__menu-item">
                    <a class="mobile__menu-link" href="#movieFrames">
                        <div>
                            Кадры из кинокартины
                        </div>
                    </a>
                </div>
                <div class="mobile__menu-item">
                    <a class="mobile__menu-link" href="#movieQuotes">
                        <div>
                            Цитаты из кинокартины
                        </div>
                    </a>
                </div>
                <div class="mobile__menu-item">
                    <a class="mobile__menu-link" href="#movieReviewID">
                        <div>
                            Рецензии к кинокартине
                        </div>
                    </a>
                </div>
            </nav>
            <section id="up" class="movieDescription" style="background: url(${this.mainBackgroundImageSRC}) top center/105% no-repeat;">
                <div class="container">
                    <header class="header">
                        <div class="searchElements MIDDLESCREEN">
                            <button data-searchactive class="searchButton MIDDLESCREEN">
                                <div>
                                    <img src="icons/searchVector.svg" alt="search">
                                    <div class="searchBTN">Поиск</div>
                                </div>
                            </button>
                        </div>
                        <div class="nav-container NONEMOB">
                            <div class="logo">
                                <a href="index.html"><img src="icons/logo.svg" alt="KinoArea"></a>
                            </div>
                            <nav class="navigation">
                                <div>
                                    <a href="#up">Описание</a>
                                </div>
                                <div>
                                    <a href="#actorsID">Актёры</a>
                                </div>
                                <div>
                                    <a href="#trailerHeaderID">Трейлер</a>
                                </div>
                                <div>
                                    <a href="#achievementID">Награды</a>
                                </div>
                                <div>
                                    <a href="#moviePosters">Постеры</a>
                                </div>
                                <div>
                                    <a href="#movieFrames">Кадры</a>
                                </div>
                                <div>
                                    <a href="#movieQuotes">Цитаты</a>
                                </div>
                                <div>
                                    <a href="#movieReviewID">Рецензии</a>
                                </div>
                            </nav>
                        </div>
                        <div class="interactivElements NONEMOB">
                            <button data-searchactive class="searchButton DESKTOP">
                                <div><img src="icons/searchVector.svg" alt="search"></div>
                            </button>
                            <button data-modal class="autorisation">
                                <span>Войти</span>
                            </button>
                        </div>
                        <div class="headerMobile MOBILE">
                            <div class="interactivElements">
                                <button class="mobileMenuButton">
                                    <div class="hamburger">
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                    </div>
                                </button>
                                <button data-searchactive class="searchButton">
                                    <div><img src="icons/searchVector.svg" alt="search"></div> 
                                </button>
                            </div>
                            <div class="logo">
                                <a id="headerLogo" href="index.html"><img src="icons/logo.svg" alt="KinoArea"></a>
                            </div>
                            <div class="interactivElements">
                                <button data-modal class="autorisation">
                                    <span>Войти</span>
                                </button>
                            </div>
                        </div>
                    </header>
                    <div class="movieDescription__container">
                        <div class="movieDescription__firstFlexBox">
                            <div class="first-con NONEMOB">
                                <img src=${this.movieCardItem}>
                            </div>
                            <div class="second-con">
                                <h2 class="subheader__title">
                                    ${this.movieTitleRus}
                                </h2>
                                <h4 class="subheader__subtitle">
                                    ${this.movieTitleEng}
                                </h4>
                                <div class="markElipsoids">
                                    <div class="mark">
                                        <div class="numMark" style=${this.KinoareaMarkBG}>
                                            <i>${this.KinoareaMark}</i>
                                        </div>
                                        <span>Kinoarea</span>
                                    </div>
                                    <div class="mark">
                                        <div class="numMark" style=${this.IMDbMarkBG}>
                                            <i>${this.IMDbMark}</i>
                                        </div>
                                        <span>IMDb</span>
                                    </div>
                                </div>
                                <p class="paragraph">
                                    ${this.shortMovieDescr}
                                </p>
                                <div class="watchTrailer">
                                    <a href="#trailerHeaderID">
                                        <button class="watchTrailer__button">
                                            <span>
                                                <i class="fa-solid fa-play fa-play-events-none"></i>
                                                ㅤСмотреть трейлер
                                            </span>
                                        </button>
                                    </a>
                                    <div class="watchTrailer__social">
                                        <div><i class="fa-brands fa-vk"></i></div>
                                        <div><i class="fa-brands fa-instagram"></i></div>
                                        <div><i class="fa-brands fa-facebook-f"></i></div>
                                        <div><i class="fa-brands fa-twitter"></i></div>
                                        <div><i class="fa-brands fa-youtube"></i></div>
                                    </div>
                                </div>
                            </div>
                            <div class="third-con">
                                <div class="markBorder">
                                    <i class="fa-solid fa-thumbs-up"></i>
                                </div>
                                <div class="markBorder">
                                    <i class="fa-solid fa-thumbs-down fa-flip-horizontal"></i>
                                </div>
                                <div class="markBorder markBorder-procent">
                                    <div class="procentBAR" style="width: ${this.procentBAR}%; background: ${this.procentBG};"></div>
                                    <div class="procent">
                                        Рейтинг ожиданий ${this.expectationsRating}%
                                    </div>
                                </div>
                                <div class="markBorder">
                                    <i class="fa-solid fa-heart"></i>
                                </div>
                                <span class="NONEMOB">В избранном у ${this.peopNum} человек </span>
                            </div>
                        </div>
                        <div class="movieDescription__secondFlexBox">
                            <div class="title">
                                Год:	
                            </div>
                            <div class="descr">
                                ${this.yearOfRelease}
                            </div>
                            <div class="title">
                                Страна:	
                            </div>
                            <div class="descr">
                                ${this.countryOfRelease}
                            </div>
                            <div class="title">
                                Слоган:
                            </div>
                            <div class="descr">
                                ${this.slogan}
                            </div>
                            <div class="title">
                                Режиссер:	
                            </div>
                            <div class="descr">
                                ${this.director}
                            </div>
                            <div class="title">
                                Сценарий:
                            </div>
                            <div class="descr">
                                ${this.Screenwriter}
                            </div>
                            <div class="title">
                                Продюсер:
                            </div>
                            <div class="descr">
                                ${this.Producer}
                            </div>
                            <div class="title">
                                Оператор:	
                            </div>
                            <div class="descr">
                                ${this.Operator}
                            </div>
                            <div class="title">
                                Композитор:
                            </div>
                            <div class="descr">
                                ${this.Composer}
                            </div>
                            <div class="title">
                                Художник:
                            </div>
                            <div class="descr">
                                ${this.Artist}
                            </div>
                            <div class="title">
                                Монтаж:
                            </div>
                            <div class="descr">
                                ${this.Editor}
                            </div>
                            <div class="title">
                                Жанр:
                            </div>
                            <div class="descr">
                                ${this.Genre}
                            </div>
                            <div class="title">
                                Сборы в мире:	
                            </div>
                            <div class="descr">
                                $${this.boxOffice}
                            </div>
                            <div class="title">
                                Премьера (мир):
                            </div>
                            <div class="descr">
                                ${this.PremiereWrld}
                            </div>
                            <div class="title">
                                Премьера (РФ):	
                            </div>
                            <div class="descr">
                                ${this.PremiereRF}
                            </div>
                            <div class="title">
                                Возраст:
                            </div>
                            <div class="descr">
                                ${this.AgeLimit}
                            </div>
                            <div class="title">              
                                Время:
                            </div>
                            <div class="descr">
                                ${this.TimeLimit}
                            </div>
                        </div>
                        <div class="movieDescription__thirdFlexBox">
                            <div class="director">
                                <img src=${this.directorIMG} alt="directorIMG">
                                <div>
                                    <div class="position__nameRus">
                                        ${this.directorNameRus}
                                    </div>
                                    <div class="position__nameEng">
                                        ${this.directorNameEng}
                                    </div>
                                    <div class="position__position">
                                        Режисёр
                                    </div>
                                </div>
                            </div>
                            <div class="movieInfo">
                                <h5 class="movieInfo__title">
                                    Производство:
                                </h5>
                                <div class="movieInfo__descr">
                                    ${this.ProductionSpanList}
                                </div>
                            </div>
                            <div class="movieInfo">
                                <h5 class="movieInfo__title">
                                    Спецэффекты:
                                </h5>
                                <div class="movieInfo__descr">
                                    ${this.SpecialEffectsSpanList}
                                </div>
                            </div>
                            <div class="movieInfo">
                                <h5 class="movieInfo__title">
                                    Студия дубляжа:
                                </h5>
                                <div class="movieInfo__descr">
                                    ${this.DubbingStudioSpanList}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section class="actors" id="actorsID">
                <div class="container">
                    <div class="subheader">
                        <h2 class="trailer__title">
                            В главных ролях:
                        </h2>
                        <div class="trailer__more">
                            <a href="#actorsID">
                                <div>
                                    Все актёры
                                </div>
                            </a>
                            <img src="icons/Arrow.svg" class="trailer__arrow">
                        </div>
                    </div>
                    <div class="actorsWindow">
                        <div class="actors-area">
                            <!-- данные из js -->
                        </div>
                    </div>
                </div>
            </section>
            <section class="movieTrailer" id="trailerHeaderID">
                <div class="container">
                    <div class="subheader">
                        <h2 class="trailer__title">
                            Трейлер фильма
                        </h2>
                        <div class="trailer__more" style="width: 270px;">
                            <a href="index.html#trailerHeaderID">
                                <div>
                                    Все новые трейлеры
                                </div>
                            </a>
                            <img src="icons/Arrow.svg" class="trailer__arrow">
                        </div>
                    </div>
                    <div class="openTrailerBase">
                        <!-- данные из js -->
                    </div>
                    <div class="trailer__slider">
                        <div class="s-box firstTS-box">
                            <!-- данные из js -->
                        </div>
                        <div class="s-box secondTS-box">
                            <!-- данные из js -->
                        </div>
                    </div>
                </div>
            </section>
            <section class="achievement" id="achievementID">
                <div class="container">
                    <div class="subheader">
                        <h2 class="trailer__title">
                            Награды
                        </h2>
                        <div class="trailer__more">
                            <a href="#achievementID">
                                <div>
                                    Все награды
                                </div>
                            </a>
                            <img src="icons/Arrow.svg" class="trailer__arrow">
                        </div>
                    </div>
                    <div class="achievement__contant">
                        <!-- данные из js -->
                    </div>
                </div>
            </section>
            <section class="moviePosters" id="moviePosters">
                <div class="container">
                    <div class="subheader">
                        <h2 class="trailer__title">
                            Постеры к фильму
                        </h2>
                        <div class="trailer__more">
                            <a href="#moviePosters">
                                <div>
                                    Все постеры
                                </div>
                            </a>
                            <img src="icons/Arrow.svg" class="trailer__arrow">
                        </div>
                    </div>
                    <div class="moviePosters__contant-wrapper">
                        <div class="moviePosters__contant">
                            ${this.PostersForMoviePostersSection}
                        </div>
                    </div>
                </div>
            </section>
            <section class="movieFrames" id="movieFrames">
                <div class="container">
                    <div class="subheader">
                        <h2 class="trailer__title">
                            Кадры из фильма
                        </h2>
                    </div>
                    <div class="movieFrames__contant-wrapper">
                        <div class="movieFrames__contant">
                            ${this.FramesForMovieFramesSection}
                        </div>
                    </div>
                </div>
            </section>
            <section class="movieQuotes" id="movieQuotes">
                <div class="container">
                    <div class="subheader">
                        <h2 class="trailer__title">
                            Цитаты из фильма
                        </h2>
                    </div>
                    <div class="movieQuotes__text">
                        <img src="icons/Quotes.svg">
                        <p class="movieQuotes__paragraph">
                            ${this.firstMovieQuote}
                        </p><br>
                        <p class="movieQuotes__author">
                            ${this.firstMovieQuoteAuthor}
                        </p>
                    </div>
                    <div class="movieQuotes__text">
                        <img src="icons/Quotes.svg">
                        <p class="movieQuotes__paragraph">
                            ${this.secondMovieQuote}
                        </p><br>
                        <p class="movieQuotes__author">
                            ${this.secondMovieQuoteAuthor}
                        </p>
                    </div>
                </div>
            </section>
            <section class="movieReview" id="movieReviewID">
                <div class="container">
                    <div class="subheader">
                        <h2 class="trailer__title">
                            Рецензии к фильму
                        </h2>
                        <div class="trailer__more">
                            <a href="#up" class="FastLink">
                                <button data-modal class="ADDmovieReview">
                                    <span>Добавить рецензию</span>
                                </button>
                            </a>
                        </div>
                    </div>
                    <div class="ReviewFilterTabs">
                        <ul class="ReviewFilterTabs__tabsList">
                            <li data-rf="all" class="ReviewFilterTabs__item">
                                Все
                            </li>
                            <li data-rf="goodReviews" class="ReviewFilterTabs__item">
                                Положительные
                            </li>
                            <li data-rf="neutralReviews" class="ReviewFilterTabs__item">
                                Нейтральные
                            </li>
                            <li data-rf="badReviews" class="ReviewFilterTabs__item">
                                Отрицательные
                            </li>
                        </ul>
                    </div>
                    <div class="ReviewContent">
                        <!-- данные из js -->
                    </div>
                </div>
            </section>
            <section class="subscribeToUs">
                <div class="container">
                    <div class="subscribe">
                        <div class="logo">
                            <img src="icons/liteLogo.svg" alt="KinoArea">
                        </div>
                        <div class="subscribe__content">
                            <div class="subheader">
                                <h2 class="subheader__title">
                                    Подпишитесь на E-mail рассылку
                                </h2>
                            </div>
                            <div class="subscribe__descr">
                                Если хотите быть в курсе последних новостей и новинок кино - заполните форму ниже и оформите бесплатную E-mail рассылку! 
                            </div>
                            <form action="#" class="subscribe-form">
                                <div class="subscribe__interactiveEl">
                                    <input required name="email" type="email"  placeholder="Введите свой E-mail адрес">
                                    <button class="subscribeBtn">
                                        <span>Подписаться</span>
                                    </button>
                                </div>
                                <div class="check">
                                    <label for="agree" class="customCheck">
                                        <input required type="checkbox" id="agree" name="agree" checked />
                                        <div class="checkbox">
                                            <img src="icons/checkbox.svg" class="checkMark">
                                        </div>
                                        <span>Соглашаюсь на условия</span> <a href="#">политики конфиденциальности</a>
                                    </label>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
            <footer class="footer">
                <div class="container footer__con" id="socialID">
                    <div class="footer__social">
                        <div><i class="fa-brands fa-vk"></i></div>
                        <div><i class="fa-brands fa-instagram"></i></div>
                        <div><i class="fa-brands fa-facebook-f"></i></div>
                        <div><i class="fa-brands fa-twitter"></i></div>
                        <div><i class="fa-brands fa-youtube"></i></div>
                    </div>
                    <nav class="footer__navigation">
                        <div>
                            <a href="#up">Описание</a>
                        </div>
                        <div>
                            <a href="#actorsID">Актёры</a>
                        </div>
                        <div>
                            <a href="#trailerHeaderID">Трейлер</a>
                        </div>
                        <div>
                            <a href="#achievementID">Награды</a>
                        </div>
                        <div>
                            <a href="#moviePosters">Постеры</a>
                        </div>
                        <div>
                            <a href="#movieFrames">Кадры</a>
                        </div>
                        <div>
                            <a href="#movieQuotes">Цитаты</a>
                        </div>
                        <div>
                            <a href="#movieReviewID">Рецензии</a>
                        </div>
                    </nav>
                    <div class="footer__rightsProtect">
                        2020 © Kinoarea.  Все права защищены
                    </div>
                    <div>
                        <a class="footer__politic" href="#">Политика конфиденциальности</a>
                    </div>
                </div>
            </footer>
            <div class="search hide">
                <div class="search__container">
                    <div data-sc class="search__close">
                        <img src="icons/VectorClose.svg" alt="&times;">
                    </div>
                    <div class="search__content">
                        <div class="search__window">
                            <input placeholder="Название фильма" type="text" class="search__input">
                            <div class="search__yellowIcon">
                                <img src="icons/darckSearchVector.svg" alt="search">
                            </div>
                        </div>
                        <div class="search__varList">
                            <!-- данные из js -->
                        </div>
                    </div>
                </div>
            </div>
            <div class="modal hide">
                <div class="modal__dialog">
                    <div class="modal__content">
                        <div>
                            <div data-close class="modal__close">
                                <img src="icons/VectorClose.svg" alt="&times;">
                            </div>
                            <div class="modal__inputWrapper">
                                <div class="modal__formContainer hide registrationForm">
                                    <form action="#">
                                        <div class="modal__title">Зарегистрироваться</div>
                                        <input required placeholder="Имя" name="name" type="text" class="modal__input">

                                        <input required placeholder="Фамилия" name="surname" type="text" class="modal__input">

                                        <input required placeholder="Придумайте логин" name="nickname" type="text" class="modal__input">

                                        <input required placeholder="Придумайте пароль" name="password" type="number" class="modal__input">

                                        <input required placeholder="Повторите пароль" name="repeatpassword" type="number" class="modal__input">

                                        <input required placeholder="E-mail" name="email" type="email" class="modal__input">

                                        <div class="check">
                                            <label for="politicagree" class="customCheck">
                                                <input required type="checkbox" id="politicagree" name="politicagree" checked />
                                                <div class="checkbox">
                                                    <img src="icons/checkbox.svg" class="checkMark">
                                                </div>
                                                <span>Соглашаюсь на условия</span> <a href="#">политики конфиденциальности</a>
                                            </label>
                                        </div>

                                        <div class="check">
                                            <label for="personalagree" class="customCheck">
                                                <input required type="checkbox" id="personalagree" name="personalagree" checked />
                                                <div class="checkbox">
                                                    <img src="icons/checkbox.svg" class="checkMark">
                                                </div>
                                                <span>Соглашаюсь на обработку персональных данных</span>
                                            </label>
                                        </div>

                                        <button class="btn btn_yellow">
                                            <span>Зарегистрироваться</span>
                                        </button>
                                    </form>
                                </div>
                                <div class="modal__formContainer autorisationForm">
                                    <form action="#">
                                        <div class="modal__title">Войти</div>
                                        <input required placeholder="Логин" name="nickname" type="text" class="modal__input">

                                        <input required placeholder="Пароль" name="password" type="number" class="modal__input">

                                        <button class="btn btn_yellow">
                                            <span>Войти</span>
                                        </button>

                                        <button id="toRegistration" type="button" class="btn btn_dark">
                                            <span>Зарегистрироваться</span>
                                        </button>
                                        <div class="footer__social">
                                            <div><i class="fa-brands fa-vk"></i></div>
                                            <div><i class="fa-brands fa-facebook-f"></i></div>
                                            <div><i class="fa-brands fa-twitter"></i></div>
                                            <i class="fa-brands fa-google"></i>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <a href="#up" class="pageup"><img src="icons/up.svg" alt="up"></a>
            `;
        }
    };

    if(document.querySelector('.body').classList.contains('escape-from-pretoria')) {

        // escape-from-pretoria page
        new PageSpumer({
            mainBackgroundImageSRC: '../images/page-bg/escape-from-pretoria-bg.png',
            movieCardItem: 'images/moviePagesPosters/escape-from-pretoria.png',
            movieTitleRus: 'Побег из Претории',
            movieTitleEng: 'Escape from Pretoria',
            KinoareaMark: '6.7',
            IMDbMark: '8.7',
            shortMovieDescr: 'Двое борцов за свободу отбывают срок в одной из самых строгих тюрем мира — в «Претории». Вместе с другими узниками они планируют дерзкий и опасный побег. Но придумать план — это только первый шаг. Шаг второй — реализация плана.',
            expectationsRating: '85',
            peopNum: '37933',
            yearOfRelease: '2020',
            countryOfRelease: 'Великобритания, Австралия',
            slogan: '«Подбери ключ к свободе»',
            director: 'Фрэнсис Аннан',
            Screenwriter: 'Фрэнсис Аннан, Л.Х. Адамс, Кэрол Гриффитс, ...',
            Producer: 'Дэвид Баррон, Марк Блэйни, Гари Хэмилтон, ...',
            Operator: 'Джеффри Холл',
            Composer: 'Дэвид Хиршфелдер',
            Artist: 'Скотт Бёрд, Эрика Брайан, Мариот Керр, ...',
            Editor: 'Ник Фентон',
            Genre: 'Триллер',
            boxOffice: '12 808',
            PremiereWrld: '1 марта 2020',
            PremiereRF: '14 мая 2020',
            AgeLimit: '16+',
            TimeLimit: '106 мин. / 01:46',
            directorIMG: 'images/directors/FrancisAnnan.png',
            directorNameRus: 'Фрэнсис Аннан',
            directorNameEng: 'Francis Annan',
            ProductionSpanList: '<span>1.ㅤArclight Films</span><span>2.ㅤBeagle Pug Films</span><span>3.ㅤFootprint Films</span>',
            SpecialEffectsSpanList: '<span>1.ㅤParticular Crowd</span><span>2.ㅤPremiere Picture</span><span>3.ㅤSpier Films</span>',
            DubbingStudioSpanList: '<span>1.ㅤПифагор</span>',
            PostersForMoviePostersSection: '<div class="moviePosters__item"><img src="images/moviePagesPosters/posters/p1.png"></div><div class="moviePosters__item"><img src="images/moviePagesPosters/posters/p2.png"></div><div class="moviePosters__item"><img src="images/moviePagesPosters/posters/p3.png"></div>',
            FramesForMovieFramesSection: '<div class="movieFrames__item_bigImg"><img src="images/movieFrames/escape-from-pretoria/1.png"></div><div class="movieFrames__item"><img src="images/movieFrames/escape-from-pretoria/2.png"></div><div class="movieFrames__item"><img src="images/movieFrames/escape-from-pretoria/3.png"></div><div class="movieFrames__item"><img src="images/movieFrames/escape-from-pretoria/4.png"></div><div class="movieFrames__item"><img src="images/movieFrames/escape-from-pretoria/5.png"></div><div class="movieFrames__item_bigImg"><img src="images/movieFrames/escape-from-pretoria/6.png"></div>',
            firstMovieQuote: 'Принимая во внимание показатели успешности, высококачественный прототип будущего проекта не оставляет шанса для своевременного выполнения сверхзадачи. Равным образом, дальнейшее развитие различных форм деятельности играет определяющее значение для благоприятных перспектив!',
            firstMovieQuoteAuthor: 'Слова отца',
            secondMovieQuote: 'Мы вынуждены отталкиваться от того, что постоянное информационно-пропагандистское обеспечение нашей деятельности обеспечивает актуальность форм воздействия. Приятно, граждане, наблюдать, как непосредственные участники технического прогресса представляют собой не что иное, как квинтэссенцию победы маркетинга над разумом и должны быть функционально разнесены на независимые элементы. Господа, понимание сути ресурсосберегающих технологий создаёт предпосылки для приоритизации разума над эмоциями. Приятно, граждане, наблюдать, как некоторые особенности внутренней политики, которые представляют собой яркий пример континентально-европейского типа политической культуры, будут преданы социально-демократической анафеме.',
            secondMovieQuoteAuthor: 'Слова странного человека'
        }).PageSpumerMechanism();

    }
});