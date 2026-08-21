//메뉴
$("nav>ul>li").mouseenter(function() {
    $(this).children(".sub").stop().fadeIn();
})
$("nav>ul>li").mouseleave(function() {
    $(this).children(".sub").stop().fadeOut();
})

//슬라이드
let i = 0;
function slide() {
    if (i < 2) {
        i++;
    } else {
        i = 0;
    }
    $(".slide ul li").stop().fadeOut();
    $(".slide ul li").eq(i).stop().fadeIn();
}
setInterval(slide, 3000);

//탭메뉴
let t;
$(".tabmenu>li").click(function(e) {
    e.preventDefault();
    $(".tabmenu>li").removeClass("on");
    $(this).addClass("on");

    t = $(this).index();
    console.log(t);

    $(".tabcon").hide();
    $(".tabcon").eq(t).show();
})

//팝업
$(".pop").click(function(e) {
    e.preventDefault();
    $("#popup").show();
});
$(".close button").click(function() {
    $("#popup").hide();    
})