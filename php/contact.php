<?php
$conn = new mysqli('localhost', 'root', '', 'portfolio_ek');
if (isset($_POST["first_name"]) && isset($_POST["phone_number"]) && isset($_POST["e-mail"]) && isset($_POST["company_name"]) && isset($_POST["content"])) {

    $first_name = $_POST["first_name"];
    $phone_number = $_POST["phone_number"];
    $email = $_POST["e-mail"];
    $company_name = $_POST["company_name"];
    $content = $_POST["content"];

    if ($first_name != "" && $phone_number != "" && $email != "" && $company_name != "" && $content != "") {
        $add = "INSERT INTO main_table (main_id, first_name, phone_number, email, company_name, content) 
                VALUES (NULL, '$first_name', '$phone_number', '$email', '$company_name', '$content')";
                
        if ($conn->query($add) === FALSE) { echo "Error: " . $add . "<br>" . $conn->error; } 
    }
}

$conn->close();
?>
