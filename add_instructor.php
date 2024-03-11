<?php
include('db.php');
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Methods: HEAD, GET, POST, PUT, PATCH, DELETE, OPTIONS");
header("Access-Control-Allow-Headers: X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method,Access-Control-Request-Headers, Authorization");
header('Content-Type: application/json');


$name = $_REQUEST['name'];
$instructorId = $_REQUEST['instructorId'];

$email = $_REQUEST['email'];
$coursesTeach = $_REQUEST['coursesTeach'];
$passPercentage = $_REQUEST['passPercentage'];




$fetch="select * from inst_add where ins_id='$instructorId'";
$r1=mysqli_query($conn,$fetch);
$co=mysqli_num_rows($r1);
if($co==0)
{

    $sql = "insert into inst_add(ins_name,ins_id,email,course,perc) values('$name','$instructorId','$email','$coursesTeach','$passPercentage')";
    $res = mysqli_query($conn, $sql);
    if ($res) {
        echo "<script>alert('Submitted Succesfully');
        window.location.href= 'http://localhost:3000/instructordetails/';
        </script>";
    } else {
        echo "<script>alert('Something Went Wrong')</script>";
    }
    
}
else 
{
    echo "<script>alert('this instructor id already exisit');
    window.location.href= 'http://localhost:3000/instructordetails/';
    </script>";
}
