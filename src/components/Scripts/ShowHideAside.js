const Arrows = document.querySelectorAll('#showHide');

Arrows.forEach((arrow) => {
    arrow.addEventListener('click', () => {
        if(document.querySelector('[ArrowRight]').style.display !== 'none'){
            document.querySelector('[ArrowRight]').style.animation = 'hideArrow 0.5s forwards';
    document.querySelector('[ArrowRight]').style.display = 'none';
    document.querySelector('aside').style.animation = 'hideAside 0.5s forwards';
    document.querySelector('[ArrowLeft]').style.display = 'initial';
    document.querySelector('[ArrowLeft]').style.animation = 'showArrow 0.5s forwards';
        }
        else{
            document.querySelector('aside').style.animation = 'showAside 0.5s forwards';
document.querySelector('[ArrowLeft]').style.animation = 'hideArrow 0.5s forwards';
document.querySelector('[ArrowLeft]').style.display = 'none';
document.querySelector('[ArrowRight]').style.animation = 'showArrow 0.5s forwards';
document.querySelector('[ArrowRight]').style.display = 'initial';
        }
    })
})