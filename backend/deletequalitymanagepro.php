<?php
include("db.php");
header('Access-Control-Allow-Origin: http://localhost:3000');
header('Access-Control-Allow-Methods: GET,PUT,POST,DELETE,PATCH,OPTIONS');
$id=$_REQUEST['q'];
$sql="delete from quality_manage_program where pid='$id'";
$trp = mysqli_query($conn,$sql);


    echo "<script>
    alert('Deleted Succesfully');
    window.location.href='http://localhost:3000/qaofficer-manage-programs/';
    </script>";

?>