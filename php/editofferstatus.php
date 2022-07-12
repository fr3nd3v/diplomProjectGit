<?php
    require_once 'connectToDataBase.php';

    $userOfferStatus = $_POST['status'];
    $userOfferId = $_POST['offerId'];
    echo($userOfferStatus);
    if($userOfferStatus == 'current'){
        die();
    }
    mysqli_query($connect, "UPDATE `usergoods` SET `status` = '$userOfferStatus' WHERE `id` = $userOfferId;");

    
