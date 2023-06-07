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
$command = json_decode(file_get_contents('php://input'), FILTER_SANITIZE_URL);// receiving command and data


if ($command["command"] == "CHECK_SESSION") {
    //Find out if session exists
    if (array_key_exists('loggedInUserEmail', $_SESSION)) {
        echo 5000;
    } else {

        echo 5999;
    }
} else if ($command["command"] == "LOGOUT") {
    //Find all of the customers that match  this criteria
    //Start session management
    session_start();

    //Remove all session variables
    session_unset();

    //Destroy the session 
    session_destroy();

    //Echo result to user
    echo 'logout';
} else if ($command["command"] == "ADD_TO_CART") {

    $criteria = [
        "customer_id" => $_SESSION["loggedInUserEmail"],
        "product_id" => $command["cart_product_id"]
    ];
    $cursor = $db->cart->find($criteria)->toArray();

    if (count($cursor) == 0) {
        $criteria = [

            "product_id" => $command["cart_product_id"],
            "customer_id" => $_SESSION['loggedInUserEmail'],
            "cart_id" => $command["cart_id"],
            "count_number" => 1

        ];
        //Select a collection 
        $collection = $db->cart;

        //Add the new product to the database
        $insertResult = $collection->insertOne($criteria);

        $criteria = [
            "customer_id" => $_SESSION['loggedInUserEmail']
        ];
        $resultArray = $db->cart->find($criteria)->toArray();


        
    } else {
        $data =  $cursor[0];
        $temp=1+$data["count_number"];
      
        $replaceCriteria = [
            "cart_id" => $data["cart_id"]
        ];
        $replacedata = [
            "customer_id" => $_SESSION['loggedInUserEmail'],
            "product_id" => $data["product_id"],
            "cart_id" => $data["cart_id"],
            "count_number" => $temp
        ];


        //Replace customer data for this ID
        $updateRes = $db->cart->replaceOne($replaceCriteria, $replacedata);
    
    }

    $criteria = [
        "customer_id" => $_SESSION['loggedInUserEmail']
    ];
    $cursor = $db->cart->find($criteria)->toArray();
     $number=0;
    for($i=0;$i<count($cursor);$i++){
     
        $temp=$cursor[$i];
        $number+=$temp["count_number"];

    }
    echo $number;//checking size data inside cart related to user
    

} else if ($command["command"] == "CART_RELOAD") {
   $criteria = [
        "customer_id" => $_SESSION["loggedInUserEmail"]
    ];
    $cursor = $db->cart->find($criteria)->toArray();
     $number=0;
    for($i=0;$i<count($cursor);$i++){
     
        $temp=$cursor[$i];
        $number+=$temp["count_number"];

    }
    echo $number;//checking size data inside cart related to user
    
}
