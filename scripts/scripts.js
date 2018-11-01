var slides = document.querySelectorAll('.accessories-slider-wrap .accessories-slider-wrap-slide');
var currentSlide = 0;
var interval = setInterval(nextSlide, 1500);

function nextSlide() {
    slides[currentSlide].className = 'accessories-slider-wrap-slide';
    currentSlide = (currentSlide+1)%slides.length;
    slides[currentSlide].className = 'accessories-slider-wrap-slide show';
}