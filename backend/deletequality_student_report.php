<?php
include("db.php");
header('Access-Control-Allow-Origin: http://localhost:3000');
header('Access-Control-Allow-Methods: GET,PUT,POST,DELETE,PATCH,OPTIONS');
$id=$_REQUEST['q'];
$sql="delete from quality_student_report where sid='$id'";
$trp = mysqli_query($conn,$sql);


    echo "<script>
    alert('Deleted Succesfully');
    window.location.href='http://localhost:3000/qaofficer-monitor-reports/';
    </script>";

?>