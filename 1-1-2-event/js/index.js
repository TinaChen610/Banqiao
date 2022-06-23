//第一種寫法
// $("h1").on("click", AA);

// function AA(){
//     alert("嗨!");
// }

//第二種寫法
// $("h1").on("click", function (){
//     alert("嗨!");
// });


//第三種寫法
// $("h1").click(function (){
//     alert("嗨!");
// });

//第四種寫法
$("h1").click(() => {
    alert("嗨!");
});





