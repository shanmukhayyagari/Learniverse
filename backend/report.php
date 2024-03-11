<?php
include('db.php');
header('Access-Control-Allow-Origin: http://localhost:3000');

$image = $_REQUEST['image'];

$sql = "insert into report(report) values('$image')";
$res = mysqli_query($conn, $sql);
if ($res) {
    echo "<script>alert('Submitted Succesfully');
    window.location.href= 'http://localhost:3000/report';
    </script>";
} else {
    echo "<script>alert('Something Went Wrong')</script>";
}
