$(function(){
    $(".main > li").hover(function(){
        $(this).children(".sub").stop().slideDown();
    }, function(){
        $(this).children(".sub").stop().slideUp();
    })/* hover */

    $(".fade li").eq(0).siblings().hide();
    var i = 0;
    setInterval(function(){
        if(i==2){
            i=0;
        }
        else{
            i++;
        }
        console.log(i);
        $(".fade li").eq(i).fadeIn().siblings().fadeOut();
    }, 2500)/* fade */

    $(".cont1 h2").click(function(){
        $(".cont1 h2").addClass("off");
        $(this).removeClass("off");
        $(".cont1 ul").hide();
        $(this).next().css({display : "flex"})
    })/* click */

    $(".popup").click(function(){
        $(".pop").show();
    })
    $(".close").click(function(){
        $(".pop").hide();
    })
})