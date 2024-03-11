<?php
include('db.php');
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Methods: HEAD, GET, POST, PUT, PATCH, DELETE, OPTIONS");
header("Access-Control-Allow-Headers: X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method,Access-Control-Request-Headers, Authorization");
header('Content-Type: application/json');


$name = $_REQUEST['name'];
$qaOfficerId = $_REQUEST['qaOfficerId'];

$email = $_REQUEST['email'];
$coursesAssigned = $_REQUEST['coursesAssigned'];
$passPercentage = $_REQUEST['passPercentage'];




$fetch="select * from quality_add where qid='$qaOfficerId'";
$r1=mysqli_query($conn,$fetch);
$co=mysqli_num_rows($r1);
if($co==0)
{

    $sql = "insert into quality_add(qname,qid,email,qass,pass) values('$name','$qaOfficerId','$email','$coursesAssigned','$passPercentage')";
    $res = mysqli_query($conn, $sql);
    if ($res) {
        echo "<script>alert('Submitted Succesfully');
        window.location.href= 'http://localhost:3000/qadetails/';
        </script>";
    } else {
        echo "<script>alert('Something Went Wrong')</script>";
    }
    
}
else 
{
    echo "<script>alert('this Quality Officier id already exisit');
    window.location.href= 'http://localhost:3000/qadetails/';
    </script>";
}
