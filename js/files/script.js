//========================SPOILER=====================
let menuBody = document.querySelector('.menu__list');
let spollerList = document.querySelector('.spoller__list');
let spollerTitle = document.querySelector('.spoller__title');
let mainLink = document.querySelectorAll('.menu__link_m');
let spollerIcon = document.querySelector('.spoller__icon_m')
let irit = [];
let bodyMenu = document.querySelector('.menu__body');
spollerList.style.opacity = 0;


bodyMenu.addEventListener('touchend', (e) => {
    const targ = e.target;
    if (targ === spollerIcon) {
        document.querySelectorAll('.spoller__list > li > a').forEach(el => {
            irit.push(el);
            return irit;
        })
        if (e.target == spollerIcon && !spollerList.classList.contains('active')) {
            spollerList.classList.add('active');
            spollerTitle.classList.add('arrow');
            mainLink.forEach(el => {
                el.style.cssText = `
                pointer-events: none;
                cursor: default;
                `
            });

            setTimeout(() => {
                spollerList.style.opacity = 1
            }, 10);
        }
    }
    if (targ !== spollerIcon && spollerList.classList.contains('active')) {
        irit.forEach(item => {
            if (e.target !== item) {
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
    }

});

spollerTitle.addEventListener('mouseover', e => {
    document.querySelectorAll('.spoller__list > li').forEach(el => {
        if (e.target == el) {
            irit = el;
            return irit;
        }
    })
    if (e.target == spollerTitle && !spollerList.classList.contains('active')) {
        spollerList.classList.add('active');
        spollerTitle.classList.add('arrow');
        if (document.documentElement.clientWidth < 600) {
            mainLink.forEach(el => {
                el.style.cssText = `
                pointer-events: none;
                cursor: default;
                `
            });
        }
        setTimeout(() => {
            spollerList.style.opacity = 1
        }, 10);

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
spollerTitle.addEventListener('mouseout', e => {
    document.querySelectorAll('.spoller__list > li').forEach(el => {
        if (e.target == el) {
            irit = el;
            return irit;
        }
    })
    if (e.target !== irit) {
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

        var dots = $('.collection__dots').children()

        dots.each(function (index, value) {
            if ($(this).attr('class') === 'owl-dot active') {
                $(this).next().addClass('dot-next').next().addClass('dot-next-next');
            }
        });

        sliderCollection.on('changed.owl.carousel', function (e) {
            dots.removeClass('dot-next').removeClass('dot-next-next')
            dots.removeClass('dot-prev').removeClass('dot-prev-prev')
            dots.each(function (index, value) {
                if ($(this).attr('class') === 'owl-dot active') {
                    if (index === 0) {
                        $(this).next().addClass('dot-next').next().addClass('dot-next-next');
                    } else if (index === dots.length - 1) {
                        $(this).prev().addClass('dot-prev').prev().addClass('dot-prev-prev');
                    } else if (index > 0 && index < dots.length) {
                        $(this).next().addClass('dot-next')
                        $(this).prev().addClass('dot-prev')
                    }
                    /*  $(this).next().addClass('dot-next').next().addClass('dot-next-next');
                     $(this).prev().addClass('dot-prev').prev().addClass('dot-prev-prev'); */
                }
            });
        })
        sliderCollection.on('next.owl.carousel', function (e) {
            console.log('hi');
        })
    });
}

collectionsSlider();

//========================/SLIDER=====================


