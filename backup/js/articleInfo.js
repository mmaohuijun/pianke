/**
 * Created by asus on 2017/6/22.
 */
$(()=>{
    var cookieArray = document.cookie.split(';')[0];
    var val = cookieArray.split("=")[1];
    console.log(val);

    $.ajax({
        type:'POST',
        url:'data/articleInfo.php',
        data:{aid:val},
        success:function(data){
            //console.log(val);
            var html = "";
                html += `
            <div class="article-box">
                <!--2.1 头部-->
                <div class="article-header">
                   <h1>${data.atitle}</h1>
                    <div>
                        <a href="">
                            ${data.uname}
                        </a>
                        <span>${data.pubtime}  |  阅读时间: 2min  |  阅读次数: 6.3 k</span>
                    </div>
                </div>
                <!--2.2 主体-->
                <div class="article-content">
                    ${data.acontent}
                </div>
            </div>
                `;
            //}
            $("#content").html(html);
        }
    });
});