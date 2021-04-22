<?php
include_once './config.php';
include_once './functions.php';
session_start();
$data = json_decode(file_get_contents("php://input"));

if ($data->check == 'rider') {
    check_R_login();
    

}
if ($data->check == 'driver') {
    check_D_login();
}

?>