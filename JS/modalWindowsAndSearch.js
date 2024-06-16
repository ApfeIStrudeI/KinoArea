window.addEventListener('DOMContentLoaded', () => {

    class Modal {
        constructor(data) {
            this.modalTrigger = data.modalTrigger;
            this.modalWindow = data.modalWindow;
            this.modalCloseBtn = data.modalCloseBtn;
            this.buttonReg = data.buttonReg;
            this.autorisationForm = data.autorisationForm;
            this.registrationForm = data.registrationForm;
        }
        ModalMechanism() {
            const modalTrigger = this.modalTrigger,
                  modalWindow = this.modalWindow,
                  modalCloseBtn = this.modalCloseBtn,
                  buttonReg = this.buttonReg,
                  autorisationForm = this.autorisationForm,
                  registrationForm = this.registrationForm;
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
                    if (buttonReg != undefined) {
                        autorisationForm.classList.remove('hide');
                        registrationForm.classList.add('hide');
                    }
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

            if (buttonReg != undefined) {
                buttonReg.addEventListener('click', () => {
                    autorisationForm.classList.add('hide');
                    registrationForm.classList.remove('hide');
                    registrationForm.classList.add('fade');
                });
            }
        }
    };

    new Modal({
        modalTrigger: document.querySelectorAll('[data-modal]'),
        modalWindow: document.querySelector('.modal'),
        modalCloseBtn: document.querySelector('[data-close]'),
        buttonReg: document.querySelector('#toRegistration'),
        autorisationForm: document.querySelector('.autorisationForm'),
        registrationForm: document.querySelector('.registrationForm')
    }).ModalMechanism();

    new Modal({
        modalTrigger: document.querySelectorAll('[data-searchactive]'),
        modalWindow: document.querySelector('.search'),
        modalCloseBtn: document.querySelector('[data-sc]')
    }).ModalMechanism();
});