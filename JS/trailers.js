window.addEventListener('DOMContentLoaded', () => {
    class TrailerTab {
        constructor(src, title, parentSelector, ...classes) {
            this.src = src;
            this.title = title;
            this.classes = classes;
            this.parent = document.querySelector(parentSelector);
        }
        render() {
            const element = document.createElement('div');
            if (this.classes.length === 0) {
                this.element = 'sliderItem';
                element.classList.add(this.element);
            } else {
                this.classes.forEach(className => element.classList.add(className));
            }
            
            element.innerHTML = `
                <div class="closeTrailer">
                    <img class="trailer__img" src=${this.src}>
                    <div>
                        <i class="fa-solid fa-play fa-play-events-none"></i>
                        <div class="activeCard">
                            <div>Текущий трейлер</div>
                        </div>
                    </div>
                </div>
                <h2 class="closeTrailer__title">
                    ${this.title} 
                </h2>
            `;
            this.parent.append(element);
        }
    }
    
    class TrailerActiveTab extends TrailerTab {
        constructor(src, poster, title, id, likeVolume, disVolume, parentSelector, ...classes) {
            super(src, title, parentSelector, ...classes);
            this.poster = poster;
            this.likeVolume = likeVolume;
            this.disVolume = disVolume;
            this.id = id;
        }
        render() {
            const element = document.createElement('div');
            if (this.classes.length === 0) {
                this.element = 'openTrailerWrapper';
                element.classList.add(this.element);
            } else {
                this.classes.forEach(className => element.classList.add(className));
            }

            // назначение уникальных id

            this.videoID = `${this.id}VideoID`;
            this.buttonID = `${this.id}ButtonID`;
            this.mobButtonID = `${this.id}MobButtonID`;
            this.volumeID = `${this.id}VolumeID`;
            this.progressID = `${this.id}ProgressID`;
            this.currentTimeID = `${this.id}currentTimeID`;
            this.volNoneID = `${this.id}volNoneID`;
            this.playerToolsID = `${this.id}playerToolsID`;
            this.scrinModID = `${this.id}scrinModID`;
            this.openTrailer = `${this.id}openTrailer`;

            element.innerHTML = `
                <div class="trailer__openTrailer" id=${this.openTrailer}>
                    <video class="trailer__video" id=${this.videoID} poster=${this.poster}>
                        <source src=${this.src} type="video/mp4">
                    </video>
                    <div class="player-tools" id=${this.playerToolsID}>
                        <button type="button" id=${this.buttonID} class="play-pause NONEMOB">
                            <i class="fa-solid fa-play"></i>
                        </button>
                        <div class="bottom-tools">
                            <button type="button" id=${this.mobButtonID} class="playPauseMobile MOBILE">
                                <i class="fa-solid fa-play"></i>
                            </button>
                            <div class="volume-tools">
                                <button type="button" id=${this.volNoneID} class="volume-none">
                                    <i class="fa-solid fa-volume-high"></i>
                                </button>
                                <div>
                                    <input type="range" class="volume" id=${this.volumeID} min="0" max="100">
                                </div>
                            </div>
                            <div class="progress">
                                <div class="progressValue">
                                    <p id=${this.currentTimeID}>00 : 00</p>
                                </div>
                                <progress id=${this.progressID} max="100" value="0"></progress>
                            </div>
                            <button type="button" id=${this.scrinModID} class="scrin-mod">
                                <i class="fa-solid fa-expand"></i>
                            </button>
                        </div>
                        
                    </div>
                </div>
                <div class="trailerDescr">
                    <div class="firstFlex">
                        <h2 class="trailerDescr__title">
                            ${this.title}
                        </h2>
                        <div class="trailerDescr__social">
                            <div><i class="fa-brands fa-vk"></i></div>
                            <div><i class="fa-brands fa-instagram"></i></div>
                            <div><i class="fa-brands fa-facebook-f"></i></div>
                            <div><i class="fa-brands fa-twitter"></i></div>
                            <div><a href="#socialID"><i class="fa-solid fa-ellipsis fa-spin-pulse"></i></a></div>
                        </div>
                    </div>
                    <div class="secondFlex">
                        <div class="markBorder">
                            <i class="fa-solid fa-thumbs-up"></i>
                            <div class="points">${this.likeVolume}</div>
                        </div>
                        <div class="markBorder">
                            <i class="fa-solid fa-thumbs-down fa-flip-horizontal"></i>
                            <div class="points">${this.disVolume}</div>
                        </div>
                    </div>
                </div>
            `;
            this.parent.append(element);

            // плеер

            const video = document.querySelector(`#${this.videoID}`),
                  playerTools = document.querySelector(`#${this.playerToolsID}`),
                  playButton = document.querySelector(`#${this.buttonID}`),
                  mobilePlayButton = document.querySelector(`#${this.mobButtonID}`),
                  volume = document.querySelector(`#${this.volumeID}`),
                  volOff = document.querySelector(`#${this.volNoneID}`),
                  progress = document.querySelector(`#${this.progressID}`),
                  videoCurrentTime = document.querySelector(`#${this.currentTimeID}`),
                  scrinModID = document.querySelector(`#${this.scrinModID}`),
                  thisScrin = document.querySelector(`#${this.openTrailer}`);

            playButton.addEventListener("click", function() {
                if (video.paused == true) {
                    video.play();
                    playButton.innerHTML = '<i class="fa-solid fa-pause"></i>';
                } else {
                    video.pause();
                    playButton.innerHTML = '<i class="fa-solid fa-play"></i>';
                }
            });

            mobilePlayButton.addEventListener("click", function() {
                if (video.paused == true) {
                    video.play();
                    mobilePlayButton.innerHTML = '<i class="fa-solid fa-pause"></i>';
                } else {
                    video.pause();
                    mobilePlayButton.innerHTML = '<i class="fa-solid fa-play"></i>';
                }
            });

            scrinModID.addEventListener("click" , function() {
                if (!document.fullscreenElement) {
                    thisScrin.requestFullscreen();
                    scrinModID.innerHTML = '<i class="fa-solid fa-compress"></i>';
                } else {
                    document.exitFullscreen();
                    scrinModID.innerHTML = '<i class="fa-solid fa-expand"></i>';
                }
            });

            volume.addEventListener("input", function() {
                let v = this.value;
                video.volume = v / 100;
                if (v == 0) {
                    volOff.innerHTML = '<i class="fa-solid fa-volume-xmark"></i>';
                } else {
                    volOff.innerHTML = '<i class="fa-solid fa-volume-high"></i>';
                } 
            });

            volOff.addEventListener("click", function() {
                if (volume.value == 0) {
                    volume.value = 50;
                    video.volume = 50 / 100;
                    volOff.innerHTML = '<i class="fa-solid fa-volume-high"></i>';
                } else {
                    volume.value = 0;
                    video.volume = 0;
                    volOff.innerHTML = '<i class="fa-solid fa-volume-xmark"></i>';
                } 
            });

            video.addEventListener("timeupdate", function() {
                progress.value = ((video.currentTime * 100) / video.duration);

                const minutes = Math.floor((+(video.currentTime).toFixed(0) / 60) % 60);
                let seconds = +(video.currentTime).toFixed(0);
                
                if (seconds > 59) {
                    seconds = (+(video.currentTime).toFixed(0)) - (Math.floor((+(video.currentTime).toFixed(0) / 60) % 60) * 60);
                } else {
                    seconds = seconds;
                }
                function getZero(num) {
                    if (num >= 0 && num < 10) {
                        return `0${num}`;
                    } else {
                        return num;
                    }
                }
                videoCurrentTime.innerHTML = `${getZero(minutes)} : ${getZero(seconds)}`;

                if (progress.value == 100) {
                    playButton.innerHTML = '<i class="fa-solid fa-arrows-rotate fa-spin"></i>';
                    mobilePlayButton.innerHTML = '<i class="fa-solid fa-arrows-rotate fa-spin"></i>';
                    playerTools.style.background = '#375ee866';
                    playerTools.style.borderRadius = '10px';
                } else {
                    playerTools.style.background = 'none';
                    playerTools.style.borderRadius = '0px';
                }

                
            });

            progress.addEventListener("click", function() {
                this.value = ((event.offsetX * 100) / this.offsetWidth);
                video.currentTime = video.duration * event.offsetX / this.offsetWidth;
            });
        }
    }
    const body = document.querySelector('.body');
    if(!body.classList.contains('moviePageBody')){
        // типа данные с сервера (табы трейлеров на главной)

        new TrailerTab(
            'images/trailers/mulan.png',
            'Мулан',
            '.trailer .trailer__slider .firstTS-box'
        ).render();
        new TrailerTab(
            'images/trailers/forseage-9.png',
            'Форсаж 9',
            '.trailer .trailer__slider .firstTS-box'
        ).render();
        new TrailerTab(
            'images/trailers/black-widow.png',
            'Чёрная Вдова',
            '.trailer .trailer__slider .firstTS-box'
        ).render();
        new TrailerTab(
            'images/trailers/quiet-place.png',
            'Тихое место 2',
            '.trailer .trailer__slider .firstTS-box'
        ).render();
        new TrailerTab(
            'images/trailers/escape.png',
            'Побег из Претории',
            '.trailer .trailer__slider .secondTS-box'
        ).render();
        new TrailerTab(
            'images/trailers/Duna.png',
            'Дюна',
            '.trailer .trailer__slider .secondTS-box'
        ).render();
        new TrailerTab(
            'images/trailers/sonic.png',
            'Соник в кино',
            '.trailer .trailer__slider .secondTS-box'
        ).render();
        new TrailerTab(
            'images/trailers/adios.png',
            'Прощай',
            '.trailer .trailer__slider .secondTS-box'
        ).render();

        // типа данные с сервера (для главной страницы)

        new TrailerActiveTab(
            'videoDB/mulan.mp4',
            'images/trailers/open-trailer-2.png',
            'Мулан',
            'mulan',
            '2 365',
            '510',
            '.trailer .openTrailerBase'
        ).render();
        new TrailerActiveTab(
            'videoDB/forseage-9.mp4',
            'images/trailers/open-trailer.png',
            'Форсаж 9',
            'forsage9',
            '3 245',
            '420',
            '.trailer .openTrailerBase'
        ).render();
        new TrailerActiveTab(
            'videoDB/black-widow.mp4',
            'images/trailers/open-trailer-3.png',
            'Чёрная Вдова',
            'blackwidow',
            '4 005',
            '620',
            '.trailer .openTrailerBase'
        ).render();
        new TrailerActiveTab(
            'videoDB/quiet-place-2.mp4',
            'images/trailers/open-trailer-4.png',
            'Тихое место 2',
            'quietplace2',
            '1 245',
            '866',
            '.trailer .openTrailerBase'
        ).render();
        new TrailerActiveTab(
            'videoDB/escape.mp4',
            'images/trailers/open-trailer-5.png',
            'Побег из Претории',
            'escape',
            '942',
            '82',
            '.trailer .openTrailerBase'
        ).render();
        new TrailerActiveTab(
            'videoDB/duna.mp4',
            'images/trailers/open-trailer-6.png',
            'Дюна',
            'duna',
            '1200',
            '801',
            '.trailer .openTrailerBase'
        ).render();
        new TrailerActiveTab(
            'videoDB/sonic.mp4',
            'images/trailers/open-trailer-7.png',
            'Соник в кино',
            'sonic',
            '3480',
            '953',
            '.trailer .openTrailerBase'
        ).render();
        new TrailerActiveTab(
            'videoDB/adios.mp4',
            'images/trailers/open-trailer-8.png',
            'Прощай',
            'adios',
            '581',
            '252',
            '.trailer .openTrailerBase'
        ).render();
    } else if (body.classList.contains('escape-from-pretoria')) {
       
        // типа данные с сервера (для побега из претории)

        new TrailerActiveTab(
            'videoDB/escape.mp4',
            'images/trailers/open-trailer-5.png',
            'Побег из Претории',
            'escape',
            '942',
            '82',
            '.movieTrailer .openTrailerBase'
        ).render();
    } else if (body.classList.contains('joker')) {
       
        // типа данные с сервера (для джокера)

        new TrailerActiveTab(
            'videoDB/joker-trailer.mp4',
            'images/trailers/joker-previev.png',
            'Джокер',
            'joker',
            '24030',
            '846',
            '.movieTrailer .openTrailerBase'
        ).render();
    } else if (body.classList.contains('star-wars')) {
       
        // типа данные с сервера (для звездных войн)

        new TrailerActiveTab(
            'videoDB/star-wars-t.mp4',
            'images/trailers/sw.png',
            'Звёздные войны: Скайуокер. Восход',
            'starWars',
            '1030',
            '2046',
            '.movieTrailer .openTrailerBase'
        ).render();
    } else if (body.classList.contains('gentlemen')) {
       
        // типа данные с сервера (для джентельменов войн)

        new TrailerActiveTab(
            'videoDB/gents-tr.mp4',
            'images/trailers/gents-trailer.png',
            'Джентльмены',
            'gentlemen',
            '32030',
            '10046',
            '.movieTrailer .openTrailerBase'
        ).render();
    } else if (body.classList.contains('ford-vs-ferrari')) {
       
        // типа данные с сервера (для форда против ферарри войн)

        new TrailerActiveTab(
            'videoDB/FORDVSFERRARI.mp4',
            'images/trailers/ford-vs-ferrari.png',
            'Ford против Ferrari',
            'fordVsFerrari',
            '44030',
            '11016',
            '.movieTrailer .openTrailerBase'
        ).render();
    }
});