<?php
include('db.php');
header('Access-Control-Allow-Origin: http://localhost:3000');


$discussionTitle = $_REQUEST['discussionTitle'];
$discussionContent = $_REQUEST['discussionContent'];





$sql = "insert into discussion(title,content) values('$discussionTitle','$discussionContent')";
$res = mysqli_query($conn, $sql);
if ($res) {
    echo "<script>alert('Submitted Succesfully');
    window.location.href= 'http://localhost:3000/student/';
    </script>";
} else {
    echo "<script>alert('Something Went Wrong')</script>";
}
