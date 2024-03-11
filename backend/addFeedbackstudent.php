<?php
include('db.php');
header('Access-Control-Allow-Origin: http://localhost:3000');


$studentId = $_REQUEST['studentId'];
$studentEmail = $_REQUEST['studentEmail'];

$instructorName = $_REQUEST['instructorName'];
$course = $_REQUEST['course'];
$feedback=$_REQUEST['feedback'];




$sql = "insert into feedback_student(stid,email,instructor,course,feedback) values('$studentId','$studentEmail','$instructorName','$course','$feedback')";
$res = mysqli_query($conn, $sql);
if ($res) {
    echo "<script>alert('Submitted Succesfully');
    window.location.href= 'http://localhost:3000/student/';
    </script>";
} else {
    echo "<script>alert('Something Went Wrong')</script>";
}
