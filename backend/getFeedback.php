<?php
include("db.php");
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Methods: HEAD, GET, POST, PUT, PATCH, DELETE, OPTIONS");
header("Access-Control-Allow-Headers: X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method,Access-Control-Request-Headers, Authorization");
header('Content-Type: application/json');
// $sql="select * from student_feedback";


$sql="select * from student_feedback left join user on user.userid = student_feedback.stud_id";
// $sql="select * from student_feedback ";
$trp = mysqli_query($conn,$sql);
$rows = array();
while($r = mysqli_fetch_assoc($trp)) {
    $rows[] = $r;
}
print json_encode($rows);
?>