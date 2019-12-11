<?php
    $_POST['submit'];
      $name=$_POST['name'];
      $service=$_POST['services'];
      $email=$_POST['email'];
      $msg=$_POST['msg'];

      $to='YOUR_EMAIL_ADDRESS';
      $subject="amaf.sa_Service_Request_Visitor";
      $message="Name: $name.\n"."Service: $service.\n"."Message: \n $msg.\n";
      $headers="From: ".$email;

    
      mail($to, $subject, $message, $headers);
 ?>