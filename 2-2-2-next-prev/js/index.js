const $advItems = $('#AdvLs .adv-item');
const duration = 200;

$advItems.hover(function(){
    $(this).stop(true,false).animate({top:0}, duration);
    $(this).prev().stop(true, false).animate({top:118}, duration);
    $(this).next().stop(true, false).animate({top:118}, duration);
}, function () {
    $advItems.stop(true, false).animate({top: 166}, 500);
}); 