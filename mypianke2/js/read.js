/**
 * Created by asus on 2017/6/4.
 */

$(()=>{
    $("#nav li:nth-child(2)").addClass("active").siblings().removeClass("active");
})
var img = [
    "images/read/pic01.jpg",
    "images/read/pic02.jpg",
    "images/read/pic03.jpg",
    "images/read/pic04.jpg",
    "images/read/pic05.jpg"
];
$(e=>{
    var liWidth = parseFloat($("#carousel").css("width"));
    var $imgs = $("#imgs");
    var $indexs = $("#indexs");
    //<li><img src= ></li><li><img src= ></li>
    var imgList = '<li><img src=' + img.join('></li><li><img src=') + '></li>';
    imgList += `<li><img src="${img[0]}"></li>`;
    $imgs.html(imgList);
    $imgs.css("width",liWidth*(img.length+1));
    //鐢熸垚涓嬫爣
    for(var i=1,str=""; i<=img.length;i++){
        str += '<li>'+i+'</li>';
        //$indexs.append(str);
        $indexs.html(str);
    }
    $indexs.children("li:first-child").addClass("active");

    //鍥剧墖杞挱鏁堟灉
    var speed = 1000;
    var wait = 1000;
    var timer = null;
    var canmove = true;
    var i=0;
    function move(){
        i++;
        timer = setTimeout(function(){
            $imgs.animate({left:-i*liWidth},speed,
                function(){
                    if (i == img.length){
                        i=0;
                        $imgs.css("left","0");
                    }
                    //灏嗗搴斾笅鏍囩殑鏍峰紡淇敼
                    $indexs.children(':eq('+i+')').addClass("active")
                        .siblings().removeClass("active");
                    if(canmove == true){
                    move();
                    }
                }
                );
        },wait);
    }
    //move();
    //榧犳爣绉诲姩鍒板浘鐗囦笂 鍋滄
    $('#carousel').hover(function(e){
            canmove=false;
        clearTimeout(timer);
    },
        function(e){
            canmove = true;
            move();
        }
    );
    //榧犳爣绉诲姩鍒颁笅鏍� 杞埌鐩稿簲鍥剧墖
    $indexs.on('click','#indexs>li',function(e){
        var i = $indexs.children().index($(e.target));
        $(e.target).addClass("acitve").siblings().removeClass("active");
        $imgs.animate({left:i*liWidth},speed);
    })
});
//动态获取阅读文章列表项
$(()=>{
    $.ajax({
        type:'POST',
        url:'data/select_article.php',
        success:function(data){
            //console.log(data);
            var html = "";
            for(var i=0; i<data.length; i++){
                var obj = data[i];
                var acontent = obj.acontent.slice(0,200)+"...";;
                html += `
        <div class="read-item clearfix">
            <div>
                <h2>
                    <a class="all" href="${obj.aid}">
                        ${obj.atitle}
                    </a>
                </h2>
                <a href="${obj.uid}">
                    ${obj.uname}
                </a>
                <div class="content">
                    ${acontent}
                    <a class="all" href="${obj.aid}">VIEW ALL</a><i></i>
                </div>
                <small>168次阅读 | 评论:2 | 喜欢:11</small>
            </div>
        </div>
                `;
            }
            $("#read").html(html);
        }
    })
});
var aid = 0;
//为文章标题 和 view上的a绑定点击事件
$("#read").on('click','a.all',function(e){
    e.preventDefault();
     aid = $(this).attr("href");
     //aid = sessionStorage['aid'];
    document.cookie = 'aid='+aid;
    location.href = 'articleInfo.html';
    console.log(aid);
});