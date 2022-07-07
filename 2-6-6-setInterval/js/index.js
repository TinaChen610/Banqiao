const $slide = $('#Slide');
const $slideImgInner = $slide.find('.img-inner');
let index = 0;
let picInterval;
const duration = 2000;
const $paginationItems = $('#Pagination .pagination-item');
// const $pagination =$('#Pagination');
// const $paginationItems = $pagination.find('.pagination-item');

//init
$slideImgInner.css('left', -index * 100 + '%');
$paginationItems.eq(index).addClass('js-pagination-item');
// picInterval = setInterval(setSlide, duration);


//event
$slide.hover(function () {
    clearInterval(picInterval);
}, function () {
    picInterval = setInterval(setSlide, duration);
});

$paginationItems.click(function(){
    index = $(this).index();
    $slideImgInner.css('left', -index * 100 + '%');
    $paginationItems
        .eq(index).addClass('js-pagination-item')
        .siblings().removeClass('js-pagination-item');
});

function setSlide() {
    if (index < 4) {
        index++;
    } else {
        index = 0;
    }
    $slideImgInner.css('left', -index * 100 + '%');
    $paginationItems
        .eq(index).addClass('js-pagination-item')
        .siblings().removeClass('js-pagination-item');
};