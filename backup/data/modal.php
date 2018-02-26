<?php
    header("Content-Type:text/html;charset=utf-8")
?>
<div class="close">&times;</div>
    <div class="login-box">
        <div class="login-header">
            <img src="images/head-logo.png" alt=""/><br/>
            世界很美，而你刚好有空。
        </div>
        <div class="login-title">
            <a href="#login" class="hover">登录</a>
            <a href="#reg">注册</a>
        </div>
        <div class="login-content">
            <form id="login" action="#">
                <span class="focus">用户名或密码不正确</span>
                <input id="log_name" type="text" placeholder="请输入用户名" value="xiao"/><br/>
                <input id="log_pwd" type="password" placeholder="请输入密码" value="123"/><br/>
                <input id="log_btn" type="button" value="登录"/>
            </form>
            <form id="reg" action="#">
                <span class="focus ntips">请输入10位以内的字母数字及下划线</span>
                <input id="uname" type="text" placeholder="请输入用户名"/><br/>
                <span class="focus ptips">请输入1-8位字母或数字 区分大小写</span>
                <input type="password" placeholder="请输入密码" id="upwd"/><br/>
                <input type="button" value="注册" id="reg_btn"/><br/>
            </form>
        </div>
    </div>