<?php
$connect = mysqli_connect('localhost', 'root', '', 'diplom');
if (!$connect){
    die('Error connect to database');
}
