//메뉴
$("nav>ul>li").mouseover(function() {
    $(".sub, .menuBg").stop().slideDown();
});
$("nav>ul>li").mouseout(function() {
    $(".sub, .menuBg").stop().slideUp();
});

//슬라이드
let i = 0;
function slide() {
    if (i < 2) {
        i++;
    } else {
        i = 0;
    }
    $(".slide ul").animate({marginLeft: -1200 * i}, 1000);
}
setInterval(slide, 3000);

//탭메뉴
let t; 
$(".tabmenu>li").click(function(e) {
    e.preventDefault();
    $("tabmenu>li").removeClass("on");
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
