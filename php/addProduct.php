<?php
    $addId = $_POST['addInputId'];
    $addName = $_POST['addName'];
    $addCost= $_POST['addCost'];
    $addImage = $_POST['addImage'];
    $addAtribute = $_POST['addAtribute'];
    $addDesk = $_POST['addDesk'];
    

   $json = file_get_contents('../js/goods.json');
   $json = json_decode($json, true);

    $json[] = [
        'id' => $addId,
        'name' => $addName,
        'cost' =>   $addCost,
        'image' =>  $addImage,
        'atribute' => $addAtribute,
        'text' => $addDesk
    ];
   $newJsonString = json_encode($json);


   file_put_contents('../js/goods.json', $newJsonString);
    $response = [
        "status" => true,
        "product" => $addName,
        "message" => "успешно добавлен"
    ];
    echo json_encode($response);
//    header('Location: /');