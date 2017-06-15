<?php 
    header("Content-type: application/json; charset=utf-8");

    //引入db.php（链接数据库）
    require_once('db.php');

    if ($link) {
        // 插入数据
        // 获取前端传入数据
        $newstitle = addslashes(htmlspecialchars($_POST['newstitle']));
        $newstype = addslashes(htmlspecialchars($_POST['newstype']));
        $newsimg = addslashes(htmlspecialchars($_POST['newsimg']));
        $newstime = addslashes(htmlspecialchars($_POST['newstime']));
        $newssrc = addslashes(htmlspecialchars($_POST['newssrc']));
        $newsid = addslashes(htmlspecialchars($_POST['id']));

        // 查询语句
        $sql = "UPDATE `news` SET `newstitle`='{$newstitle}',`newstype`='{$newstype}',`newsimg`='{$newsimg}',`newstime`='{$newstime}',`newssrc`='{$newssrc}' WHERE `id`={$newsid}";



        mysqli_query($link, "SET NAMES utf8");
        $result = mysqli_query($link,$sql);

        
        // echo json_encode($sql);
        echo json_encode(array('success'=>'OK'));
    }
    
    // 关闭连接
    mysqli_close($link);



 ?>