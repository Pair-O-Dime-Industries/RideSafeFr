<?php
include_once './config.php';
include_once './functions.php';
session_start();

   if(isset($data->logout)){
     unset($_SESSION['RiderID']);
    echo true;
   }
?>
