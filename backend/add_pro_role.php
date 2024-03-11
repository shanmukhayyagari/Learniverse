<?php
include('db.php');
header('Access-Control-Allow-Origin: http://localhost:3000');


$file = $_REQUEST['file'];
$role = $_REQUEST['role'];
$sql = "insert into pro_document(file_name,role) values('$file','$role')";
$res = mysqli_query($conn, $sql);
if ($res) {
    echo "<script>alert('Submitted Succesfully');
    window.location.href= 'http://localhost:3000/program-coordinator/';
    </script>";
} else {
    echo "<script>alert('Something Went Wrong')</script>";
}
