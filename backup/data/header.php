<?php
header('Content-Type: text/html;charset=UTF-8');
?>
    <div id="nav">
        <a href="#">
            <img src="images/head-logo.png" alt=""/>
        </a>
        <ul>
            <li class="active"><a href="">首页</a></li>
            <li><a href="read.html">阅读</a></li>
            <li><a href="">电台</a></li>
            <li><a href="">碎片</a></li>
            <li><a href="">客户端</a></li>
        </ul>
        <p>
            <a href="#" id="login-btn">登录/注册</a>
        </p>

        <div class="hasLogin">
             <div><a id='edit' href='${id}'></a></div>
             <span></span>
             <a href="#">退出<a>
        </div>
    </div>