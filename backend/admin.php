<?php
include('db.php');
header('Access-Control-Allow-Origin: http://localhost:3000');

$name = $_REQUEST['username'];
$email = $_REQUEST['email'];
$role = $_REQUEST['role'];
$role1=$_REQUEST['role1'];
$sql = "insert into admin(username,email,user_type) values('$name','$email','$role')";
$res = mysqli_query($conn, $sql);

if ($res) {
    if($role1=="quality")
            {
                echo "<script>alert('Submitted Succesfully');
                window.location.href= 'http://localhost:3000/quality-officer/';
                </script>";
            }
            else 
            {
                echo "<script>alert('Submitted Succesfully');
                window.location.href= 'http://localhost:3000/admin/';
                </script>";
            }
  
} else {
    echo "<script>alert('Something Went Wrong')</script>";
}
