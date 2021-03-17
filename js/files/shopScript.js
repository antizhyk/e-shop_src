const funcSwitch = document.querySelector('.func__switch');
const funcWrap = document.querySelector('.content__wrap');
const mediaQuery = window.matchMedia('(max-width: 600px)');

funcSwitch.addEventListener('click', () => {
    funcWrap.classList.toggle('content__grid')
    funcSwitch.classList.toggle('func__switch_grid')
})


function handleTabletChange(e) {
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
handleTabletChange(mediaQuery)