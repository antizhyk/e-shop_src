
let menuBody = document.querySelector('.menu__list');
let spollerList = document.querySelector('.spoller__list');
let spollerTitle = document.querySelector('.spoller__title');
let irit = null;
spollerList.style.opacity = 0;


document.querySelector('body').addEventListener('click', e => {
    document.querySelectorAll('.spoller__list > li').forEach(el => {
        if (e.target == el) {
            irit = el;
            return irit;
        }
    })

    if (e.target == spollerTitle && !spollerList.classList.contains('active')) {
        spollerList.classList.add('active');
        spollerTitle.classList.add('arrow');
        setTimeout(() => {
            spollerList.style.opacity = 1
        }, 10);
        ;
    } else if (e.target !== irit) {
        spollerList.classList.remove('active');
        spollerTitle.classList.remove('arrow');
        let interval = setInterval(() => {
            spollerList.style.opacity = 0;
        }, 100);
        setTimeout(() => {
            clearInterval(interval);
        }, 101);
    }
})



