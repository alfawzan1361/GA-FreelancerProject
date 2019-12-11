<?php
    $_POST['submit'];
      $fname=$_POST['fname'];
      $lname=$_POST['lname'];
      $email=$_POST['email'];
      $msg=$_POST['msg'];

      $to='YOUR_EMAIL_ADDRESS';
      $subject="amaf.sa_Contact_Us_Visitor";
      $message="Name: $fname $lname.\n"."Message: \n $msg.\n";
      $headers="From: ".$email;

    
      mail($to, $subject, $message, $headers);
 ?>