<?php
include('db.php');
// header('Access-Control-Allow-Origin:http://localhost:3000');
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Methods: HEAD, GET, POST, PUT, PATCH, DELETE, OPTIONS");
header("Access-Control-Allow-Headers: X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method,Access-Control-Request-Headers, Authorization");
// header('Content-Type: application/json');


$name = $_REQUEST['name'];
$studentId = $_REQUEST['studentId'];
$id = $_REQUEST['id'];
$email = $_REQUEST['email'];
$courses = $_REQUEST['courses'];
$passPercentage = $_REQUEST['passPercentage'];


// echo $passPercentage,$courses,$email,$id,$studentId,$name;
$set = "UPDATE student_add SET email='$email',sname='$name',stud_id='$studentId',course='$courses', percentage ='$passPercentage' WHERE sid=$id";
// $set = "update student_add SET sname = '$name',stud_id='$studentId',email='$email',course='$courses',perccentage='$passPercentage' WHERE sid = $id";
$r1=mysqli_query($conn,$set);

if($r1){
    echo "<script>alert('Submitted Succesfully');
    window.location.href= 'http://localhost:3000/studentdetails';
    </script>";
}
else{
    echo "<script>alert('this student id already exisit');
         window.location.href= 'http://localhost:3000/studentdetails/';
         </script>";
}


//     $sql = "insert into student_add(sname,stud_id,email,course,percentage) values('$name','$studentId','$email','$courses','$passPercentage')";
//     $res = mysqli_query($conn, $sql);
//     if ($res) {
//         echo "<script>alert('Submitted Succesfully');
//         window.location.href= 'http://localhost:3000/studentdetails';
//         </script>";
//     } else {
//         echo "<script>alert('Something Went Wrong')</script>";
//     }
    
// }
// else 
// {
//     echo "<script>alert('this student id already exisit');
//     window.location.href= 'http://localhost:3000/studentdetails/';
//     </script>";
// }