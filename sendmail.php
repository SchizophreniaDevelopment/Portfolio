<?php

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
  $email = $_POST['email'];
  $name = $_POST['name'];
  $message = $_POST['message'];

  $to = 'noah.t.scott06@gmail.com';
  $subject = 'Email from website';
  $body = "From: $name\nE-Mail: $email\nMessage:\n$message";

  mail($to, $subject, $body);
}

?>
