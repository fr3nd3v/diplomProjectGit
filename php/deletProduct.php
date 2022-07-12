
<?php
        $deletId = $_POST['$deletId'];
        $json = file_get_contents('../js/goods.json');
        $json = json_decode($json, true);
        $arrJson = $json;
        unset($arrJson[$deletId]);

        $newArr = [];
        foreach ($arrJson as $key => $value) {
            // $arr[3] будет перезаписываться значениями $arr при каждой итерации цикла
           array_push($newArr, $arrJson[$key] );

        }


        $newJsonString = json_encode($newArr);
        file_put_contents('../js/goods.json', $newJsonString);
        $response = [
            "status" => true,
            "product" => $deletId,
            "message" => "удален"
        ];
        echo json_encode($response);
?>
