<?php
header('Content-Type:application/json;charset=utf-8');
$aid = $_REQUEST['aid'];
require('init.php');
//$sql = "SELECT *FROM t_article WHERE aid=$aid";
$sql = "SELECT u.uname,u.uid,a.aid,a.atitle,a.acontent,a.pubtime";
$sql .= " FROM t_user u,t_article a";
$sql .= " WHERE u.uid=a.uid AND a.aid=$aid";
$result = mysqli_query($conn,$sql);
$rows = mysqli_fetch_assoc($result);
$input = json_encode($rows);
echo $input;
?>

