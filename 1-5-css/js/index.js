// 賦值
const $btnLg = $('#BtnLg')
const $btnSm = $('#BtnSm')
const $content = $('#Content')

$btnLg.click(function () {
    // alert(222)
    // $('#Content').css('font-size', 20);
    // $('#Content').css('font-weight', 600);
    $content.css({
        'font-size': 20,
        fontWeight: 600
    })
});

$btnSm.click(function () {
    $content.css('font-size', 15);
});