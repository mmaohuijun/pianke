<?php
	header("Content-Type:application/json;charset=utf-8");
	@$uname = $_REQUEST['uname']or die('{"code":-2,"msg":"用户名是必须的"}');
	@$upwd = $_REQUEST['upwd']or die('{"code":-3,"msg":"密码是必须的"}');
	//$conn = mysqli_connect('localhost','root','','pianke');
	//mysqli_query($conn,"SET NAMES UTF8");
	require('init.php');
	$sql = "SELECT *FROM t_user WHERE uname = '$uname' AND upwd = '$upwd'";
	$result = mysqli_query($conn,$sql);
	$row = mysqli_fetch_assoc($result);
	if($row == null){
		$sql = "INSERT INTO t_user VALUES(null,'$uname','$upwd')";
    	$result = mysqli_query($conn,$sql);
    	if($result == true){
    		echo '{"code":1,"msg":"注册成功"}';
    		//$output = ['code'=>1,'msg'=>"注册成功",'uid'=>$uid,'uname'=>$uname];
    	}else{
    		echo '{"code":-1,"msg":"注册失败"}';
    	}
	}else{
		echo '{"code":-4,"msg":"该用户名已被注册哦!换一个吧亲(づ￣3￣)づ╭❤～"}';
	}
?>