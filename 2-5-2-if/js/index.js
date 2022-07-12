let fileNum = Math.floor(Math.random() * 4) + 1;
const $pic = $('#Pic');


// console.log(Math.floor(Math.random()*10));

$pic.attr('src', './images/ui0' + fileNum + '.jpg');
// $('#Pic').attr('src', `./images/ui0${fileNum}.jpg`);

$pic.click(function () {

    // if (fileNum < 4) {
    //     // fileNum = fileNum + 1;
    //     // fileNum += 1;
    //     fileNum++;
    // }
    // else {
    //     fileNum = 1;
    // }


    fileNum = Math.floor(Math.random() * 4) + 1;
    
    $pic.attr('src', './images/ui0' + fileNum + '.jpg');
});