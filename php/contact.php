<?php
$servename="localhost";
$username="root";
$password= "";
$database_name="portfolio_EK";

$conn = new mysqli($servename,$username,$password,$database_name); 
if($conn->connect_error){
    echo"Can not connect with database :(".$conn->connect_error;
}    

if(isset($_POST["first_name"])){

$first_name = $_POST["first_name"];
$last_name = $_POST["last_name"];       
$phone_number = $_POST["phone_number"];
$email= $_POST["email"];
$company_name = $_POST["company_name"];
$content = $_POST["content"]; 


if($first_name != ""|| $last_name !=""|| $phone_number !=""|| $email !=""|| $company_name != ""|| $content != ""){
    $add ="INSERT INTO main_table(main_id ,first_name,last_name,phone_number,email,company_name,content)
    VALUES ('NULL','$first_name','$last_name','$phone_number','$email','$company_name','$content');";

}
$send = mysqli_query($conn, $add);
if($send){
    echo "<b>Sucessfully!</b>";
}else {}



}
$conn->close();

?>