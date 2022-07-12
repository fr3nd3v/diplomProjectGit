<?php
        session_start();
        require_once 'connectToDataBase.php';
        print_r($_SESSION['user']['login']);
        $userSessionName = $_SESSION['user']['login'];

        $check_user= mysqli_query($connect, "SELECT * FROM `usergoods` WHERE `accname` = '$userSessionName'");

        $userDateArr = mysqli_fetch_all($check_user);
      
        $response = [
            "status" => true,
            "userInfo" =>  $userDateArr
        ];

        echo json_encode($response);
   
?>
