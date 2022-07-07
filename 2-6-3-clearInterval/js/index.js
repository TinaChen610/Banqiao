let fileNum = 1;
let picInterval;
const duration = 50;

//初始化，自動定時換圖
picInterval = setInterval(doNext, duration);

//事件控制
$('#BtnPause').click(function () {
    clearInterval(picInterval);
});

$('#BtnPlay').click(function () {

    clearInterval(picInterval)
    picInterval = setInterval(doNext, duration);
});

function doNext() {
    if (fileNum < 24) {
        fileNum = fileNum + 1;
    } else {
        fileNum = 1;
    }
    $('#Pic').attr('src', './images/pic' + fileNum + '.jpg');

}