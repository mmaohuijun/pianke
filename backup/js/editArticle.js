/**
 * Created by Administrator on 2017/6/26.
 */
$("#sub_btn").click(function(){
    console.log("hi");
    var title = $("#title").val();
    var acontent = UE.getEditor('myEditor').getContent();
    $.ajax({
        type:'POST',
        url:'data/editArticle.php',
        data:{uid:uid,atitle:title,acontent:acontent},
        success:function(data){
            alert("文章发布成功！");
            location.href = "read.html"
        }
    });
});