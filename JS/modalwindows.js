window.addEventListener('DOMContentLoaded', () => {

    // Modal window
    const modalTrigger = document.querySelectorAll('[data-modal]'),
          modalWindow = document.querySelector('.modal'),
          modalCloseBtn = document.querySelector('[data-close]'),
          buttonReg = document.querySelector('#toRegistration'),
          autorisationForm = document.querySelector('.autorisationForm'),
          registrationForm = document.querySelector('.registrationForm');

    modalTrigger.forEach(function (i) {
        i.addEventListener('click', openModal);
    });

    function openModal() {
        modalWindow.classList.add('show', 'quicklyFade');
        modalWindow.classList.remove('hide');
        document.body.style.overflowY = 'hidden';
        modalWindow.style.opacity = '100';
    }

    function closeModal() {
        modalWindow.style.opacity = '0';

        setTimeout( () => {
            modalWindow.classList.add('hide');
            modalWindow.classList.remove('show');
            document.body.style.overflowY = 'scroll';

            autorisationForm.classList.remove('hide');
            registrationForm.classList.add('hide');
        }, 500);
    }

    modalCloseBtn.addEventListener('click', closeModal);

    modalWindow.addEventListener('click', (e) => {
        if (e.target === modalWindow) {
            closeModal();
        }
    });

    document.addEventListener('keydown', (e) => {
        if (e.code === 'Escape' && modalWindow.classList.contains('show')) {
            closeModal();
        }
    });

    buttonReg.addEventListener('click', () => {
        autorisationForm.classList.add('hide');
        registrationForm.classList.remove('hide');
        registrationForm.classList.add('fade');
    });
});