<?php
       
session_start();//starting session

require __DIR__ . '../vendor/autoload.php';

//Create instance of MongoDB clients
$mongoClient = new MongoDB\Client(
    'mongodb+srv://aryan1234:aryan1234@cluster0.eyuvc.mongodb.net/myFirstDatabase?retryWrites=true&w=majority');

//Select a database
$db = $mongoClient->ecommerce;

$command = json_decode(file_get_contents('php://input'), FILTER_SANITIZE_URL);// receiving command and data

if($command==2000){// fetching cart details based on cutomer_id
    
        $criteria=[
          "customer_id"=>$_SESSION["loggedInUserEmail"],
          
        ];
        $cursor = $db->cart->find($criteria);

    }else{// fetching product detais
        $criteria=[
            "product_id"=>$command["product_id"]
            
          ];
          $cursor = $db->products->find($criteria);
  
    }


    //Output each customer or products as a JSON object with comma in between
    $jsonStr = '['; //Start of array of customers or products in JSON

    //Work through the customers
    foreach ($cursor as $customer) {
       
        $jsonStr .= json_encode($customer); //Convert PHP representation of customer or products into JSON 
        $jsonStr .= ','; //Separator between customers or products
    }

    //Remove last comma
    $jsonStr = substr($jsonStr, 0, strlen($jsonStr) - 1);

    //Close array
    $jsonStr .= ']';

    //Echo final string
    echo $jsonStr;