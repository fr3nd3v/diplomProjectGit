<?php
    require_once 'connectToDataBase.php';
    $check_status = mysqli_query($connect, "SELECT * FROM `usergoods`");

    $userDateArr = mysqli_fetch_all($check_status);
    $response = [
        "status" => true,
        "userInfo" =>  $userDateArr
    ];
    echo json_encode($response);