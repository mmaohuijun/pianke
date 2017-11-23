<?php
header('Content-Type:application/json;charset=utf-8');
require('init.php');
//$sql = "SELECT *FROM pieces";
$sql = "SELECT u.uname,u.uid,p.pid,p.pcontent,p.pimg,p.ptime";
$sql .= " FROM t_user u,pieces p";
$sql .= " WHERE u.uid=p.uid";
$result = mysqli_query($conn,$sql);
$rows = mysqli_fetch_all($result,MYSQLI_ASSOC);
$input = json_encode($rows);
echo $input;
?>