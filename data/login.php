<?php
    header("Content-Type:application/json;charset=utf-8");
    require('init.php');
    @$uname = $_REQUEST['uname'] or die('{"code":-2,"msg":"用户名是必须的"}');
    @$upwd = $_REQUEST['upwd']or die('{code":-3,"msg":"密码是必须的"}');
    $sql = "SELECT *FROM t_user WHERE uname='$uname' AND upwd='$upwd'";
    $result = mysqli_query($conn,$sql);
    $row = mysqli_fetch_assoc($result);
    if($row == null){
        echo '{"code":-1,"msg":"用户名或密码不正确"}';
    }else{
         $uid = $row['uid'];
         $uname = $row['uname'];
        //echo '{"code":1,"msg":"登录成功","uid":$uid}';
        $output = ['code'=>1,'msg'=>"登录成功",'uid'=>$uid,'uname'=>$uname];
        echo json_encode($output);
    }
?>