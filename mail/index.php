<?php

$method = $_SERVER['REQUEST_METHOD'];

$name = $_GET['name'];
$email = $_GET['email'];
$country = $_GET['country'];
$body = $_GET['body'];

mail("peraltag@gmail.com", "subject", $body)
