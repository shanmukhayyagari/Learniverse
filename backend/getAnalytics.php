<?php
include("db.php");
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Methods: HEAD, GET, POST, PUT, PATCH, DELETE, OPTIONS");
header("Access-Control-Allow-Headers: X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method,Access-Control-Request-Headers, Authorization");
// header('Content-Type: application/json');
// $sql="select * from student_feedback left join users on users.userid = student_feedback.stud_id";
session_start();
$id = $_SESSION['id'];  
echo $id,'nahi arahi id ';
$sql="select answers.marks from create_course left join create_exam on create_course.course_name = create_exam.subject left join answers on answers.exam_id = create_exam.eid where answers.user_id = '$id' group by answers.exam_id";

$trp = mysqli_query($conn,$sql);
$rows = array();
while($r = mysqli_fetch_assoc($trp)) {
    $rows[] = $r;
}
print json_encode($rows);
?>