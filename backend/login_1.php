<?php
include('db.php');
header('Access-Control-Allow-Origin: http://localhost:3000');
header('Access-Control-Allow-Methods: GET,PUT,POST,DELETE,PATCH,OPTIONS');

$email=$_REQUEST['email'];
$password=$_REQUEST['password'];
$role=$_REQUEST['role'];



if($role=='admin')
{
$sql="select * from user where email='$email' and password='$password'";
$res=mysqli_query($conn,$sql);
if($res)
{
    echo "<script>
    alert('You are Valid Admin');
        window.location.href='http://localhost:3000/admin/';
        
    </script>";
}
else 
{
    echo "<script>alert('InValid Admin')
        window.location.href='localhost:3000/signin';
    </script>";
}
}


else if($role=='student')
{
$sql="select * from user where email='$email' and password='$password'";
$res=mysqli_query($conn,$sql);
if($res)
{
    echo "<script>alert('You are Valid Student')
        window.location.href='http://localhost:3000/student/';
    </script>";
}
else 
{
    echo "<script>alert('InValid Admin')
        window.location.href='localhost:3000/signin';
    </script>";
}
}
else if($role=='teacher')
{
$sql="select * from user where email='$email' and password='$password'";
$res=mysqli_query($conn,$sql);
if($res)
{
    echo "<script>alert('You are Valid Instructor')
        window.location.href='http://localhost:3000/instructor';
    </script>";
}
else 
{
    echo "<script>alert('InValid Admin')
        window.location.href='localhost:3000/signin';
    </script>";
}
}
else if($role=='qo')
{
$sql="select * from user where email='$email' and password='$password'";
$res=mysqli_query($conn,$sql);
if($res)
{
    echo "<script>
    alert('You are Valid Quality Officer')
        window.location.href='http://localhost:3000/quality-officer/';
    </script>";
}
else 
{
    echo "<script>
    alert('InValid');
        window.location.href='http://localhost:3000/signin';
    </script>";
}
}
else if($role=='pc')
{
$sql="select * from user where email='$email' and password='$password'";
$res=mysqli_query($conn,$sql);
if($res)
{
    echo "<script>
    alert('You are Valid Programm Coordinator')
        window.location.href='http://localhost:3000/program-coordinator/';
    </script>";
}
else 
{
    echo "<script>
    alert('InValid');
        window.location.href='http://localhost:3000/signin';
    </script>";
}
}
?>