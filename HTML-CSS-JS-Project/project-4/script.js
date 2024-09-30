document.addEventListener('DOMContentLoaded', function () {
    const hamburger = document.querySelector('.hamburger');
    const menu = document.querySelector('.menu-1');

    hamburger.addEventListener('click', function () {
        menu.classList.toggle('show');
    });
});
