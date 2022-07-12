<?php
        session_start();
        require_once 'connectToDataBase.php';
        $userSessionName = $_SESSION['user']['login'];

        $check_user= mysqli_query($connect, "SELECT * FROM `usergoods` WHERE `accname` = '$userSessionName'");

        $userDateArr = mysqli_fetch_all($check_user);

        $response = [
            "status" => true,
            "userInfo" =>  $userDateArr,
            "userAccname"=> $userSessionName
        ];


      echo json_encode($response);
?>


