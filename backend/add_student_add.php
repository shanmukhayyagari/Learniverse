<?php
include('db.php');
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Methods: HEAD, GET, POST, PUT, PATCH, DELETE, OPTIONS");
header("Access-Control-Allow-Headers: X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method,Access-Control-Request-Headers, Authorization");
header('Content-Type: application/json');


$name = $_REQUEST['name'];
$studentId = $_REQUEST['studentId'];

$email = $_REQUEST['email'];
$courses = $_REQUEST['courses'];
$passPercentage = $_REQUEST['passPercentage'];




$fetch="select * from student_add where stud_id='$studentId'";
$r1=mysqli_query($conn,$fetch);
$co=mysqli_num_rows($r1);
if($co==0)
{

    $sql = "insert into student_add(sname,stud_id,email,course,percentage) values('$name','$studentId','$email','$courses','$passPercentage')";
    $res = mysqli_query($conn, $sql);
    if ($res) {
        echo "<script>alert('Submitted Succesfully');
        
        </script>";
    } else {
        echo "<script>alert('Something Went Wrong')</script>";
    }
    
}
else 
{
    echo "<script>alert('this student id already exisit');
    window.location.href= 'http://localhost:3000/studentdetails/';
    </script>";
}
