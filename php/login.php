<?php
    session_start();
    require_once 'connectToDataBase.php';

    $emailOrLogin = $_POST['emailOrLogin'];
    $password = $_POST['password'];

    $check_user = mysqli_query($connect, "SELECT * FROM `users`
    WHERE  (`login` = '$emailOrLogin' OR `email` = '$emailOrLogin') AND `password` = '$password'");

    if ( mysqli_num_rows($check_user ) > 0) {
        $user = mysqli_fetch_assoc($check_user);

        $_SESSION['user'] = [
            "id" => $user['id'],
            "email" => $user['email'],
            "login" => $user['login']
        ];

        $response = [
            "status" => true
       ];
       echo json_encode($response);
    }else{
        $response = [
            "status" => false,
            'message'=> "некоректно введены даные"
        ];
        echo json_encode($response);
    }


