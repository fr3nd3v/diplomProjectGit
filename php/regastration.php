<?php
    session_start();
    require_once 'connectToDataBase.php';
    $login = $_POST['login'];
    $email = $_POST['email'];
    $password = $_POST['password'];

    $checkuser = $check_user = mysqli_query($connect, "SELECT * FROM `users`
    WHERE  `login` = '$login' OR `email` = '$email'");

    if ( mysqli_num_rows($check_user ) > 0){
        $response = [
            "status" => false,
            'message' => 'такой пользователь существует'
        ];
        echo json_encode($response);
        die();
    }


    mysqli_query($connect, "INSERT INTO `users` (`email`, `login`, `password`) VALUES ('$email', '$login', '$password')");

    $response = [
        "status" => true
    ];


    echo json_encode($response);

