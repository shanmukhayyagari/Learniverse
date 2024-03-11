<?php
include('db.php');
header('Access-Control-Allow-Origin: http://localhost:3000');

$name=$_REQUEST['name'];
$email=$_REQUEST['email'];
$message=$_REQUEST['message'];
$sql="insert into contact(name,email,message) values('$name','$email','$message')";
$res=mysqli_query($conn,$sql);
if($res)
{
    echo "<script>alert('Submitted Succesfully');
    window.location.href= 'http://localhost:3000/contact';
    </script>";
   ;
}
else 
{
    echo "<script>alert('Something Went Wrong')</script>";
}
?>