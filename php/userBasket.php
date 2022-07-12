<?php
    session_start();
    require_once 'connectToDataBase.php';

    $userName = $_POST['name'];
    $userFamily = $_POST['family'];
    $userTel = $_POST['tel'];
    $userEmail = $_POST['email'];
    $userAddres = $_POST['addres'];
    $userPostIndex = $_POST['postIndex'];

    $userGoodsArr = $_POST['userGoods'];
    $userGoodsJson = json_encode($userGoodsArr);
    $userAccLogin = $_SESSION['user']['login'];
    $userAccEmail = $_SESSION['user']['email'];

    mysqli_query($connect, "INSERT INTO `usergoods` (`name`, `family`, `tel`,`email`,`addres`,`postIndex`,`userGoods`,`accname`,`accemail`,`status`) VALUES ('$userName', '$userFamily', '$userTel','$userEmail','$userAddres','$userPostIndex','$userGoodsJson','$userAccLogin','$userAccEmail','processing')");
//    mysqli_query($connect,"INSERT INTO `usergoods` (`name`, `family`, `tel`,`email`,`addres`,`postIndex`,`userGoods`,`accname`,`accemail`)
//        VALUES ('$userName', '$userFamily', '$userTel','$userEmail','$userAddres','$userPostIndex','$userPostIndex','0','0','0')");
    $response = [
        "status" => true
    ];

    echo json_encode($response);