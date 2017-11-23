<?php
header('Content-Type:application/json;charset=utf-8');
$uid = $_REQUEST['uid'];
$atitle = $_REQUEST['atitle'];
$acontent = $_REQUEST['acontent'];
require('init.php');
$sql = "INSERT INTO t_article VALUES(null,$uid,'$atitle','$acontent',now())";
var_dump($sql);
$result = mysqli_query($conn,$sql);
var_dump($result);
if($result == true){
    echo '{"code":1,"msg":"文章发表成功"}';
}
else{
    echo '{"code":-1,"msg":"文章发表失败"}';
}
?>