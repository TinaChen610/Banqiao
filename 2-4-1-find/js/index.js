

$('#LessonLs .lesson-title').click(function(){
    $(this).siblings().stop(true, false).slideToggle();
    $(this).parent().siblings().find('.lesson-desc').slideUp();
});