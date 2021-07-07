

// Slider für die Sprüche

const slider = document.querySelector('.texte');
const leftArrow = document.querySelector('.left');
const rightArrow = document.querySelector('.right')
let slideIndex = 0; 

leftArrow.addEventListener('click', function () {
    slideIndex = (slideIndex > 0) ? slideIndex - 1 : 0;
    slider.style.transform = 'translate(' + (slideIndex) * -25 + '%)';
});

rightArrow.addEventListener('click', function () {
    slideIndex = (slideIndex < 3) ? slideIndex + 1 : 3;
    slider.style.transform = 'translate(' + (slideIndex) * -25 + '%)';
});
