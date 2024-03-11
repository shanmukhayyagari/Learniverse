<?php
include('db.php');
header('Access-Control-Allow-Origin: http://localhost:3000');


$message = $_REQUEST['message'];

$sql = "insert into message(message) values('$message')";
$res = mysqli_query($conn, $sql);
if ($res) {
    echo "<script>alert('Submitted Succesfully');
    window.location.href= 'http://localhost:3000/program-coordinator/';
    </script>";
} else {
    echo "<script>alert('Something Went Wrong')</script>";
}
