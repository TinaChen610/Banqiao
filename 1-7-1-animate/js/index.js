$('#BtnRight').click(() => {
    $('#Rocket').animate({
        left:1700,
        top:780,
    }, 500);
});

$('#BtnLeft').click(() => {
    $('#Rocket').animate({
        left:0,
        top:0,
    }, 500);
})