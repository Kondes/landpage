let menuBtn = document.querySelector('.menu__btn');
let menuBurg = document.querySelector('.menu__burger')

menuBtn.addEventListener('click', function () {
    menuBtn.classList.toggle('active');
    menuBurg.classList.toggle('active')
})