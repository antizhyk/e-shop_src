//========================SPOILER=====================
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
//========================/SPOILER=====================
//=========================SLIDER======================
const subslides = document.querySelectorAll('.slider__item'),
    prev = document.querySelector('.products__arrow_p'),
    next = document.querySelector('.products__arrow_n'),
    slider = document.querySelector('.slider'),
    slidesField = document.querySelector('.slider__wrap'),
    indicators = document.querySelector('.products__dots'),
    dots = [],
    width = window.getComputedStyle(slider).width,
    numWith = Math.round(+width.slice(0, width.length - 2));

let arrItems = [];
let slideIndex = 1;
let indent = 0;

function addClassNeighbour(arrDots) {
    arrDots.forEach((dot, index) => {
        if (index == slideIndex - 1) {
            dot.classList.add('products__dot_active');
        } else {
            dot.classList.remove('products__dot_active');
        }
        if (index == slideIndex - 2 || index == slideIndex) {
            dot.classList.add('products__dot_neighbour');
        } else {
            dot.classList.remove('products__dot_neighbour');
        }
        if (index == slideIndex - 3 || index == slideIndex + 1) {
            dot.classList.add('products__dot_predecessor');
        } else {
            dot.classList.remove('products__dot_predecessor');
        }
    });
}
function addWrapBlok(list, nameClass, quantity) {
    list.forEach((el, index, arr) => {
        if (arrItems.length < quantity) {
            arrItems.push(el);
        } else if (arrItems.length === quantity) {
            let blockWrap = document.createElement('div');
            blockWrap.classList.add(nameClass);
            arrItems.forEach(el => {
                blockWrap.append(el);
            })
            slidesField.append(blockWrap);
            arrItems = [];
        }
        if (index == (arr.length - 1) && arrItems.length > 0) {
            let blockWrap = document.createElement('div');
            blockWrap.classList.add(nameClass);
            arrItems.forEach(el => {
                blockWrap.append(el);
            })
            slidesField.append(blockWrap);
            arrItems = [];
        }
    })
}

if (document.documentElement.clientWidth > 991.98) {
    addWrapBlok(subslides, 'slider__block', 4);
} else if (document.documentElement.clientWidth < 991.98 && document.documentElement.clientWidth > 767.98) {
    addWrapBlok(subslides, 'slider__block', 3);
} else if (document.documentElement.clientWidth < 767.98 && document.documentElement.clientWidth > 479.98) {
    addWrapBlok(subslides, 'slider__block', 2);
} else if (document.documentElement.clientWidth < 479.98) {
    addWrapBlok(subslides, 'slider__block', 1);
}


subslides.forEach(el => {
    if (!el.parentElement.classList.contains('slider__block')) {
        el.style.display = "none";
    }
})

const slides = document.querySelectorAll('.slider__block')

slidesField.style.width = 100 * slides.length + '%';
slides.forEach(slide => {
    slide.style.width = width;
})

for (let i = 0; i < slides.length; i++) {
    const dot = document.createElement('span');
    dot.classList.add('products__dot');
    dot.setAttribute('data-slide-to', i + 1);
    if (i == 0) {
        dot.classList.add('products__dot_active');
    } else if (i == 1) {
        dot.classList.add('products__dot_neighbour');
    } else if (i == 2) {
        dot.classList.add('products__dot_predecessor');
    }
    indicators.append(dot);
    dots.push(dot);
}
next.addEventListener('click', () => {
    if (indent === numWith * (slides.length - 1)) {
        indent = 0;
        slideIndex = 1;
    } else {
        indent += numWith;
        slideIndex += 1;
    }
    slidesField.style.transform = `translate(-${indent}px)`;
    addClassNeighbour(dots);
});
prev.addEventListener('click', () => {
    if (indent === 0) {
        indent = numWith * (slides.length - 1);
        slideIndex = slides.length;
    } else {
        indent -= numWith;
        slideIndex -= 1;
    }
    slidesField.style.transform = `translate(-${indent}px)`;
    addClassNeighbour(dots);
});

dots.forEach(dot => {
    dot.addEventListener('click', (e) => {
        const slideTo = e.target.getAttribute('data-slide-to');
        slideIndex = slideTo;
        indent = (Math.round(+width.slice(0, width.length - 2))) * (slideTo - 1);
        slidesField.style.transform = `translate(-${indent}px)`;
        addClassNeighbour(dots);
    })
})

//=========================/SLIDER======================


