

//瀑布流布局
const MARGIN = 10;
var div = $("div.card");
var divWidth = div[0].offsetWidth+MARGIN;
function card(){
    var h = [];
    var n = document.documentElement.offsetWidth/divWidth|0;
    for(var i=0; i<div.length; i++){
        divHeight = div[i].offsetHeight;
        if(i<n){
            h[i] = divHeight;
            div.eq(i).css("top",0);
            div.eq(i).css("left",i*divWidth);
        }else{
            minHeight = Math.min.apply(null,h);
            minKey = getArrayKey(h,minHeight);
            h[minKey] += divHeight + MARGIN;
            div.eq(i).css("top",minHeight+MARGIN);
            div.eq(i).css("left",minKey*divWidth);
        }
    }
}
function getArrayKey(s,v){
    for(k in s){
        if(s[k] == v){
            return k;
        }
    }
}
function get_height(){
    console.log(card())
}
window.onload = function(){
    card();
};
//window.onresize = function(){
//    card();
//}

//页脚隐藏
$("footer").css("display","none");

$(".sub_btn").click(function(){
    console.log("hi");
    var uid = 1;
    var pcontent = $("#msg-box textarea").val();
    $.ajax({
        type:'POST',
        url:'data/editPieces.php',
        data:{uid:uid,pcontent:pcontent},
        success:function(data){
            alert("文章发布成功！");
        }
    });
});

//显示
//$.ajax({
//    type:'POST',
//    url:'data/select_pieces.php',
//    //data:{aid:val},
//    success:function(data){
//        //console.log(val);
//        var html = "";
//        for(var i=0; i<data.length; i++){
//            var obj = data[i];
//            html += `
//        <div class="card">
//            <div class="card-top-img">
//
//            </div>
//            <div class="card-item">
//                <div >
//                    <a href="">${obj.pcontent}</a>
//                </div>
//                <div>
//                    <a href="">
//                        ${obj.uid}
//                    </a>
//                </div>
//            </div>
//        </div>
//                `
//        }
//        $("#pieces").html(html);
//    }
//});
