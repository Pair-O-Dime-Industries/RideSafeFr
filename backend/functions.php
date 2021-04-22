<?php
include_once './config.php';
function riderExists($username, $PhNum, $Email){
    global $conn;
    $value = mysqli_query($conn,"SELECT UserName, PhNum, Email from rider");
    foreach ($value as $val) {
        if($username == $val['UserName'] || $PhNum == $val['PhNum'] || $Email == $val['Email']){
            return true;
        }
        else{
            return false;
        }
    }

}
// function autheticateRider($username, $password){
// global $conn;
// $value = mysqli_query($conn, "SELECT UserName, Password from rider WHERE UserName =$username AND Password = $password");

//     if () {
//         return true;
//     } else {
//         return false;
//     }


// }
function check_R_login(){
if (isset($_SESSION['RiderID']) && $_SESSION['RiderID'] != '') {
    
    $result = array(
    'error' => false,
    'msg' => 'isLoggedin',
);

} else {
       
    $result = array(
    'error' => true,
    'msg' => 'Please login first!',

  
 
);

}


header('Content-type: application/json');
echo json_encode($result);
}


function check_D_login()
{
    if (!(isset($_SESSION['DriverID']) && $_SESSION['DriverID'] != '')) {
        $test = $_SESSION['DriverID'];
        // User is not logged in!
        $result = array(
            'error' => true,
            'msg' => 'Please login first!',
        );

    } else {

 

        $result = array(
            'error' => false,
            'msg' => 'isLoggedin',
        );
    }

    header('Content-type: application/json');
    echo json_encode($result);
}

function test_input($data)
{
    $data = trim($data);
    $data = stripslashes($data);
    $data = htmlspecialchars($data);
    return $data;
}

function driverExists($Email, $PhNum){
    global $conn;
    $value = mysqli_query($conn, "SELECT Email, PhNum from driver");
foreach ($value as $val) {
    if ($Email == $val['Email'] || $PhNum == $val['PhNum']) {
        return true;
    } else {
        return false;
    }
}

}
function carExists($LicensePlate){
    global $conn;
    $value = mysqli_query($conn, "SELECT LicensePlate from car");
foreach ($value as $val) {
    if ($LicensePlate == $val['LicensePlate']) {
        return true;
    } else {
        return false;
    }
}

}
?>