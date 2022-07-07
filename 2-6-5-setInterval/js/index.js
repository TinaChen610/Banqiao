const $slide = $('#Slide');
const $slideImgInner = $slide.find('.img-inner');
let index = 0;
let picInterval;
const duration = 2000;

picInterval = setInterval(setSlide, duration);

$slide.hover(function () {
    clearInterval(picInterval);
}, function () {
    picInterval = setInterval(setSlide, duration);
});

function setSlide() {
    if (index < 4) {
        index++;
    }
    else {
        index = 0;
    }
    $slideImgInner.css('left', -index * 100 + '%')
};