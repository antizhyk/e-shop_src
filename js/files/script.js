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
const slides = document.querySelectorAll('.slider__block'),
    prev = document.querySelector('.products__arrow_p'),
    next = document.querySelector('.products__arrow_n'),
    slider = document.querySelector('.slider'),
    slidesField = document.querySelector('.slider__wrap'),
    indicators = document.querySelector('.products__dots'),
    dots = [],
    width = window.getComputedStyle(slider).width;

let slideIndex = 1;
let indent = 0;

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
    if (indent === Math.round(+width.slice(0, width.length - 2)) * (slides.length - 1)) {
        indent = 0;
        slideIndex = 1;
    } else {
        indent += Math.round(+width.slice(0, width.length - 2));
        slideIndex += 1;
    }
    slidesField.style.transform = `translate(-${indent}px)`;
    dots.forEach((dot, index) => {
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
});
prev.addEventListener('click', () => {
    if (indent === 0) {
        indent = Math.round(+width.slice(0, width.length - 2)) * (slides.length - 1);
        slideIndex = slides.length;
    } else {
        indent -= Math.round(+width.slice(0, width.length - 2));
        slideIndex -= 1;
    }
    slidesField.style.transform = `translate(-${indent}px)`;
    dots.forEach((dot, index) => {
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
});

dots.forEach(dot => {
    dot.addEventListener('click', (e) => {
        const slideTo = e.target.getAttribute('data-slide-to');
        slideIndex = slideTo;
        indent = (Math.round(+width.slice(0, width.length - 2))) * (slideTo - 1);
        slidesField.style.transform = `translate(-${indent}px)`;

        dots.forEach((dot, index) => {
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
    })
})
//=========================/SLIDER======================


