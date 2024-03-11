<?php
include('db.php');
header('Access-Control-Allow-Origin: http://localhost:3000');

$name=$_REQUEST['name'];
$descr=$_REQUEST['description'];

$sql="insert into quality_course(course_name,cour_desc,status) values('$name','$descr','0')";
$res=mysqli_query($conn,$sql);
if($res)
{
    echo "<script>alert('Submitted Succesfully');
    window.location.href= 'http://localhost:3000/qaofficer-manage-courses';
    </script>";
   ;
}
else 
{
    echo "<script>alert('Something Went Wrong')</script>";
}
?>