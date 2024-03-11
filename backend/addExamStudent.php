<?php
include('db.php');
header('Access-Control-Allow-Origin: http://localhost:3000');

session_start();
$id = $_SESSION['id'];


$question1 = $_REQUEST['question1'];
$question2 = $_REQUEST['question2'];

$question3 = $_REQUEST['question3'];
$question4 = $_REQUEST['question4'];

// $user_id = $_SESSION['id'];
// $questionId = $_REQUEST['questionId'];
$exam_id = $_REQUEST['exam'];
$course = $_REQUEST['course'];

$fetch="select * from answers where user_id='$id' and exam_id = '$exam_id'";
$r1=mysqli_query($conn,$fetch);
$co=mysqli_num_rows($r1);
if($co==0)
{

    $sql = "insert into answers(user_id,exam_id,course_id,a4,a3,a2,a1) values('$id','$exam_id','$course','$question1','$question2','$question3','$question4')";

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
    echo "<script>alert('Answers  already submitted');
    window.location.href= 'http://localhost:3000/student/';
    </script>";
}

$sql = "insert into answers(user_id,exam_id,course_id,a4,a3,a2,a1) values('$id','$exam_id','$course','$question1','$question2','$question3','$question4')";
// echo $question1,$question2,$question3,$question4,$questionId,$exam_id,$course;

// $res = mysqli_query($conn, $sql);
// // echo $res;
// if ($res) {
//     echo "<script>alert('Submitted Succesfully');
//     window.location.href= 'http://localhost:3000/student/';
//     </script>";
// } else {
//     echo "<script>alert('Something Went Wrong')</script>";
// }
