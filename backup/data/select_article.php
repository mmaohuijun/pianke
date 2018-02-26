<?php
header('Content-Type:application/json;charset=utf-8');
require('init.php');
//$sql = "SELECT *FROM t_article";
$sql = "SELECT u.uname,u.uid,a.aid,a.atitle,a.acontent,a.pubtime";
$sql .= " FROM t_user u,t_article a";
$sql .= " WHERE u.uid=a.uid";
$result = mysqli_query($conn,$sql);
$rows = mysqli_fetch_all($result,MYSQLI_ASSOC);
$input = json_encode($rows);
echo $input;
?>