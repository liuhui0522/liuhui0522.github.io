<?php
header('Content-Type: text/html;charset=UTF-8');
?>

<!--响应式导航条-->
<div id="header" class="navbar navbar-default navbar-fixed-top">
    <div class="container navColor">
        <div class="navbar-header">
            <a href="#" class="navbar-brand">
                <img src="img/logo.png" class="logo"/>
            </a>
            <a href="#menu" class="navbar-toggle" data-toggle="collapse">
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
            </a>
        </div>
        <div id="menu" class="navbar-collapse collapse">
            <span class="navbar-left navbar-text nav">我的博客</span>
            <ul class="nav navbar-nav navbar-right nav-pills">
                <li class="active"><a class="navbar-link" href="index.html">首页</a></li>
                <li><a class="navbar-link" href="xiangce.html">相册</a></li>
                <li><a class="navbar-link" href="riji.html">日记</a></li>
                <li><a class="navbar-link" href="ziliao.html">资料</a></li>
                <li><a class="navbar-link" href="zuoping.html">作品</a></li>
                <li><a class="navbar-link" href="guanyu.html">关于</a></li>
            </ul>
        </div>
    </div>
</div>