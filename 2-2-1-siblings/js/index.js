const $advItems = $('#AdvLs .adv-item');
const timer = 200;

$('#AdvLs .adv-item').hover(function(){
    $(this).stop(true, false).animate({top: 0}, timer);
    $(this).siblings().stop(true, false).animate({top:118}, timer);
}, function(){
    // $(this).stop(true, false).animate({top: 166}, 200);
    // $(this).siblings().stop(true, false).animate({top:166}, 200);
    $advItems.stop(true,false).animate({top : 166}, timer);
});