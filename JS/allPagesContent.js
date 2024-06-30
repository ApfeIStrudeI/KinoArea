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
            mainBackgroundImageSRC: 'images/page-bg/escape-from-pretoria-bg.png',
            movieCardItem: 'images/moviePagesPosters/escape-from-pretoria.png',
            movieTitleRus: 'Побег из Претории',
            movieTitleEng: 'Escape from Pretoria',
            KinoareaMark: '6.7',
            IMDbMark: '7.8',
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

    } else if(document.querySelector('.body').classList.contains('joker')) {

        // joker page
        new PageSpumer({
            mainBackgroundImageSRC: 'images/page-bg/main.png',
            movieCardItem: 'images/filmPosters/joker.png',
            movieTitleRus: 'Джокер',
            movieTitleEng: 'Joker',
            KinoareaMark: '8.5',
            IMDbMark: '8.0',
            shortMovieDescr: 'Готэм, начало 1980-х годов. Комик Артур Флек живет с больной матерью, которая с детства учит его «ходить с улыбкой». Пытаясь нести в мир хорошее и дарить людям радость, Артур сталкивается с человеческой жестокостью и постепенно приходит к выводу, что этот мир получит от него не добрую улыбку, а ухмылку злодея Джокера.',
            expectationsRating: '98',
            peopNum: '65026',
            yearOfRelease: '2019',
            countryOfRelease: 'США, Канада',
            slogan: '«Сделай счастливое лицо»',
            director: 'Тодд Филлипс',
            Screenwriter: 'Тодд Филлипс, Скотт Сильвер, Боб Кейн, ...',
            Producer: 'Ричард Баратта, Брюс Берман, Джейсон Клот, ...',
            Operator: 'Лоуренс Шер',
            Composer: 'Хильдур Гуднадоуттир',
            Artist: 'Марк Фридберг, Лора Боллинджер, Марк Бриджес, ...',
            Editor: 'Джефф Грот',
            Genre: 'Триллер, драма, криминал',
            boxOffice: '1 078 751 311',
            PremiereWrld: '31 августа 2019',
            PremiereRF: '3 октября 2019',
            AgeLimit: '18+',
            TimeLimit: '122 мин. / 2:02',
            directorIMG: 'images/directors/tom-philips.png',
            directorNameRus: 'Тодд Филлипс',
            directorNameEng: 'Todd Phillips',
            ProductionSpanList: '<span>1.ㅤ22 & Indiana Pictures</span><span>2.ㅤBron Studios</span><span>3.ㅤCreative Wealth Media Finance</span><span>4.ㅤDC Comics</span><span>5.ㅤDC Entertainment</span><span>6.ㅤVillage Roadshow Pictures</span><span>7.ㅤWarner Bros</span>',
            SpecialEffectsSpanList: '<span>1.ㅤScanlineVFX</span><span>2.ㅤShade VFX</span><span>3.ㅤCaptured Dimensions</span>',
            DubbingStudioSpanList: '<span>1.ㅤМосфильм-Мастер</span>',
            PostersForMoviePostersSection: '<div class="moviePosters__item"><img src="images/moviePagesPosters/posters/joker-p1.png"></div><div class="moviePosters__item"><img src="images/moviePagesPosters/posters/joker-p2.png"></div><div class="moviePosters__item"><img src="images/moviePagesPosters/posters/joker-p3.png"></div>',
            FramesForMovieFramesSection: '<div class="movieFrames__item_bigImg"><img src="images/movieFrames/joker/1.png"></div><div class="movieFrames__item"><img src="images/movieFrames/joker/2.png"></div><div class="movieFrames__item"><img src="images/movieFrames/joker/3.png"></div><div class="movieFrames__item"><img src="images/movieFrames/joker/4.png"></div><div class="movieFrames__item"><img src="images/movieFrames/joker/5.png"></div><div class="movieFrames__item_bigImg"><img src="images/movieFrames/joker/6.png"></div>',
            firstMovieQuote: 'Я вдруг понял, что большинство людей не слушают. Они просто ждут своей очереди снова заговорить.',
            firstMovieQuoteAuthor: 'Слова Артура Флека',
            secondMovieQuote: 'Худшее свойство психического заболевания состоит в том, что люди ожидают, что вы будете вести себя так, будто его у вас нет.',
            secondMovieQuoteAuthor: 'Слова Артура Флека'
        }).PageSpumerMechanism();

    } else if(document.querySelector('.body').classList.contains('star-wars')) {

        // star-wars page
        new PageSpumer({
            mainBackgroundImageSRC: 'images/page-bg/sw.png',
            movieCardItem: 'images/filmPosters/star-wars.png',
            movieTitleRus: 'Звёздные войны: Скайуокер. Восход',
            movieTitleEng: 'Star Wars: Episode IX – The Rise of Skywallker',
            KinoareaMark: '6.7',
            IMDbMark: '6.4',
            shortMovieDescr: 'Фильм завершает невероятную историю семьи Скайуокеров, длящуюся уже более сорока лет, и обещает дать ответы на все загадки из предыдущих серий. Зрителя ожидают старые и новые герои, уникальные миры, увлекательные путешествия на край Галактики и грандиозный финал фантастической саги.',
            expectationsRating: '62',
            peopNum: '8026',
            yearOfRelease: '2019',
            countryOfRelease: 'США',
            slogan: '«Every Generation Has a Legend»',
            director: 'Джей Джей Абрамс',
            Screenwriter: 'Джей Джей Абрамс, Крис Террио, Дерек Коннолли, ...',
            Producer: 'Джей Джей Абрамс, Пиппа Андерсен, ...',
            Operator: 'Дэниэл Миндел',
            Composer: 'Джон Уильямс',
            Artist: 'Рик Картер, Кевин Дженкинс, Джимм Бар, ...',
            Editor: 'Мариан Брэндом, Стефан Грубе',
            Genre: 'Фантастика, боевик, приключение',
            boxOffice: '1 074 144 248',
            PremiereWrld: '16 декабря 2019',
            PremiereRF: '19 декабря 2019',
            AgeLimit: '18+',
            TimeLimit: '141 мин. / 2:21',
            directorIMG: 'images/directors/j-j-abrams.png',
            directorNameRus: 'Джей Джей Абрамс',
            directorNameEng: 'J J Abrams',
            ProductionSpanList: '<span>1.ㅤBad Robot</span><span>2.ㅤDigital Makeup Group</span><span>3.ㅤLucasfilm Ltd</span><span>4.ㅤWalt Disney Pictures</span>',
            SpecialEffectsSpanList: '<span>1.ㅤ32TEN Studios</span><span>2.ㅤBase FX</span><span>3.ㅤHybride Technologies</span><span>4.ㅤImportant Looking Pirates (ILPvfx)</span><span>5.ㅤIndustrial Light & Magic (ILM)</span><span>6.ㅤStereo D</span><span>7.ㅤThird Floor, The</span><span>8.ㅤExceptional Minds</span><span>8.ㅤReelEye Company</span>',
            DubbingStudioSpanList: '<span>1.ㅤНевафильм</span>',
            PostersForMoviePostersSection: '<div class="moviePosters__item"><img src="images/moviePagesPosters/posters/s-w-p1.png"></div><div class="moviePosters__item"><img src="images/moviePagesPosters/posters/s-w-p2.png"></div><div class="moviePosters__item"><img src="images/moviePagesPosters/posters/s-w-p3.png"></div>',
            FramesForMovieFramesSection: '<div class="movieFrames__item_bigImg"><img src="images/movieFrames/star-wars/1.png"></div><div class="movieFrames__item"><img src="images/movieFrames/star-wars/2.png"></div><div class="movieFrames__item"><img src="images/movieFrames/star-wars/3.png"></div><div class="movieFrames__item"><img src="images/movieFrames/star-wars/4.png"></div><div class="movieFrames__item"><img src="images/movieFrames/star-wars/5.png"></div><div class="movieFrames__item_bigImg"><img src="images/movieFrames/star-wars/6.png"></div>',
            firstMovieQuote: 'Эта миссия - все. Мы не можем потерпеть неудачу.',
            firstMovieQuoteAuthor: 'Слова Леи Органы',
            secondMovieQuote: 'Я видела себя на темном троне. Я не позволю этому случиться. Я никогда не покину это место. Я делаю то же, что и ты.',
            secondMovieQuoteAuthor: 'Слова Рей'
        }).PageSpumerMechanism();

    } else if(document.querySelector('.body').classList.contains('gentlemen')) {

        // gentlemen page
        new PageSpumer({
            mainBackgroundImageSRC: 'images/page-bg/gents.png',
            movieCardItem: 'images/filmPosters/gents.png',
            movieTitleRus: 'Джентльмены',
            movieTitleEng: 'The Gentlemen',
            KinoareaMark: '8.0',
            IMDbMark: '7.89',
            shortMovieDescr: 'Один ушлый американец придумал схему нелегального обогащения с использованием поместий обедневшей английской аристократии и разбогател на этом . Другой проныра приходит к правой руке американца, и предлагает тому купить киносценарий, в котором подробно описаны преступления его босса при участии других представителей лондонского криминального мира — партнёра-еврея, китайской диаспоры, чернокожих спортсменов и даже русского олигарха.',
            expectationsRating: '75',
            peopNum: '65026',
            yearOfRelease: '2019',
            countryOfRelease: 'США, Великобритания, Франция, Япония, Чехия',
            slogan: '«Criminal. Class»',
            director: 'Гай Ричи',
            Screenwriter: 'Гай Ричи, Айван Эткинсон, Марн Дэвис, ...',
            Producer: 'Мэттью Андерсен, Айван Эткинсон, Билл Блок, ...',
            Operator: 'Алан Стюард',
            Composer: 'Кристофер Бенстед',
            Artist: 'Джемма Джексон, Рэйчел Олтон, Оливер Кэрролл, ...',
            Editor: 'Джеймс Херберт, Пол Мачлисс',
            Genre: 'Боевик, комедия, криминал',
            boxOffice: '115 171 795',
            PremiereWrld: '3 декабря 2019',
            PremiereRF: '13 февраля 2020',
            AgeLimit: '18+',
            TimeLimit: '113 мин. / 1:53',
            directorIMG: 'images/directors/guy-ritchie.png',
            directorNameRus: 'Гай Ричи',
            directorNameEng: 'Guy Ritchie',
            ProductionSpanList: '<span>1.ㅤMiramax Films</span><span>2.ㅤSTX Films</span><span>3.ㅤToff Guy Films</span>',
            SpecialEffectsSpanList: '<span>1.ㅤUnion Visual Effects</span>',
            DubbingStudioSpanList: '<span>1.ㅤСинеЛаб СаундМикс</span>',
            PostersForMoviePostersSection: '<div class="moviePosters__item"><img src="images/moviePagesPosters/posters/gents1.png"></div><div class="moviePosters__item"><img src="images/moviePagesPosters/posters/gents2.png"></div><div class="moviePosters__item"><img src="images/moviePagesPosters/posters/gents3.png"></div>',
            FramesForMovieFramesSection: '<div class="movieFrames__item_bigImg"><img src="images/movieFrames/gents/1.png"></div><div class="movieFrames__item"><img src="images/movieFrames/gents/2.png"></div><div class="movieFrames__item"><img src="images/movieFrames/gents/3.png"></div><div class="movieFrames__item"><img src="images/movieFrames/gents/4.png"></div><div class="movieFrames__item"><img src="images/movieFrames/gents/5.png"></div><div class="movieFrames__item_bigImg"><img src="images/movieFrames/gents/6.png"></div>',
            firstMovieQuote: 'Большие деньги — жди проблем.',
            firstMovieQuoteAuthor: 'Слова Микки Пирсона',
            secondMovieQuote: 'Чтобы стать царем зверей, мало вести себя по-царски. Надо быть царем.',
            secondMovieQuoteAuthor: 'Слова Микки Пирсона'
        }).PageSpumerMechanism();

    } else if(document.querySelector('.body').classList.contains('ford-vs-ferrari')) {

        // ford-vs-ferrari page

        new PageSpumer({
            mainBackgroundImageSRC: 'images/page-bg/Ford-vs-Ferrari.png',
            movieCardItem: 'images/filmPosters/ford-vs-ferrari.png',
            movieTitleRus: 'Ford против Ferrari',
            movieTitleEng: 'Ford vs Ferrari',
            KinoareaMark: '8.1',
            IMDbMark: '8.2',
            shortMovieDescr: 'В начале 1960-х Генри Форд II принимает решение улучшить имидж компании и сменить курс на производство более модных автомобилей. После неудавшейся попытки купить Ferrari американцы решают бросить вызов итальянцам на трассе и выиграть престижную гонку 24 часа Ле-Мана. Чтобы создать подходящую машину, компания нанимает автоконструктора Кэррола Шэлби, а тот отказывается работать без гонщика Кена Майлза. Вместе они принимаются за разработку спорткара Ford GT40.',
            expectationsRating: '80',
            peopNum: '45013',
            yearOfRelease: '3215',
            countryOfRelease: 'США',
            slogan: '«They took the American dream for a ride»',
            director: 'Джеймс Мэнголд',
            Screenwriter: 'Джез Баттеруорт, Джон-Генри Баттеруорт, ...',
            Producer: 'Джон Бернард, Дэни Бернфелд, Питер Чернин, ...',
            Operator: 'Фидон Папамайкл',
            Composer: 'Марко Белтрами, Бак Сандерс',
            Artist: 'Франсуа Одуи, Густаф Аспегрен, Джордан Феррер, ...',
            Editor: 'Эндрю Баклэнд, Майкл МакКаскер, Дирк Уэстервелт',
            Genre: 'Биография, спорт, драма, боевик',
            boxOffice: '225 508 210',
            PremiereWrld: '30 августа 2019',
            PremiereRF: '14 ноября 2019',
            AgeLimit: '18+',
            TimeLimit: '152 мин. / 02:32',
            directorIMG: 'images/directors/james-mangold.png',
            directorNameRus: 'Джеймс Мэнголд',
            directorNameEng: 'James Mangold',
            ProductionSpanList: '<span>1.ㅤ20th Century Fox Film Corporation</span><span>2.ㅤChernin Entertainment</span><span>3.ㅤTSG Entertainment</span><span>4.ㅤTurnpike Films</span>',
            SpecialEffectsSpanList: '<span>1.ㅤEDI (Effetti Digitali Italiani)</span><span>2.ㅤFactory VFX</span><span>3.ㅤHalon Entertainment</span><span>4.ㅤLidar Guys</span><span>5.ㅤMethod Studios</span>',
            DubbingStudioSpanList: '<span>1.ㅤСиПиАй Филмз / CPI Films</span>',
            PostersForMoviePostersSection: '<div class="moviePosters__item"><img src="images/moviePagesPosters/posters/f-vs-f1.png"></div><div class="moviePosters__item"><img src="images/moviePagesPosters/posters/f-vs-f2.png"></div><div class="moviePosters__item"><img src="images/moviePagesPosters/posters/f-vs-f3.png"></div>',
            FramesForMovieFramesSection: '<div class="movieFrames__item_bigImg"><img src="images/movieFrames/ford-vs-ferrari/1.png"></div><div class="movieFrames__item"><img src="images/movieFrames/ford-vs-ferrari/2.png"></div><div class="movieFrames__item"><img src="images/movieFrames/ford-vs-ferrari/3.png"></div><div class="movieFrames__item"><img src="images/movieFrames/ford-vs-ferrari/4.png"></div><div class="movieFrames__item"><img src="images/movieFrames/ford-vs-ferrari/5.png"></div><div class="movieFrames__item_bigImg"><img src="images/movieFrames/ford-vs-ferrari/6.png"></div>',
            firstMovieQuote: 'Счастлив тот человек, кто нашёл свое дело в этом мире, потому что он ни одного дня в жизни не будет работать, но таких очень мало. Но ещё меньше других, и я не знаю повезло им или нет. Это люди, у которых есть великая цель, они одержимы чем-то и, если они не добьются этого, то просто сойдут с ума. Я такой и я знаю ещё одного, кто мыслит точно так же.',
            firstMovieQuoteAuthor: 'Кэрролл Шелби',
            secondMovieQuote: 'Иногда любые слова… они… бесполезны. А от инструментов есть польза, потому что ими можно что-то починить.',
            secondMovieQuoteAuthor: 'Кэрролл Шелби'
        }).PageSpumerMechanism();

    }
});