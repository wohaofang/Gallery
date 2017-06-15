<?php
header("Content-type:application/json;charset=utf-8");

//引入db.php（链接数据库）
require_once('db.php');


if ($link) {
    	// 插入数据
    	// 获取前端传入数据
        $newstitle = $_POST['newstitle'];
        $newstype = $_POST['newstype'];
        $newsimg = $_POST['newsimg'];
        $newstime = $_POST['newstime'];
        $newssrc = $_POST['newssrc'];

    	// 查询语句
    	$sql = "INSERT INTO `news` (`newstitle`,`newstype`,`newsimg`,`newstime`,`newssrc`) VALUES ('{$newstitle}','{$newstype}','{$newsimg}','{$newstime}','{$newssrc}')";



        mysqli_query($link, "SET NAMES utf8");
        $result = mysqli_query($link,$sql);

        
        // echo json_encode($sql);
        echo json_encode(array('success'=>'OK'));
    }
    
    // 关闭连接
    mysqli_close($link);






?>