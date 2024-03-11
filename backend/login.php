<?php
include('db.php');
header('Access-Control-Allow-Origin:http://localhost:3000');
header('Access-Control-Allow-Methods: GET,PUT,POST,DELETE,PATCH,OPTIONS');
//header("Access-Control-Allow-Headers: Content-Type, Accept, Authorization, X-Requested-With, X-Auth-Token, Origin, Application");
//header('Content-Type: application/json');
//header("HTTP/1.1 200 OK");
session_start();
$email=$_REQUEST['email'];
$password=$_REQUEST['password'];
//$role=$_REQUEST['role'];

$sql="select * from user where email='$email' and password='$password'";
$res=mysqli_query($conn,$sql);
$count = mysqli_num_rows($res);

if (mysqli_num_rows($res) > 0) {
    
    while($row = mysqli_fetch_assoc($res)) {
    $usertype= $row["user_type"];
    $name = $row['name'];
    $id = $row['userid'];
    

  }
}
setCookie('name',$name,time() + 2 * 24 * 60 * 60);
setCookie('id',$id,time() + 2 * 24 * 60 * 60);
  $_SESSION['name'] = $name;
  $_SESSION['id'] = $id;

  
  echo $_SESSION['name'],$name;
  if($usertype=='admin')
{
   echo "<script type='text/javascript'> document.location = 'http://localhost:3000/admin/'; </script>"; 
}
elseif($usertype=='Student')
{
    echo "<script type='text/javascript'> document.location = 'http://localhost:3000/student'; </script>";
}
elseif($usertype=='Teacher')
{
    echo "<script type='text/javascript'> document.location = 'http://localhost:3000/instructor'; </script>";
}
elseif($usertype=='QO')
{
    echo "<script type='text/javascript'> document.location = 'http://localhost:3000/quality-officer/'; </script>";
}
elseif($usertype=='ProgramCordinator')
{
    echo "<script type='text/javascript'> document.location = 'http://localhost:3000/program-coordinator/'; </script>";
}

else
{
    echo "<script>alert('no user');</script>";
}
    


/*
if($role=='admin')
{
$sql="select * from user where email='$email' and password='$password'";
$res=mysqli_query($conn,$sql);
if($res)
{
    echo "<script>
    alert('You are Valid Admin');
        window.location.href='/admin/';
        
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
        window.location.href='/student/';
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
        window.location.href='/instructor';
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
        window.location.href='/quality-officer/';
    </script>";
}
else 
{
    echo "<script>
    alert('InValid');
        window.location.href='/signin';
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
        window.location.href='/program-coordinator/';
    </script>";
}
else 
{
    echo "<script>
    alert('InValid');
        window.location.href='/signin';
    </script>";
}
}*/

?>