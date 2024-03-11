<?php
include('db.php');
header('Access-Control-Allow-Origin: http://localhost:3000');
header('Access-Control-Allow-Methods: GET,PUT,POST,DELETE,PATCH,OPTIONS');
$sql="select * from user";
$res=mysqli_query($conn,$sql);
while($row = $result->fetch_assoc()) {
    echo "DATA1: " . $row["data1"]. " - DATA2: " . $row["data2"]. "<br>";
  }
?>