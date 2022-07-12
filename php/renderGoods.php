<?php
    session_start();
    require_once 'connectToDataBase.php';
    $_userGoods = $_POST['productArray'];
//     echo json_encode("12");
    $_SESSION['userGoods'] = [
         "goods" => $_userGoods,
    ];
        $response = $_userGoods;
        echo json_encode($response);
    


