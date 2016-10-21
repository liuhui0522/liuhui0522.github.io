var cvzl=document.getElementById('cvzl');
var ctx=cvzl.getContext('2d');
var prev=0;//上一张图
var pics=[];//图片数组
pics[0]=document.createElement('img');
pics[0].src="img/11zl.jpg";
pics[1]=document.createElement('img');
pics[1].src="img/22zl.jpg";
pics[2]=document.createElement('img');
pics[2].src="img/11zl.jpg";
pics[3]=document.createElement('img');
pics[3].src="img/22zl.jpg";

var lock=false;//锁

function chg(n){
    if(lock==false){
        lock=true;
        w=100;//宽度
        var timer=window.setInterval(function(){
            w-=2;
            ctx.clearRect(0,0,400,300);
            if(w<=0){
                window.clearInterval(timer);
                prev=n;//等到动画完成了
                lock=false;//解锁

            }
            ctx.drawImage(pics[prev],0,0,w,300,0,0,w,300);
            ctx.drawImage(pics[prev],100,0,w,300,100,0,w,300);
            ctx.drawImage(pics[prev],200,0,w,300,200,0,w,300);
            ctx.drawImage(pics[prev],300,0,w,300,300,0,w,300);

        },10);//30ms之后执行
        ctx.drawImage(pics[prev],0,0,400,300,0,0,400,300);
        piczl.src=pics[n].src;// 立即执行
    }
}

var data=[
    {
        value: 30,		color:"#F38630"	},
    {		value : 50,		color : "#E0E4CC"	},
    {		value : 100,		color : "#69D2E7"	}
]

var options = {
//Boolean - Whether we show the scale above or below the chart segments
    scaleOverlay : true,
    //Boolean - If we want to override with a hard coded scale
    scaleOverride : false,
    //** Required if scaleOverride is true **
    //Number - The number of steps in a hard coded scale
    scaleSteps : null,
    //Number - The value jump in the hard coded scale
    scaleStepWidth : null,
    //Number - The centre starting value
    scaleStartValue : null,
    //Boolean - Show line for each value in the scale
    scaleShowLine : true,
    //String - The colour of the scale line
    scaleLineColor : "rgba(0,0,0,.1)",
    //Number - The width of the line - in pixels
    scaleLineWidth : 1,
    //Boolean - whether we should show text labels
    scaleShowLabels :true,

    //Interpolated JS string - can access value
    scaleLabel : "<%=value%>",
    //String - Scale label font declaration for the scale label
    scaleFontFamily : "'Arial'",
    //Number - Scale label font size in pixels
    scaleFontSize : 12,
    //String - Scale label font weight style
    scaleFontStyle : "normal",
    //String - Scale label font colour
    scaleFontColor : "#666",
    //Boolean - Show a backdrop to the scale label
    scaleShowLabelBackdrop : true,
    //String - The colour of the label backdrop
    scaleBackdropColor : "rgba(255,255,255,0.75)",
    //Number - The backdrop padding above & below the label in pixels
    // 刻度尺纵向间距
    scaleBackdropPaddingY : 0,
    //Number - The backdrop padding to the side of the label in pixels
    // 刻度尺横向间距影响背景颜色和刻度线显示
    scaleBackdropPaddingX : 5,
    //Boolean - Stroke a line around each segment in the chart
    segmentShowStroke : true,
    //String - The colour of the stroke on each segement.
    segmentStrokeColor : "#fff",
    //Number - The width of the stroke value in pixels
    segmentStrokeWidth : 2,
    //Boolean - Whether to animate the chart or not

    animation : true,
    //Number - Amount of animation steps
    animationSteps : 100,
    //String - Animation easing effect.
    animationEasing : "easeOutBounce",
    //Boolean - Whether to animate the rotation of the chart
    animateRotate : true,
    //Boolean - Whether to animate scaling the chart from the centre
    animateScale : false,
    //Function - This will fire when the animation of the chart is complete.
    onAnimationComplete : null
}


window.onload=function(){
    var ctx=document.getElementById("myChart").getContext('2d');
    var myChart=new Chart(ctx).PolarArea(data,options)

}



//手风琴
$('.accordion h3').click(function(){
    $(this).next().slideDown(500,function(){
        $(this).addClass('active');
    });
    $(this).siblings('.active').slideUp(500,function(){
        $(this).removeClass('active');
    });

})