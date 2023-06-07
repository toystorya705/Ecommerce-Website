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
$command = json_decode(file_get_contents('php://input'), FILTER_SANITIZE_URL);


 if($command["command"]=="CHECK")
    //Find out if session exists
    if( array_key_exists('loggedInStaffEmail', $_SESSION) ){
        echo 4598;
    }
    else{
        echo 4000;
    }
    
    elseif($command["command"]=="LOGOUT"){
//Find all of the customers that match  this criteria
   //Start session management
   session_start();

   //Remove all session variables
   session_unset(); 

   //Destroy the session 
   session_destroy(); 

   //Echo result to user
   echo 'ok';

    }

    ?>
   
   
