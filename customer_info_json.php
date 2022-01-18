<?php
//Replace customer data for this ID
session_start();//starting session

require __DIR__ . '../vendor/autoload.php';

//Create instance of MongoDB clients
$mongoClient = new MongoDB\Client(
    'mongodb+srv://aryan1234:aryan1234@cluster0.eyuvc.mongodb.net/myFirstDatabase?retryWrites=true&w=majority');

//Select a database
$db = $mongoClient->ecommerce;

$command = json_decode(file_get_contents('php://input'), FILTER_SANITIZE_URL);//receiving command and data


if ($command == 9090) {
 
  $criteria = [
    "customer_id" => $_SESSION["loggedInUserEmail"]

  ];


  //Replace customer data for this ID
  $cursor = $db->customers->find($criteria);//customer profile details


  $jsonStr = '['; //Start of array of customers in JSON

  //Work through the customers
  foreach ($cursor as $product) {
    $jsonStr .= json_encode($product); //Convert PHP representation of customer into JSON 
    $jsonStr .= ','; //Separator between customers
  }

  //Remove last comma
  $jsonStr = substr($jsonStr, 0, strlen($jsonStr) - 1);

  //Close array
  $jsonStr .= ']';

  //Echo final string
  echo $jsonStr;
} else {
  $customerdata = [
    '$set' => $command 
  ];

  $replacecriteria = [
    "customer_id" => $_SESSION["loggedInUserEmail"]

  ];


  //Replace customer data for this ID
  $updateRes = $db->customers->updateOne($replacecriteria, $customerdata);
}

?>