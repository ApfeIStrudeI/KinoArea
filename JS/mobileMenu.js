window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.mobile__menu'),
    menuItem = document.querySelectorAll('.mobile__menu-link'),
    body = document.querySelector('.body'),
    hamburger = document.querySelector('.hamburger'),
    mobileMenuButton = document.querySelector('.mobileMenuButton'),
    logo = document.querySelector('#headerLogo');

    mobileMenuButton.addEventListener('click', () => {
        hamburger.classList.toggle('hamburger_active');
        menu.classList.toggle('mobile__menu_active');
        body.classList.toggle('body_active');
    });
    logo.addEventListener('click', () => {
        hamburger.classList.remove('hamburger_active');
        menu.classList.remove('mobile__menu_active');
        body.classList.remove('body_active');
    })
    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('hamburger_active');
            menu.classList.toggle('mobile__menu_active');
            body.classList.toggle('body_active');
        })
    });
});