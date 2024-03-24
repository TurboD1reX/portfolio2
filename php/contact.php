<?php
           $conn = new mysqli('localhost', 'root', '', 'portfolio_ek');

           if ($conn->connect_error) {
               die("Connection failed: " . $conn->connect_error);
           }
           if (isset($_POST["full_name"], $_POST["phone_number"], $_POST["company_name"], $_POST["e-mail"], $_POST["content"])) {
                $full_name = $_POST["first_name"];
                $phone_number = $_POST["phone_number"];
                $company_name = $_POST["company_name"];
                $email = $_POST["e-mail"];
                $content = $_POST["content"];
                
                // Wstawienie danych do bazy danych
                $sql = "INSERT INTO tabela (main_id,full_name, phone_number, company_name, email, content) 
                        VALUES (NULL,'$full_name', '$phone_number', '$company_name', '$email', '$content')";

                if ($conn->query($sql) === TRUE) {
                    echo "New record created successfully";
                } else {
                    echo "Error: " . $sql . "<br>" . $conn->error;
                }
            }

            $conn->close();
            ?>