<?php
include("db.php");
header('Access-Control-Allow-Origin: http://localhost:3000');

header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Methods: HEAD, GET, POST, PUT, PATCH, DELETE, OPTIONS");
header("access-control-allow-credentials: true");
header("Access-Control-Allow-Headers: X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method,Access-Control-Request-Headers, Authorization");
header('Content-Type: application/json');
session_start();

// $id = $_SESSION['id'];

$namd = $_SESSION['name'];
echo $namd;
$name = $_COOKIE['name'];

echo $name;

// // // echo $id;

// $sql="select * from user where userid = '$name'";
// $trp = mysqli_query($conn,$sql);
// $rows = array();
// while($r = mysqli_fetch_assoc($trp)) {
//     $rows[] = $r;
// }
print json_encode($name);



?>