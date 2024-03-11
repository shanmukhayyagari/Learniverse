rejectqualitymanagepro.php

<?php
include("db.php");
header('Access-Control-Allow-Origin: http://localhost:3000');
header('Access-Control-Allow-Methods: GET,PUT,POST,DELETE,PATCH,OPTIONS');
$id=$_REQUEST['q'];
$sql="update quality_course set status=-1 where id='$id'";
$trp = mysqli_query($conn,$sql);


    echo "<script>
    alert('Reject Succesfully');
    window.location.href='http://localhost:3000/qaofficer-manage-courses/';
    </script>";

?>