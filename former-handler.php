<?php
// form-handler.php

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $affiliation = htmlspecialchars($_POST['affiliation']);
    $purpose = htmlspecialchars($_POST['purpose']);
    $agree = isset($_POST['data-agree']) ? 'Yes' : 'No';

    $toEmail = "1911045486@qq.com";
    $subject = "New Form Submission from " . $name;
    $message = "Name: " . $name . "\nEmail: " . $email . "\nAffiliation: " . $affiliation . "\nPurpose of Use: " . $purpose . "\nAgree to Data Sharing Agreement: " . $agree;

    $headers = "From: " . $email . "\r\n";
    $headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

    if (mail($toEmail, $subject, $message, $headers)) {
        echo "Thank you for your submission.";
    } else {
        echo "An error occurred. Please try again later.";
    }
}
?>
