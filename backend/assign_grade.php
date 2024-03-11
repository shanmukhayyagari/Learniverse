<?php
include('db.php');
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Methods: HEAD, GET, POST, PUT, PATCH, DELETE, OPTIONS");
header("Access-Control-Allow-Headers: X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method,Access-Control-Request-Headers, Authorization");
// header('Content-Type: application/json');


$question1 = $_REQUEST['marks'];
$question2 = $_REQUEST['grade'];


// $user_id = $_SESSION['id'];
$questionId = $_REQUEST['id'];

// echo $questionId,$question1,$question2;

// echo $question1,$question2,$questionId;
$sql = "UPDATE answers SET grade='$question2',marks = '$question1' where id = '$questionId'";
// echo $sql;

// $sql = "update  answers set marks = '$question1',grade = '$question2' where id = '$questionId')";
// echo $question1,$question2,$question3,$question4,$questionId,$exam_id,$course;

$res = mysqli_query($conn, $sql);
// echo $res;
if ($res) {
    echo "<script>alert('Submitted Succesfully');
    window.location.href= 'http://localhost:3000/grade/';
    </script>";
} else {
    
    echo "<script>alert('Something Went Wrong')</script>";
}