<?php
include('db.php');
header('Access-Control-Allow-Origin: http://localhost:3000');

$name = $_REQUEST['name'];
$courseName = $_REQUEST['courseName'];
$courseCode = $_REQUEST['courseCode'];
$courseContent = $_REQUEST['courseContent'];
// $image = $_REQUEST['image'];
// $image = $_FILES['image']['name'];
// $temp = $_FILES['image']['name'];
// move_uploaded_file($temp, "http://localhost:3000/public/assets/images/course/$image");
$sql = "insert into create_course(name,course_name,courseCode,course_content) values('$name','$courseName','$courseCode','$courseContent')";

$res = mysqli_query($conn, $sql);

// echo $name,$courseCode,$courseContent,$courseName;

if ($res) {
    echo "<script>alert('Submitted Succesfully');
    window.location.href= 'http://localhost:3000/createcourse';
    </script>";
} else {
    echo "<script>alert('Something Went Wrong')</script>";
}
