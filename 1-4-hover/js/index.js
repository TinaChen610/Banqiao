// $("#Item1").mouseenter(function(){
//     alert("滑入");
// });

// $("#Item1").mouseleave(function(){
//     alert("滑出");
// });

$("#Item1").hover(function(){
    $("#Child1").stop(true, false).slideDown(1000);
}, function(){
    $("#Child1").stop(true, false).slideUp(1000);
});

$("#Item2").hover(function(){
    $("#Child2").stop(true, false).slideDown(1000);
}, function(){
    $("#Child2").stop(true, false).slideUp(1000);
});

$("#Item3").hover(function(){
    $("#Child3").stop(true, false).slideDown(1000);
}, function(){
    $("#Child3").stop(true, false).slideUp(1000);
});

$("#Item4").hover(function(){
    $("#Child4").stop(true, false).slideDown();
}, function(){
    $("#Child4").stop(true, false).slideUp();
});

$("#Item5").hover(function(){
    $("#Child5").stop(true, false).slideDown();
}, function(){
    $("#Child5").stop(true, false).slideUp();
});
