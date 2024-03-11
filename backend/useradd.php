<?php
include('db.php');
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'PHPMailer/src/Exception.php';
require 'PHPMailer/src/PHPMailer.php';
require 'PHPMailer/src/SMTP.php';
header('Access-Control-Allow-Origin:http://localhost:3000');
header('Access-Control-Allow-Methods: GET,PUT,POST,DELETE,PATCH,OPTIONS');
header("Access-Control-Allow-Headers: Content-Type, Accept, Authorization, X-Requested-With, X-Auth-Token, Origin, Application");
$name=$_REQUEST['name'];
$email=$_REQUEST['email'];
$password=$_REQUEST['password'];
$profile=$_REQUEST['profile'];
$contact=$_REQUEST['contact'];
$sql="insert into user(name,email,password,user_type,contact) values('$name','$email','$password','$profile',$contact)";
$res=mysqli_query($conn,$sql);
if($res)
{
$to = 'shanmukh.ayyagari232000@gmail.com';
$subject = 'Registration Confirmation';
$message = 'Thank you for registering with us. We hope to facilitate you with our best.';

$Mail = new PHPMailer(true);

try {
    // Server settings
    $Mail->isSMTP();
    $Mail->Host       = 'smtp.gmail.com';
    $Mail->SMTPAuth   = true;
    $Mail->Username   = 'shanmukh.ayyagari232000@gmail.com'; // Your Gmail email address
    $Mail->Password   = 'Shannu@23'; // Your Gmail password
    $Mail->SMTPSecure = 'ssl';
    $Mail->Port       = 465;

    // Recipients
    $Mail->setFrom('shanmukh.ayyagari232000@gmail.com', 'Your Name');
    $Mail->addAddress($to, 'Recipient Name');

    // Content
    $Mail->isHTML(true);
    $Mail->Subject = $subject;
    $Mail->Body    = $message;

    $Mail->send();
    echo 'Email sent successfully.';
} catch (Exception $e) {
    echo "Failed to send email. Error: {$Mail->ErrorInfo}";
}
echo "<script>
alert('SigUp Succesfully');
window.location.href='http://localhost:3000/SignIn/';
</script>";
   

   
}
else 
{
    echo "<script>alert('Something Went Wrong')</script>";
}
?>