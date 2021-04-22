<?php 
session_start();

include_once './config.php';
include_once './functions.php';

$driverID = $_SESSION['DriverID'];
$response = mysqli_query($conn, "SELECT * from driver INNER JOIN  car where DriverID ='$driverID' AND Owner ='$driverID'");
if ($row = mysqli_fetch_array($response)) {
    
    $result = array(
        'error' => false,
        'name' => $row['FName'].' '.$row['LName'],
        'profile' => '../images/driver/driverImg/'.$row['ProfileImg'],
        'vehicle' => $row['Make'].' '.$row['Model'],
        'numplate' => $row['LicensePlate'],
        'carimg' => '../images/driver/carImg/'.$row['CarPhoto'],    

    );

} else {
    $result = array(
        'error' => true,
        'msg' => 'Failed!',
    );
}
header('Content-type: application/json');
echo json_encode($result);



?>