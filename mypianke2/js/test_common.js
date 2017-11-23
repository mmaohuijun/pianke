/**
 * Created by asus on 2017/6/11.
 */
//请求头部和脚部
$("header").load("data/header.php",function(){
    header();
});
$(".modal").load("data/modal.php",function(){

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
    $("#nav>ul").on('mouseover','li',function(){
        this.addClass("active").siblings().removeClass("active");
    })
}

//模态框加载完成后 执行的函数事件
//点击×  隐藏模块框

//用户注册 点击注册按钮 发送ajax请求
function ajax(){
    $(".modal .close").click(function(){
        $(".modal").css("height","0");
        console.log(1);
    });
//点击切换 登录注册
    $(".modal .login-title").on('click','a',function(e){
        console.log(1);
        $(e.target).addClass("hover").siblings().removeClass("hover");
        var id = $(e.target).attr("href");
        $(id).css("display","block");
        $(id).siblings().css("display","none");
    })
    $("#log_btn").on('click',function(){
        var log_name = document.getElementById("log_name");
        var log_pwd = document.getElementById("log_pwd");
        var n = log_name.value;
        var p = log_pwd.value;
        console.log(p);
        $.ajax({
            type:'POST',
            url:"data/login.php",
            data:{uname:n,upwd:p},
            success:function(data){
               // console.log(data);
                if(data.code>0){
                    alert(data.msg);
                }else {
                    alert(data.msg);
                }
            }
        });
    });

}
$("#reg_btn").on('click',function(){
    console.log(1);
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
            }else if(data.code == -4){
                $("#reg").append('<span class="reged">'+data.msg+'</span>');
            }
        }
    });
});
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











