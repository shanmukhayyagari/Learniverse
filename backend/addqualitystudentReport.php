<?php
include('db.php');
header('Access-Control-Allow-Origin: http://localhost:3000');

$studentName=$_REQUEST['studentName'];
$studentID=$_REQUEST['studentID'];

$course=$_REQUEST['course'];
$passPercentage=$_REQUEST['passPercentage'];

$comments=$_REQUEST['comments'];

$sql1="select * from quality_student_report where stud_id='$studentID'";
$re=mysqli_query($conn,$sql1);
$r1=mysqli_num_rows($re);

if($r1==0)
{

$sql="insert into quality_student_report(sname,stud_id,course,percentage,comments) values('$studentName','$studentID','$course','$passPercentage','$comments')";
$res=mysqli_query($conn,$sql);
if($res)
{
    echo "<script>alert('Submitted Succesfully');
    window.location.href='http://localhost:3000/qaofficer-monitor-reports/'
    </script>";
   ;
}
else 
{
    echo "<script>alert('Something Went Wrong')</script>";
}
}
else 
{
    echo "<script>
        alert('This student Id already exist');
        window.location.href='http://localhost:3000/qaofficer-monitor-reports/'
    </script>";
}
?>