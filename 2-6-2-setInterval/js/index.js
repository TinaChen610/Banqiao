let fileNum = 1;
const $pic = $('#Pic');

setInterval(function () {
    if (fileNum < 5) {
        fileNum++;
    }
    else {
        fileNum = 1;
    }
    $pic.attr('src', './images/photo' + fileNum + '.jpg')
}, 2000);