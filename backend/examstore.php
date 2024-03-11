<?php
include('db.php');
header('Access-Control-Allow-Origin: http://localhost:3000');

$name = $_REQUEST['name'];
$subject = $_REQUEST['subject'];
$description = $_REQUEST['description'];
$q1 = $_REQUEST['q1'];
$q2 = $_REQUEST['q2'];
$q3 = $_REQUEST['q3'];
$q4 = $_REQUEST['q4'];

$sql = "insert into create_exam(name,subject,description) values('$name','$subject','$description')";
$conn->query($sql);
$last_id = $conn->insert_id;
// $res = mysqli_query($conn, $sql);




$sqll = "insert into student_exam(exam_id,course_id,q1,q2,q3,q4) values('$last_id','$subject','$q1','$q2','$q3','$q4')";
$res = mysqli_query($conn,$sqll);
// $conn->query($sqll);
// $las = $conn->insert_id;


// echo $q1,$q2,$q3,$q4,$subject,$last_id;
// $some - json_decode($res);
// echo($some);
if ($res ) {
    echo "<script>alert('Submitted Succesfully');
    window.location.href= 'http://localhost:3000/createexam';
    </script>";
} else {
    echo "<script>alert('Something Went Wrong')</script>";
}
