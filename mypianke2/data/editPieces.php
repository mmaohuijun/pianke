<?php
header('Content-Type:application/json;charset=utf-8');
$uid = $_REQUEST['uid'];
$pcontent = $_REQUEST['pcontent'];
require('init.php');
$sql = "INSERT INTO pieces VALUES(null,$uid,'$pcontent','$pimg',now())";
//var_dump($sql);
$result = mysqli_query($conn,$sql);
//var_dump($result);
if($result == true){
    echo '{"code":1,"msg":"碎片发表成功"}';
}
else{
    echo '{"code":-1,"msg":"碎片发表失败"}';
}
?>