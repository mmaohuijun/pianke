/**
 * Created by asus on 2017/6/11.
 */
//请求头部和脚部
$("header").load("data/header.php",function(){
    header();
});
$(".modal").load("data/modal.php",function(){
    modal();
    login();
});
$("footer").load("data/footer.php");

//头部加载完成后 执行的函数事件
function header(){
    //点击登录按钮 弹出模块框
    $("#login-btn").click(function(e){
        e.preventDefault();
        $(".modal").css("height","100%");
    });
    //点击头部的列表项 切换指定样式
    $("#nav>ul").on('click','li',function(e){
        e.preventDefault();
        switch($(this).index()){
            case 0:
                location.href = 'index.html';
                break;
            case 1:
                location.href = 'read.html';
                break;
            case 3:
                location.href = 'pieces.html';
                break;
            case 4:
                location.href = 'client.html';
                break;
        }
        //$(this).addClass("active").siblings().removeClass("active");
        console.log($(this));

    })
}

//模态框加载完成后 执行的函数事件
function login(){
    if(sessionStorage.uid){
        console.log("现在已经登录了");
        $("#nav>p").addClass("hasLogin").siblings("div").removeClass("hasLogin");
        $("#edit").attr("href",id);
        $("#nav span").html("你好"+name);
        //$("#nav>div").css("display","block");
        //var html = `
        //<div>
        //    <div><a id='edit' href='${id}'></a></div>
        //    <span>你好,${name}</span>
        //    <a href="#">退出<a>
        //</div>
        //`;
        //$("#nav").append(html);
    }else{
        $("#nav>p").removeClass("hasLogin").siblings("div").addClass("hasLogin");
    }
    //点击编辑按钮 跳转到editArticle.html网页
    $("#edit").click(
        function(e){
            e.preventDefault();
            location.href = 'editArticle.html';
        }
    );
    $("#nav span+a").click(function(e){
        sessionStorage.uid = "";
        sessionStorage.uname = "";
        $("#nav>p").removeClass("hasLogin").siblings("div").addClass("hasLogin");
    });
    //
}
function modal(){
    //var id=0,name=0;
    //如果当前有sessionStorage存在 设置登录后的导航栏样式
    var upwd = document.getElementById("upwd");
    var uname = document.getElementById("uname");
    var reg_btn = document.getElementById("reg_btn");
    var $ntips = $(".ntips");
    var $ptips = $(".ptips");
    //点击×  隐藏模块框
    $(".modal .close").click(function(){
        $(".modal").css("height","0");
    });
    //点击切换 登录注册
    $(".modal .login-title").click(function(e){
        $(e.target).addClass("hover").siblings().removeClass("hover");
        var id = $(e.target).attr("href");
        $(id).css("display","block");
        $(id).siblings().css("display","none");
    })


    //用户名1-10位字母或数字以及下划线 区分大小写
//var upwd = $("upwd");
//var uname = document.getElementById("uname");
    function vali(regs,txt,tips){
        var regs = regs;
        if(!regs.test(txt.value)){
            tips.removeClass("focus");
            return false;
        }else{
            return true;
        }
    }
    uname.onblur = function(){
       //console.log(1);
        vali(/^\w{1,10}$/,this,$ntips);
    };
    upwd.onblur = function(){
        vali(/^[a-z0-9]{1,8}$/i,this,$ptips);
    };
    uname.onfocus = function(){
        $(".reged").html("");
        $ntips.addClass("focus");
    };
    upwd.onfocus = function(){
        $ptips.addClass("focus");
    };
// 前端验证 最后一步！！  ？？
//console.log(reg_btn);
    reg_btn.onclick = function(){
        //console.log('heool');
        if(vali(/^\w{1,10}$/,this,$ntips) && vali(/^[a-z0-9]{1,8}$/i,this,$ptips)){
            $("#reg").submit();
            console.log("success");
        }else{
            console.log("fail");
        }
    }

//用户注册 点击注册按钮 发送ajax请求
    reg_btn.onclick = function(){
        var uname = document.getElementById("uname");
        var upwd = document.getElementById("upwd");
        var n = uname.value;
        var p = upwd.value;
        $.ajax({
            type:"POST",
            url:"data/reg.php",
            data:{uname:n,upwd:p},
            success:function(data){
                if(data.code>0){
                    alert(data.msg);
                    id = data.uid;
                    name = data.uname;
                    sessionStorage.setItem('uid',id);
                    sessionStorage.setItem('uname',name);
                }else if(data.code == -4){
                    $("#reg").append('<span class="reged">'+data.msg+'</span>');
                }
            }
        });
    };
    //点击登录 发送请求并接收php响应数据
    var log_btn = document.getElementById("log_btn");
    log_btn.onclick = function(){
        var log_name = document.getElementById("log_name");
        var log_pwd = document.getElementById("log_pwd");
        var n = log_name.value;
        var p = log_pwd.value;
        //console.log(p);
        $.ajax({
            type:'POST',
            url:"data/login.php",
            data:{uname:n,upwd:p},
            success:function(data){
                console.log(data);
                if(data.code>0){
                     id = data.uid;
                    name = data.uname;
                    sessionStorage.setItem('uid',id);
                    sessionStorage.setItem('uname',name);
                //console.log(id);
                    alert(data.msg);
                    location.reload();
                }else {
                    alert(data.msg);
                }
            }
        });
    };
}


//用户名1-10位字母或数字以及下划线 区分大小写
//var upwd = $("upwd");
//var uname = document.getElementById("uname");
//页面加载完成时 鼠标滚轮 出现消失
window.onload = function () {
    var header = document.querySelector("header");
    function onMouseWheel(e) {/*当鼠标滚轮事件发生时，执行一些操作*/
        var e = e || window.event;
        var down = true; // 定义一个标志，当滚轮向下滚时，执行一些操作
        down = e.wheelDelta?e.wheelDelta<0:e.detail>0;
        if(down){
            header.style.height = '0';
        }else{
            header.style.height = '90px';
        }
        //if(ev.preventDefault){/*FF 和 Chrome*/
        //    ev.preventDefault();// 阻止默认事件
        //}
        return false;
    }
    addEvent(document,'mousewheel',onMouseWheel);
    addEvent(document,'DOMMouseScroll',onMouseWheel);

    function addEvent(obj,xEvent,fn) {
        if(obj.attachEvent){
            obj.attachEvent('on'+xEvent,fn);
        }else{
            obj.addEventListener(xEvent,fn,false);
        }
    }
    var $btn = $("#to_top");
    $(window).scroll(function(){
        var scrollTop = $("body").scrollTop();
        if($btn.offset().top <scrollTop+ innerHeight/2 ){
            //alert("hello");
            $btn.css("display","block");
        }else{
            $btn.css("display","none");
        }
    });
    //alert($btn.offset().top);
    $btn.click((e)=>{
        $("#content").offset().top = 0;
    });
};











