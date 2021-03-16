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
function productsSlider() {
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
            responsive: {
                0: {
                    items: 1,
                    dots: false,
                },
                500: {
                    items: 2,
                    dots: false,
                },
                767: {
                    items: 3,
                    dots: false,
                },
                992: {
                    items: 4
                }
            }
        });

        var dotActive = $('.owl-dots').children('.active');
        var dots = $('.owl-dots').children()

        dots.each(function (index, value) {
            if ($(this).attr('class') === 'owl-dot active') {
                $(this).next().addClass('dot-next').next().addClass('dot-next-next');
            }
        });

        sliderProducts.on('translate.owl.carousel', function (e) {
            dots.removeClass('dot-next').removeClass('dot-next-next')
            dots.removeClass('dot-prev').removeClass('dot-prev-prev')
            dots.each(function (index, value) {
                if ($(this).attr('class') === 'owl-dot active') {
                    $(this).next().addClass('dot-next').next().addClass('dot-next-next');
                    $(this).prev().addClass('dot-prev').prev().addClass('dot-prev-prev');
                }
            });

        })
    });
}
productsSlider();
//========================/SLIDER=====================
//========================SLIDER=====================
function collectionsSlider() {
    $(document).ready(function () {
        var sliderCollection = $('.collection__slider');

        sliderCollection.owlCarousel({
            items: 3,
            slideBy: 3,
            margin: 24,
            autoHeight: true,
            loop: true,
            mouseDrag: true,
            touchDrag: true,
            dots: true,
            nav: true,
            navText: ["", ""],
            responsive: {
                0: {
                    items: 1,
                    dots: false,
                    nav: false,
                },
                500: {
                    items: 2,
                    dots: false,
                    nav: false,
                },
                992: {
                    items: 3
                }
            }
        });
        /* var collectionCont = $('.collection__contain');
        collectionCont.append('<div class="collection__nav"></div>'); */
        //=============================EXPEREMENT============================================
        const wrap = document.querySelector('.collection__slider');
        const navArr = wrap.querySelector('.owl-nav');
        const navDots = wrap.querySelector('.owl-dots');
        navArr.querySelector('.owl-prev').after(navDots);
        navArr.classList.add('collection__arr');
        navDots.classList.add('collection__dots');


        //=============================EXPEREMENT============================================

        var dots = $('.owl-dots').children()

        dots.each(function (index, value) {
            if ($(this).attr('class') === 'owl-dot active') {
                $(this).next().addClass('dot-next').next().addClass('dot-next-next');
            }
        });

        sliderCollection.on('translate.owl.carousel', function (e) {
            dots.removeClass('dot-next').removeClass('dot-next-next')
            dots.removeClass('dot-prev').removeClass('dot-prev-prev')
            dots.each(function (index, value) {
                if ($(this).attr('class') === 'owl-dot active') {
                    $(this).next().addClass('dot-next').next().addClass('dot-next-next');
                    $(this).prev().addClass('dot-prev').prev().addClass('dot-prev-prev');
                }
            });

        })
    });
}

collectionsSlider();

//========================/SLIDER=====================


