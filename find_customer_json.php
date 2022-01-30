<?php
 //Start session management
 session_start(); 
//Include libraries
require __DIR__ . '/vendor/autoload.php';
    
//Create instance of MongoDB client
$mongoClient = new MongoDB\Client(
    'mongodb+srv://aryan1234:aryan1234@cluster0.eyuvc.mongodb.net/myFirstDatabase?retryWrites=true&w=majority');

//Select a database
$db = $mongoClient->ecommerce;

//Extract the data that was sent to the server
$data = json_decode(file_get_contents('php://input'), FILTER_SANITIZE_URL);

$findCriteria = [ "email" => $data["email"] ];

//Find all of the customers that match  this criteria
$resultArray= $db->customers->find($findCriteria)->toArray();


  //Check that there is exactly one customer
  if(count($resultArray) == 0){
    echo 'User email not found';
    return;
}
else if(count($resultArray) > 1){
    echo 'Database error: Multiple users have same email address.';
    return;
}

//Get customer and check password
$customer = $resultArray[0];
if($customer['password'] != $data["password"]){
    echo 'Password incorrect.';
    return;
}
    
//Start session for this user

$_SESSION['loggedInUserEmail'] = $customer["customer_id"];// creating session using cutomer_id

//Inform web page that login is successful
echo 0;  

?>

