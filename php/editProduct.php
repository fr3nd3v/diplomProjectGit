<?php
    $addId = $_POST['editInputId'];
    $addName = $_POST['editName'];
    $addCost= $_POST['editCost'];
    $addImage = $_POST['editImage'];
    $addAtribute = $_POST['editAtribute'];
    $addDesk = $_POST['editDesk'];
    $filterDesk = preg_replace("/[^a-zа-я\s]/iu", "", $addDesk);

    $json = file_get_contents('../js/goods.json');
    $json = json_decode($json, true);
    $arrJson = $json;
    $arrJson[$addId]['name'] = $addName;
    $arrJson[$addId]['cost'] = $addCost;
    $arrJson[$addId]['image'] = $addImage;
    $arrJson[$addId]['atribute'] = $addAtribute;
    $arrJson[$addId]['text'] = $filterDesk;
    $newJsonString = json_encode($arrJson);
    file_put_contents('../js/goods.json', $newJsonString);

    $response = [
        "status" => true,
        "product" => $addId,
        "message" => "успешно редактирован"
    ];
    echo json_encode($response);






