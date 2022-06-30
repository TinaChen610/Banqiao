const $thumbItems = $('#ThumbLs > img');
const $picItems = $('#PicLs > img')

$thumbItems.click(function(){
    // index(): 取得 DOM 的索引值，由0開始
    // console.log($(this).index());
    const index = $(this).index();
    // console.log(index);
    // $picItems.fadeOut();
    // $picItems.eq(index).fadeIn();
    $picItems.eq(index).fadeIn().siblings().fadeOut();
});