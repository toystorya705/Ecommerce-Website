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

    //Select a collection 
    $collection = $db->customers;
    $customer = json_decode(file_get_contents('php://input'), FILTER_SANITIZE_URL);// receiving data

    //Add the new customer to the databasea
    $insertResult = $collection->insertOne($customer);

    //Echo result back to user
    if ($insertResult->getInsertedCount() == 1) {
        $_SESSION['loggedInUserEmail'] = $customer["customer_id"];//Creating session
        echo 10000; // sending response in number
       
    } else {
        echo $insertResult;
    }
 
?>
