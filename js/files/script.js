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
//========================SLIDER=====================
$(document).ready(function () {
    var sliderProducts = $('.products__slider');

    sliderProducts.owlCarousel({
        items: 4,
        slideBy: 4,
        loop: true,
        mouseDrag: true,
        touchDrag: true,
        dots: true,
        nav: true,
        navText: ["", ""],
    });

    var dotActive = $('.owl-dots').children('.active');
    var dots = $('.owl-dots').children()

    dots.each(function (index, value) {
        console.log($(this).attr('class'));
        if ($(this).attr('class') === 'owl-dot active') {
            console.log($(this).next());
            $(this).next().addClass('dot-next').next().addClass('dot-next-next');
        }
    });


    sliderProducts.on('translate.owl.carousel', function (e) {
        dots.removeClass('dot-next').removeClass('dot-next-next')
        dots.removeClass('dot-prev').removeClass('dot-prev-prev')
        console.log(dotActive);
        dots.each(function (index, value) {
            console.log($(this).attr('class'));
            if ($(this).attr('class') === 'owl-dot active') {
                console.log($(this).next());
                $(this).next().addClass('dot-next').next().addClass('dot-next-next');
                $(this).prev().addClass('dot-prev').prev().addClass('dot-prev-prev');
            }
        });

    })
});
//========================/SLIDER=====================


