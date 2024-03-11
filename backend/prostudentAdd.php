<?php
include('db.php');
header('Access-Control-Allow-Origin: http://localhost:3000');

$name = $_REQUEST['name'];
$performance = $_REQUEST['performance'];

$sql = "insert into programm_coord_student(name,performance) values('$name','$performance')";
$res = mysqli_query($conn, $sql);
if ($res) {
    echo "<script>alert('Submitted Succesfully');
    window.location.href= 'http://localhost:3000/program-coordinator/';
    </script>";
} else {
    echo "<script>alert('Something Went Wrong')</script>";
}
