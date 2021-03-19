//=====================ПЕРЕКЛЮЧЕНИЕ СЕТКА-СПИСОК=============
const funcSwitch = document.querySelector('.func__switch');
const funcWrap = document.querySelector('.content__wrap');
const mediaQuery = window.matchMedia('(max-width: 600px)');

funcSwitch.addEventListener('click', () => {
    funcWrap.classList.toggle('content__grid')
    funcSwitch.classList.toggle('func__switch_grid')
})


/* function handleTabletChange(e) {
    if (e.matches) {
        funcSwitch.style.display = 'none';
        funcWrap.classList.add('content__grid')
    } else {
        funcSwitch.style.display = 'block';
        funcWrap.classList.add('content__grid')
        funcSwitch.classList.add('func__switch_grid')
    }
}
mediaQuery.addListener(handleTabletChange)
handleTabletChange(mediaQuery) */
//=====================/ПЕРЕКЛЮЧЕНИЕ СЕТКА-СПИСОК=============
//=====================/Перемещение элемента=============
/* const contentBlock = document.querySelectorAll('.content__item');



contentBlock.forEach(el => {
    console.log(el.children);
    for (let i = 0; i < el.children.length; i++) {
        if (el.children[i].classList.contains('content__picture')) {
            console.log(el.children[i + 1]);
            children[i + 1].prepend(el.children[i]);
        }

    }
    el.children.forEach(item => {
        console.log(item);
        if (item.classList.contains('content__picture')) {
            console.log(item);
        }
    })
}) */
//=====================/Перемещение элемента=============
