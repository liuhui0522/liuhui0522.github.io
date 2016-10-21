/***1、异步加载页头和页尾**/
$(function(){
    $('#header').load('header.php');
    $('#footer').load('footer.php');

});

$('.navbar-link').on('click',function(){
    $(this).parent().removeClass('active');
    if($(this).parent('.active')){
        $(this).parent().removeClass('active');
    }else{
        this.parent().addClass('active');
        $(this).parent().siblings().removeClass('active');
    }

})
