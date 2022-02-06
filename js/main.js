let menuBtn = document.querySelector('.menu__btn');
let menuBurg = document.querySelector('.menu__burger')
let intervalId;
// document.querySelectorAll('.selectField').forEach((el) => {
//     el.addEventListener('click', () => {
//         let content = el.nextElementSibling
//         if (content.style.display) {
//             document.querySelectorAll('.content').forEach((el) => el.style.display = null)
//         } else {
//             document.querySelectorAll('.content').forEach((el) => el.style.display = null)
//             content.style.display = content.display + 'block'
//         }
//     })
// })

document.querySelectorAll('.selectField').forEach(e => {
    e.addEventListener('click', e => {
        const menu = e.currentTarget.dataset.path
        document.querySelectorAll('.hide').forEach(e => {
            if (!document.querySelector(`[data-target=${menu}]`).classList.contains('open')) {
                document.querySelector(`[data-target=${menu}]`).classList.add('menu-active')
              intervalId =  setTimeout(() => {
                  document.querySelector(`[data-target=${menu}]`).classList.add('open');
                },0)
            }
            if (document.querySelector(`[data-target=${menu}]`).classList.contains('open')) {
                clearTimeout(intervalId)
                document.querySelector(`[data-target=${menu}]`).classList.remove('menu-active')
                intervalId = setTimeout(() => {
                    document.querySelector(`[data-target=${menu}]`).classList.remove('open')
                }, 0)
            }
        })
    })
})
// const selecttext = document.getElementById('selecttext')
const serviceMenu = document.querySelectorAll('.serviceMenu')

menuBtn.addEventListener('click', function () {
    menuBtn.classList.toggle('active');
    menuBurg.classList.toggle('active')
})

// selectField.addEventListener('click', function () {
    
//     serviceMenu.classList.toggle('hide')
// })
    