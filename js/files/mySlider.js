

function breakPointGroup(sliderBlock, classToBlock, slideContent, classToContent, count) {
    function breakPoint(e) {
        if (e.matches) {
            document.querySelectorAll(sliderBlock).forEach(el => {
                var fragment = document.createDocumentFragment();
                while (el.firstChild) {
                    fragment.appendChild(el.firstChild);
                }
                el.parentNode.replaceChild(fragment, el);
            })
            addWrapBlok(slideContent, classToBlock, count);
            let slides = document.querySelectorAll(sliderBlock)

            /* console.log(slidesField.childNodes); */
            slidesField.childNodes.forEach(el => {
                if (typeof el !== null && el.nodeName == 'DIV') {
                    /* console.log(el); */
                    if (el.classList.contains(classToContent)) {
                        el.remove();
                    }
                }
            })
            slides.forEach(slide => {
                slide.style.width = getComputedStyle(slider).width;
            })
            slidesField.style.width = 100 * slides.length + '%'; //Ширина обертки слайдера
            width = getComputedStyle(slider).width;
            numWith = Math.round(+width.slice(0, width.length - 2));
            indent = 0;
            console.log(indent);
            slidesField.style.transform = `translate(-${indent}px)`;
            return { slides, width, numWith };
        }
    }
    breakPoint();
}