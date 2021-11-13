let count = 0;
let sliderLine = document.querySelector('.slider_line')
let nextBtn = document.querySelector('#nextBtn')
let prevBtn = document.querySelector('#prevBtn')

nextBtn.addEventListener('click', () => {
    count += 500;

    if ( count > 2000 ) {
        count = 0;
    }

    sliderLine.style.left = -count+'px';
});

prevBtn.addEventListener('click', () => {
    count -= 500;

    if ( count < 0 ) {
        count = 2000;
    }

    sliderLine.style.left = -count+'px';
});



