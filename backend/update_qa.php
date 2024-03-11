<?php
include('db.php');
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Methods: HEAD, GET, POST, PUT, PATCH, DELETE, OPTIONS");
header("Access-Control-Allow-Headers: X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method,Access-Control-Request-Headers, Authorization");
// header('Content-Type: application/json');


$name = $_REQUEST['name'];
$studentId = $_REQUEST['qaOfficerId'];
$id = $_REQUEST['id'];
$email = $_REQUEST['email'];
$courses = $_REQUEST['coursesAssigned'];
$passPercentage = $_REQUEST['passPercentage'];


// echo $passPercentage,$courses,$email,$id,$studentId,$name;
$set = "UPDATE quality_add SET email='$email',qname='$name',qid='$studentId',qass='$courses', pass ='$passPercentage' WHERE id=$id";
// $set = "update student_add SET sname = '$name',stud_id='$studentId',email='$email',course='$courses',perccentage='$passPercentage' WHERE sid = $id";
$r1=mysqli_query($conn,$set);
// echo $r1;


if($r1){
    echo "<script>alert('Submitted Succesfully');
         window.location.href= 'http://localhost:3000/instructordetails/';
         </script>";
}
else{
    echo "<script>alert('this student id already exisit');
         window.location.href= 'http://localhost:3000/instructordetails/';
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