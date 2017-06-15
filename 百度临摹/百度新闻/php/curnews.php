<?php 
// 修改新闻功能
    header("Content-type: application/json; charset=utf-8");

    //引入db.php（链接数据库）
    require_once('db.php');

    if($link){
    	$newsid = $_GET['newsid'];

    	mysqli_query($link, "SET NAMES utf8");
        // 删除数据库里相关内容
    	$sql = "SELECT * FROM `news` WHERE `id` = {$newsid}";

        $result = mysqli_query($link,$sql);

        $senddata = array();

        while($row = mysqli_fetch_assoc($result)) {
            array_push($senddata, array(
                                        'id' => htmlspecialchars_decode($row['id']),
                                        'newstype' => htmlspecialchars_decode($row['newstype']),
                                        'newstitle' => htmlspecialchars_decode($row['newstitle']),
                                        'newsimg' => htmlspecialchars_decode($row['newsimg']),
                                        'newstime' => htmlspecialchars_decode($row['newstime']),
                                        'newssrc' => htmlspecialchars_decode($row['newssrc']),
                ));
        }
        echo json_encode($senddata);
    }

    // 关闭连接
    mysqli_close($link);








 ?>