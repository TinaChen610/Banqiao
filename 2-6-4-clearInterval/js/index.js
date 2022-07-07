let fileNum = 1;
let picInterval;


//init
picInterval = setInterval(doNext,100);

//event
$('#Wrap').mouseenter(function(){
    clearInterval(picInterval);
});

$('#Wrap').mouseleave(function(){
    picInterval = setInterval(doNext,100);
});

$('#BtnNext').click(function(){
    doNext();
});

$('#BtnPrev').click(function(){
    doPrev();
});

function doNext() {
    if (fileNum < 24) {
        fileNum++;
    }
    else {
        fileNum = 1;
    }
    $('#Pic').attr('src', './images/pic' + fileNum + '.jpg');
}

function doPrev() {
    if (fileNum > 1) {
        fileNum--;
    }
    else {
        fileNum = 24;
    }
    $('#Pic').attr('src', './images/pic' + fileNum + '.jpg');
}