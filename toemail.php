<?php
  /*$name = $_POST['formName'];
  $visitor_email = $_POST['formEmail'];
  $visitor_country = $_POST['formCountry'];
  $message = $_POST['formTextArea'];

  $email_from = 'yourname@yourwebsite.com';
  $email_subject = "New Form submission";
 
  $email_body = "You have received a new message from the user $name from $visitor_country.\n".
                "Here is the message:\n\n $message";

  echo $email_body;
  echo "pasa por aca";
  $to = "peraltag@gmail.com";
  $headers = "From: $visitor_email \r\n";
  $headers .= "Reply-To: $visitor_email \r\n";
  echo "antes de mandar mail";
  mail($to,$email_subject,$email_body,$headers);
  echo "despues de mandar";*/
  $msg="";
	/*if(isset($_POST['submit']))
	{*/
		$from_add = $_POST['formEmail'];
		$name = $_POST['formName'];
  	$visitor_country = $_POST['formCountry'];


  	$from_add = filter_var($from_add, FILTER_VALIDATE_EMAIL);

		if ($from_add === FALSE) {
	  	echo "Fail";
		  exit(1);
		} else {

	  	$message = $_POST['formTextArea'];

			$to_add = "peraltag@gmail.com"; //info@improveworks.com

			$subject = "New submission from improveworks";
			$message = "You have received a new message from the user $name from $visitor_country.\n".
	               "Here is the message:\n\n $message";
			
			$message = str_replace("\n.", "\n..", $message);
			$headers = "From: $from_add \r\n";
			$headers .= "Reply-To: $from_add \r\n";
			$headers .= "Return-Path: $from_add\r\n";
			$headers .= "X-Mailer: PHP \r\n";
			
			
			if(mail($to_add,$subject,$message,$headers)) {
				$msg = "OK";
			} else {
		 	  $msg = "Fail";
			}
			echo $msg;
		}
	//}
?>